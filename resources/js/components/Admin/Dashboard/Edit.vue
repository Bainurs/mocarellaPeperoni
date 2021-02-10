<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <form @submit.prevent="updateProduct">
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
                                <div v-if="changeIngredients === false">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item" v-for="ingredient in data.ingredients">{{ingredient.c_name}}</li>
                                    </ul>
                                    <button class="btn btn-primary" @click="onChangeActive">change</button>
                                </div>
                                <div v-else-if="changeIngredients === true">
                                    <multiselect name="ingredients" v-model="values" :options="ingredients" :multiple="true" :close-on-select="false"
                                                 :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="c_name"
                                                 track-by="c_name" :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                    </multiselect>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--                    <div class="form-group">-->
                    <!--                        <div class="row">-->
                    <!--                            <div class="col-3">-->
                    <!--                                <span class="h3">Изображение</span>-->
                    <!--                            </div>-->
                    <!--                            <div class="col-9">-->
                    <!--                                <input type="file" name="media" v-on:change="onChangeForm">-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
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
                changeIngredients: false,
            }
        },
        methods: {
            onChangeForm(event) {
                this.data.img = event.target.files[0];
                console.log(event.target.files);
            },

            onChangeActive() {
                this.changeIngredients = !this.changeIngredients
            },

            getData() {
                axios.get(`http://mozzarella/api/product/edit/${this.$route.params.id}`)
                    .then((response) => {
                        this.data = response.data.product;
                        this.data.ingredients.forEach(element => {
                            element.c_name = element.name + ' ' + element.weight;
                        });
                        this.types = response.data.types;
                        this.ingredients = response.data.ingredients;
                        this.ingredients.forEach(element => {
                            element.c_name = element.name + ' ' + element.weight;
                        });
                        console.log(response.data);
                    });
            },

            dataIngredientsForEach(element, index, array){
                this.data.ingredients[index] = element.id;
            },
            updateProduct() {
                this.data.ingredients = [];
                this.values.forEach(this.dataIngredientsForEach);
                axios.post(`http://mozzarella/api/product/update/${this.$route.params.id}`, this.data)
                    .then(response => {
                        this.$router.push({name: 'productDashboard'})
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = true)
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
