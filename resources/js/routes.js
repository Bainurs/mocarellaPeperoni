export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/App/Home/Index.vue')
    },
    {
        name: 'showPizza',
        path: '/show/{id}',
        component: () => import('./components/App/Home/Show.vue')
    },
    {
        path: '/admin',
        component: () => import('./components/Admin/Admin.vue'),
        children: [
            {
                name: 'productDashboard',
                path: 'product/dashboard',
                component: () => import('./components/Admin/Dashboard/Index.vue')
            },
            {
                name: 'productAdd',
                path: 'product/add',
                component: () => import('./components/Admin/Dashboard/Add.vue')
            },
            {
                name: 'productEdit',
                path: 'product/edit/:id',
                component: () => import('./components/Admin/Dashboard/Edit.vue')
            },
            {
                name: 'productShow',
                path: 'product/show/:id',
                component: () => import('./components/Admin/Dashboard/Show.vue')
            },

            {
                name: 'typeDashboard',
                path: 'type/dashboard',
                component: () => import('./components/Admin/Type/Index.vue')
            },
            {
                name: 'typeAdd',
                path: 'type/add',
                component: () => import('./components/Admin/Type/Add.vue')
            },
            {
                name: 'typeEdit',
                path: 'type/edit/:id',
                component: () => import('./components/Admin/Type/Edit.vue')
            },
            {
                name: 'typeShow',
                path: 'type/show/:id',
                component: () => import('./components/Admin/Type/Show.vue')
            },

            {
                name: 'ingredientDashboard',
                path: 'ingredient/dashboard',
                component: () => import('./components/Admin/Ingredients/Index.vue')
            },
            {
                name: 'ingredientAdd',
                path: 'ingredient/add',
                component: () => import('./components/Admin/Ingredients/Add.vue')
            },
            {
                name: 'ingredientEdit',
                path: 'ingredient/edit/:id',
                component: () => import('./components/Admin/Ingredients/Edit.vue')
            },
            {
                name: 'ingredientShow',
                path: 'ingredient/show/:id',
                component: () => import('./components/Admin/Ingredients/Show.vue')
            },

            {
                name: 'sizeDashboard',
                path: 'size/dashboard',
                component: () => import('./components/Admin/Size/Index.vue')
            },
            {
                name: 'sizeAdd',
                path: 'size/add',
                component: () => import('./components/Admin/Size/Add.vue')
            },
            {
                name: 'sizeEdit',
                path: 'size/edit/:id',
                component: () => import('./components/Admin/Size/Edit.vue')
            },
            {
                name: 'sizeShow',
                path: 'size/show/:id',
                component: () => import('./components/Admin/Size/Show.vue')
            },
        ],
    }

];

