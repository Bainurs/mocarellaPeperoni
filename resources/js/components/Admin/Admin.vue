<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <ul class="list-unstyled">
                    <li>
                        <router-link :to="{ name: 'productDashboard', path: '/admin/product/dashboard'}">Product</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'typeDashboard', path: '/admin/type/dashboard'}">Type</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ingredientDashboard', path: '/admin/ingredient/dashboard'}">Ingredient</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'sizeDashboard', path: '/admin/size/dashboard'}">Size</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Navigation/Header";
    import Footer from "./Navigation/Footer";
    import SideBar from "./Navigation/SideBar";
    export default {
        name: "Admin",
        components: {
            'header-admin': Header,
            'footer-admin': Footer,
            'sidebar-admin': SideBar
        }
    }
</script>

<style scoped>

</style>
