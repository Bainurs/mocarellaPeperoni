<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <vue-good-table
                    :columns="columns"
                    :rows="types"
                    :search-options="{ enabled: true }"
                    :pagination-options="{enabled: true}"
                    :line-numbers="true">
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'name'">
                            {{props.row.name}}
                        </span>
                                    <span v-else-if="props.column.field[0] === 'delete' && props.column.field[1] === 'edit' && props.column.field[2] === 'view'">
                                <button class="btn btn-danger" @click.self.prevent="deleteType(props.row.id)">Удалить</button>
                            <router-link :to="{name: 'typeEdit', params: {id: props.row.id}}"><span class="badge badge-green">Изменить</span></router-link>
                            <router-link :to="{name: 'typeShow', params: {id: props.row.id}}"><span class="btn btn-primary">Вид</span></router-link>
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
                        field: 'name'
                    },
                    {
                        label: 'Параметры',
                        field: ['delete', 'edit', 'view'],
                    },
                ],
                types: []
            }
        },
        methods: {
            getTypes() {
                axios.get('http://mozzarella/api/get-types')
                    .then((response) => {
                        this.types = response.data.types;
                    })
            },
            deleteType(id) {
                axios.delete(`http://mozzarella/api/type/delete/${id}`)
                    .then(response => {
                        console.log(this.types + '/n' + id);
                        let i = this.types.map(item => item.id).indexOf(id);
                        this.types.splice(i, 1);
                    })
            }
        },
        mounted() {
            this.getTypes();
        }
    }
</script>

<style scoped>

</style>
