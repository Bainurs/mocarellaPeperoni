<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <vue-good-table
                    :columns="columns"
                    :rows="ingredients"
                    :search-options="{ enabled: true }"
                    :pagination-options="{enabled: true}"
                    :line-numbers="true">
                    <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'name'">
                {{props.row.name}}
            </span>
                        <span v-else-if="props.column.field[0] === 'delete' && props.column.field[1] === 'edit' && props.column.field[2] === 'view'">
                <button class="btn btn-danger" v-on:click.self.prevent="deleteIngredient(props.row.id)">Удалить</button>
                <router-link :to="{name: 'ingredientEdit', params: {id: props.row.id}}"><span class="badge badge-green">Изменить</span></router-link>
                <router-link :to="{name: 'ingredientShow', params: {id: props.row.id}}"><span class="btn btn-primary">Вид</span></router-link>
            </span>
                    </template>
                </vue-good-table>
            </div>
            <div class="col">
                <router-link :to="{name:'ingredientAdd',path: 'admin/ingredient/add'}" class="btn btn-success">Add product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                columns: [
                    {
                        label: 'Название',
                        field: 'name'
                    },
                    {
                        label: 'Параметры',
                        field: ['delete', 'edit', 'view'],
                    },
                ],
                ingredients: []
            }
        },
        methods: {
            getIngredients() {
                axios.get('http://mozzarella/api/get-ingredients')
                    .then((response) => {
                        this.ingredients = response.data;
                    })
            },
            deleteIngredient(id) {
                axios.delete(`http://mozzarella/api/ingredient/delete/${id}`)
                    .then(response => {
                        let i = this.ingredients.map(item => item.id).indexOf(id);
                        this.ingredients.splice(i, 1);
                    })
            }
        },
        mounted() {
            this.getIngredients();
        }
    }
</script>

<style scoped>

</style>
