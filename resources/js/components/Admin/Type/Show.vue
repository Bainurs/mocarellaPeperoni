<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="h3">Категория</div>
            </div>
            <div class="col-9">
                <div class="h3">{{ type.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        data() {
            return {
                type: {}
            }
        },
        methods: {
            showType() {
                console.log(this.type);
                axios.get(`http://mozzarella/api/type/show/${this.$route.params.id}`)
                    .then((response) => {
                        this.type = response.data;
                    })
            }
        },
        created() {
            this.showType();
        }
    }
</script>

<style scoped>

</style>
