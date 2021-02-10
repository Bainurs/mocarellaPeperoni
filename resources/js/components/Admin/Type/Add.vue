<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <form @submit.prevent="createType">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3 text-left">
                                <span class="h3">Категория</span>
                            </div>
                            <div class="col-6">
                                <input type="text" class="w-100 px-3 py-2" v-model="data.name">
                            </div>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Добавить категорию</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import '@ckeditor/ckeditor5-build-classic/build/translations/ru';
    export default {
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'subscript', 'superscript', 'bulletedList', 'numberedList', 'blockQuote', '|', ''],
                    language: 'ru',
                },
                data: {},
            }
        },
        methods: {
            createType() {
                console.log(this.data);
                axios.post('http://mozzarella/api/type/add',this.data)
                    .then(response => {
                        this.$router.push({name: 'typeDashboard'});
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = true)
            },
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    .ck-editor__editable {
        min-height: auto;
        width: 100%;
    }
</style>
