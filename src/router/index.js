import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "Components" */ '../views/Components.vue')
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: () => import(/* webpackChunkName: "new-product" */ '../views/product/Setup.vue')
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/photos/:id',
    component: () => import(/* webpackChunkName: "photos" */ '../views/Photos.vue'),
    children: [
      {
        path: '/',
        name: 'Main-photos',
        component: () => import(/* webpackChunkName: "photos-main" */ '../views/photos/Main')
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import(/* webpackChunkName: "photos-edit" */ '../views/photos/Edit')
      },
    ]
  },
  {
    path: '/themes/:id',
    name: 'Themes',
    component: () => import(/* webpackChunkName: "themes" */ '../views/Themes.vue')
  },
  {
    path: '/info/:id',
    name: 'Info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
  {
    path: '/covid/:id',
    name: 'Covid',
    component: () => import(/* webpackChunkName: "covid" */ '../views/Covid.vue')
  },
  {
    path: '/guides/:id',
    name: 'Guides',
    component: () => import(/* webpackChunkName: "guides" */ '../views/Guides.vue')
  },
  {
    path: '/activity/:id',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue')
  },
  {
    path: '/meetings/:id',
    name: 'Meetings',
    component: () => import(/* webpackChunkName: "meetings" */ '../views/Meetings.vue')
  },
  {
    path: '/pricing/:id',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  },
  {
    path: '/availability',
    name: 'Availability',
    component: () => import(/* webpackChunkName: "availability" */ '../views/Availability')
  },
  {
    path: '/reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '../views/Reviews'),
    children: [
      {
        path: '/',
        name: 'Main-reviews',
        component: () => import(/* webpackChunkName: "reviews-main" */ '../views/reviews/Main.vue'),
      },
      {
        path: 'request',
        name: 'Request-reviews',
        component: () => import(/* webpackChunkName: "reviews-main" */ '../views/reviews/Request'),
      },
    ]
  },
  {
    path: '/product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    children: [
      {
        path: '/',
        name: 'Home-product',
        component: Home,
      },
      {
        path: ':id',
        name: 'Detail-product',
        component: () => import(/* webpackChunkName: "product-main" */ '../views/product/Detail'),
        children: [
          {
            path: '/',
            name: 'Main-product',
            component: () => import(/* webpackChunkName: "product-main" */ '../views/product/Main.vue'),
          },
          {
            path: 'prices',
            name: 'Prices',
            component: () => import(/* webpackChunkName: "product-prices" */ '../views/product/Prices'),
          },
          {
            path: 'provide',
            name: 'Provide',
            component: () => import(/* webpackChunkName: "product-provide" */ '../views/product/Provide'),
          },
          {
            path: 'translations',
            name: 'Translations',
            component: () => import(/* webpackChunkName: "product-translations" */ '../views/product/Translations'),
          },
          {
            path: 'setup',
            name: 'Setup',
            component: () => import(/* webpackChunkName: "product-Setup" */ '../views/product/Setup'),
          },
          {
            path: 'unique',
            name: 'unique',
            component: () => import(/* webpackChunkName: "product-unique" */ '../views/product/Unique'),
          },
          {
            path: 'special-offers',
            name: 'SpecialOffers',
            component: () => import(/* webpackChunkName: "product-SpecialOffers" */ '../views/product/SpecialOffers'),
          },
          {
            path: 'booking',
            component: () => import(/* webpackChunkName: "product-Booking" */ '../views/product/Booking'),
            children: [
              {
                path: '/',
                name: 'Booking-main',
                component: () => import(/* webpackChunkName: "product-booking-main" */ '../views/Booking/Main'),
              },
              {
                path: 'process',
                name: 'Booking-process',
                component: () => import(/* webpackChunkName: "product-booking-process" */ '../views/Booking/Process'),
              },
              {
                path: 'cancellation',
                name: 'Booking-cancellation',
                component: () => import(/* webpackChunkName: "product-booking-cancellation" */ '../views/Booking/Cancellation'),
              },
              {
                path: 'info-from-travelers',
                name: 'Booking-InfoFromTravelers',
                component: () => import(/* webpackChunkName: "product-booking-InfoFromTravelers" */ '../views/Booking/InfoFromTravelers'),
              },
            ],
          },
          {
            path: 'tickets',
            component: () => import(/* webpackChunkName: "product-tickets" */ '../views/Tickets/Tickets'),
            children: [
              {
                path: '/',
                name: 'Tickets-main',
                component: () => import(/* webpackChunkName: "product-tickets-main" */ '../views/Tickets/Main'),
              },
              {
                path: 'details',
                name: 'Tickets-details',
                component: () => import(/* webpackChunkName: "product-tickets-details" */ '../views/Tickets/Details'),
              },
              {
                path: 'redemption',
                name: 'Tickets-redemption',
                component: () => import(/* webpackChunkName: "product-tickets-redemption" */ '../views/Tickets/Redemption'),
              },
              {
                path: 'preview',
                name: 'Tickets-preview',
                component: () => import(/* webpackChunkName: "product-tickets-preview" */ '../views/Tickets/Preview'),
              },
            ]
          },
        ]
      },
    ],
  },
  {
    path: '/payout',
    component: () => import(/* webpackChunkName: "payout" */ '../views/Payout.vue'),
    children: [
      {
        path: '/',
        name: 'Main-payout',
        component: () => import(/* webpackChunkName: "payout-main" */ '../views/payout/Main.vue'),
      },
      {
        path: 'methods',
        name: 'Methods',
        component: () => import(/* webpackChunkName: "payout-methods" */ '../views/payout/Methods.vue'),
      },
      {
        path: 'tax',
        name: 'Tax',
        component: () => import(/* webpackChunkName: "payout-tax" */ '../views/payout/Tax.vue'),
      },
      {
        path: 'methods/detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "payout-detail" */ '../views/payout/Detail.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
