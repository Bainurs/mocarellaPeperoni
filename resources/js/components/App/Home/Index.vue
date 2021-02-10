<template>
    <div class="container">
        <header-pizza></header-pizza>

        <div class="col-12">
            <h2>Пицца</h2>
        </div>
        <div class="row">
            <div class="col-4 justify-content-center" v-for="product in data" v-if="product.type_id === 1">
                <div>
                    <div class="col-12 img-card">
                        <img class="img-fluid"
                             :src="product.img"
                             alt="">
                    </div>
                    <div class="col-11">
                        <h4>{{ product.name }}</h4>
                        <ul class="list-inline list-unstyled" v-for="ingredient in product.ingredients">
                            <li class="list-inline-item">{{ingredient}} </li>
                        </ul>

                        <ul class="list-unstyled list-inline">
                            <li>{{product.price}} сом</li>
                            <li>
                                <button class="btn btn-outline-warning">Выбрать</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-12">
            <h2>Snacks</h2>
        </div>
        <div v-for="product in products">
            <div v-if="product.type_id === 2">
                <div class="col-4 d-flex justify-content-center">
                    <div class="col-9">
                        <img class="img-fluid" src="https://dodopizza-a.akamaihd.net/static/Img/Products/Drinks/ru-RU/fb874c95-cf53-49d2-af67-26e4473d7af7.jpg" alt="">
                    </div>
                    <div class="col-10">
                        <h4>{{ product.name }}</h4>
                        <p>{{ product.ingredients }}</p>
                        <div v-for="size in product.size">
                            <button class="btn btn-warning">{{ size }}</button>
                        </div>
                        <button class="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        </div>




        <footer-pizza></footer-pizza>
    </div>
</template>

<script>
    import Header from '../Navigation/Header.vue';
    import Footer from '../Navigation/Footer.vue';

    export default {
        name: "Index",
        components: {
            'header-pizza': Header,
            'footer-pizza': Footer
        },
        data() {
            return{
                data: [],
                type: [],
                ingredients: []
            }
        },
        methods: {
            getProducts() {
                axios.get('http://mozzarella/api/get-products-view')
                    .then((response) => {
                        console.log(response.data.product);
                        this.data = response.data.product;
                        this.type = response.data.type;
                        this.ingredients = response.data.ingredients;
                    })
            }
        },
        mounted() {
            this.getProducts();
        }
    }
</script>

<style scoped>
    .img-card {
        border-top-radius: 1rem;
    }
</style>
