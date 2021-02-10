<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <vue-good-table
                    :columns="columns"
                    :rows="sizes"
                    :search-options="{ enabled: true }"
                    :pagination-options="{enabled: true}"
                    :line-numbers="true">
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'size_name'">
                            {{props.row.size_name}}
                        </span>
                                    <span v-else-if="props.column.field[0] === 'delete' && props.column.field[1] === 'edit' && props.column.field[2] === 'view'">
                                <button class="btn btn-danger" @click.self.prevent="deleteSize(props.row.id)">Удалить</button>
                            <router-link :to="{name: 'sizeEdit', params: {id: props.row.id}}"><span class="badge badge-green">Изменить</span></router-link>
                            <router-link :to="{name: 'sizeShow', params: {id: props.row.id}}"><span class="btn btn-primary">Вид</span></router-link>
                        </span>
                    </template>
                </vue-good-table>
            </div>
            <div class="col">
                <router-link :to="{path: 'add'}" class="btn btn-success">Add type</router-link>
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
                        field: 'size_name'
                    },
                    {
                        label: 'Параметры',
                        field: ['delete', 'edit', 'view'],
                    },
                ],
                sizes: []
            }
        },
        methods: {
            getSizes() {
                axios.get('http://mozzarella/api/get-sizes')
                    .then((response) => {
                        this.sizes = response.data;
                    })
            },
            deleteSize(id) {
                axios.delete(`http://mozzarella/api/size/delete/${id}`)
                    .then(response => {
                        console.log(this.types + '/n' + id);
                        let i = this.sizes.map(item => item.id).indexOf(id);
                        this.sizes.splice(i, 1);
                    })
            }
        },
        mounted() {
            this.getSizes();
        }
    }
</script>

<style scoped>

</style>
