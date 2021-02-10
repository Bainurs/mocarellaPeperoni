<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <vue-good-table
                    :columns="columns"
                    :rows="data"
                    :search-options="{ enabled: true }"
                    :pagination-options="{enabled: true}"
                    :line-numbers="true">
                    <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'img'">
                <img :src="props.row.img" style="width: 100px; height: 100px" alt="">
            </span>
            <span v-if="props.column.field === 'name'">
                {{props.row.name}}
            </span>
                        <span v-if="props.column.field === 'type'">
                {{props.row.type_id}}
            </span>
                        <span v-else-if="props.column.field === 'size'">
                {{props.row.size}}
            </span>
                        <span v-else-if="props.column.field === 'price'">
                {{props.row.price}}
            </span>
                        <span v-else-if="props.column.field[0] === 'delete' && props.column.field[1] === 'edit' && props.column.field[2] === 'view'">
                <button class="btn btn-danger" v-on:click.self.prevent="deleteProduct(props.row.id)">Удалить</button>
                <router-link :to="{name: 'productEdit', params: {id: props.row.id}}"><span class="badge badge-green">Изменить</span></router-link>
                <router-link :to="{name: 'productShow', params: {id: props.row.id}}"><span class="btn btn-primary">Вид</span></router-link>
            </span>
                    </template>
                </vue-good-table>
            </div>
            <div class="col">
                <router-link :to="{path: 'add'}" class="btn btn-success">Add product</router-link>
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
                        label: 'Изображение',
                        field: 'img'
                    },
                    {
                        label: 'Название',
                        field: 'name'
                    },
                    {
                        label: 'Тип',
                        field: 'type',
                    },
                    {
                        label: 'Размер',
                        field: 'size',
                    },
                    {
                        label: 'Цены',
                        field: 'price'
                    },
                    {
                        label: 'Параметры',
                        field: ['delete', 'edit', 'view'],
                    },
                ],
                data: []
            }
        },
        methods: {
            getProducts() {
                axios.get('http://mozzarella/api/get-products')
                    .then((response) =>  {

                        console.log(response.data);
                        this.data = response.data;
                    })
            },
            deleteProduct(id) {
                axios.delete(`http://mozzarella/api/product/delete/${id}`)
                    .then((response) => {
                        let i = this.data.map(item => item.id).indexOf(id);
                        this.data.splice(i, 1);
                    })
            }
        },
        mounted() {
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>
