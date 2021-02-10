<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <form @submit.prevent="updateSize">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3 text-left">
                                <span class="h3">Название Продукта</span>
                            </div>
                            <div class="col">
                                <input type="text" v-model="data.size_name">
                            </div>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Обновить</button>
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
                data: {}
            }
        },
        methods: {
            getSize() {
                axios.get(`http://mozzarella/api/size/edit/${this.$route.params.id}`)
                    .then((response) => {
                        console.log(response.data);
                        this.data = response.data;
                    })
            },
            updateSize() {
                axios.post(`http://mozzarella/api/size/update/${this.$route.params.id}`, this.data)
                    .then((response) => {
                        this.$router.push({ name: 'sizeDashboard' });
                    })
            }

        },
        created() {
            this.getSize();
        }
    }
</script>

<style scoped>

</style>
