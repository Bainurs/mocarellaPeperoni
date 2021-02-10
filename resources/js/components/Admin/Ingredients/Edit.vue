<template>
    <div class="container">
        <form @submit.prevent="updateIngredient">
            <div class="form-group">
                <div class="row">
                    <div class="col-3">
                        <h4>Ингредиент</h4>
                    </div>
                    <div class="col-9">
                        <input type="text" v-model="ingredient.name">
                    </div>
                </div>
            </div>
            <button class="btn btn-primary">Update Ingredient</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                ingredient: {}
            }
        },
        methods: {
            getIngredient() {
                axios.get(`http://mozzarella/api/ingredient/edit/${this.$route.params.id}`)
                    .then((response) => {
                        this.ingredient = response.data;
                    })
            },
            updateIngredient() {
                axios.post(`http://mozzarella/api/ingredient/update/${this.$route.params.id}`, this.ingredient)
                    .then((response) => {
                        this.$router.push({ name: 'ingredientDashboard' });
                    })
            }
        },
        mounted() {
            this.getIngredient();
        }
    }
</script>

<style scoped>

</style>
