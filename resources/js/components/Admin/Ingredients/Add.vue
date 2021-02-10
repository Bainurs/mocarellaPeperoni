<template>
    <div class="container">
        <div class="row">
            <form @submit.prevent="addIngredient">
                <div class="form-group">
                    <div class="row">
                        <div class="col-3">
                            <div class="h4">
                                Название ингредиента
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="h4">
                                <input type="text" v-model="data.name">
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Add Ingredient</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                data: {}
            }
        },
        methods: {
            addIngredient() {
                axios.post('http://mozzarella/api/ingredient/add', this.data)
                    .then(response => {
                        this.$router.push({name: 'ingredientDashboard'})
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = true)
            }
        }
    }
</script>

<style scoped>

</style>
