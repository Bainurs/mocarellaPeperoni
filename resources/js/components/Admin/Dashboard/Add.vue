<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <form @submit.prevent="createProduct">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3 text-left">
                                <span class="h3">Название Продукта</span>
                            </div>
                            <div class="col-9">
                                <input type="text" name="name" v-model="data.name">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <span class="h3">Категория продукта</span>
                            </div>
                            <div class="col-9">
                                <select name="type" v-model="data.type_id">
                                    <option v-for="type in types" :value="type.id">{{type.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <span class="h3">Ингредиенты</span>
                            </div>
                            <div class="col-9">
                                <multiselect name="ingredients" v-model="values" :options="ingredients" :multiple="true" :close-on-select="false"
                                             :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name"
                                             track-by="name" :preselect-first="true">
                                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                </multiselect>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <span class="h3">Изображение</span>
                            </div>
                            <div class="col-9">
                                <input type="file" name="media" v-on:change="convertAndSaveImageForOption">
                                <img :src="img" alt="">
                            </div>

                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <span class="h3">size</span>
                            </div>
                            <div class="col-9">
                                <input type="text" name="size" v-model="data.size"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <span class="h3">Цена</span>
                            </div>
                            <div class="col-9">
                                <input type="text" name="price" v-model="data.price">
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">add Product</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

    import Multiselect from 'vue-multiselect'

    export default {
        components: {
            'multiselect': Multiselect
        },
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'subscript', 'superscript', 'bulletedList', 'numberedList', 'blockQuote', '|', ''],
                    language: 'ru',
                },
                optionsMult: ['list', 'of', 'options'],
                img:'',
                data: {},
                types: [],
                ingredients:[],
                values:[],
                options: [
                    {
                        language: 'Javascript',
                        libs: [
                            { name: 'Vue.js', category: 'Front-end' },
                            { name: 'Adonis', category: 'Backend' }
                        ]
                    },
                    {
                        language: 'Ruby',
                        libs: [
                            { name: 'Rails', category: 'Backend' },
                            { name: 'Sinatra', category: 'Backend' }
                        ]
                    },
                    {
                        language: 'Other',
                        libs: [
                            { name: 'Laravel', category: 'Backend' },
                            { name: 'Phoenix', category: 'Backend' }
                        ]
                    }
                ],
            }
        },
        methods: {
            dataIngredientsForEach(element, index){
                this.data.ingredients[index] = element.id;
            },
            convertAndSaveImageForOption (e) {
                if (e.target.files[0] !== undefined) {
                    const selectedImage = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.img = e.target.result;
                    };
                    reader.readAsDataURL(selectedImage);
                } else {
                    this.data.img = '';
                }
            },
            createProduct() {
                this.data.ingredients = [];
                this.values.forEach(this.dataIngredientsForEach);
                this.data.img = this.img;
                axios.post('http://mozzarella/api/product/add', this.data)
                    .then(response => {
                        // console.log('work');
                        // this.$router.push({name: 'productDashboard'});
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = true)
            },

            getData() {
                axios.get('http://mozzarella/api/getDatatoCreateProduct')
                    .then((response) => {
                        this.types = response.data.types;
                        this.ingredients = response.data.ingredients;
                        // console.log(response.data);
                    });
            },
        },
        mounted() {
            this.getData();
            console.log('Component mounted.')
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
    .ck-editor__editable {
        min-height: auto;
        width: 100%;
    }
</style>
