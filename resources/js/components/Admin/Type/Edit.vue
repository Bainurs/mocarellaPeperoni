<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <form @submit.prevent="updateType">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3 text-left">
                                <span class="h3">Название Продукта</span>
                            </div>
                            <div class="col">
                                <input type="text" v-model="type.name">
                            </div>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Update User</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                type: {}
            }
        },
        methods: {
            getType() {
                axios.get(`http://mozzarella/api/type/edit/${this.$route.params.id}`)
                    .then((response) => {
                        this.type = response.data;
                    })
            },
            updateType() {
                axios.post(`http://mozzarella/api/type/update/${this.$route.params.id}`, this.type)
                    .then((response) => {
                        this.$router.push({ name: 'typeDashboard' });
                    })
            }

        },
        created() {
            this.getType();
        }
    }
</script>

<style scoped>

</style>
