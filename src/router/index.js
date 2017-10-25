import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Container from '@/components/Container'
import Dashboard from '@/components/Dashboard'
import Locations from '@/components/Locations'
import Users from '@/components/Users'
import Messages from '@/components/Messages'
import Location from '@/components/Location'
import LocationInner from '@/components/LocationInner'
import ListingType from '@/components/ListingType'
import ViewAll from '@/components/ViewAll'
import AddNew from '@/components/AddNew'
import Categories from '@/components/Categories'
import Images from '@/components/Images'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: 'login',
      component: Login
    },
    {
      path: '/',
      component: Container,
      children: [
        {
          path: '/',
          component: Dashboard
        },
        {
          path: 'locations',
          component: Locations
        },
        {
          path: 'users',
          component: Users
        },
        {
          path: 'messages',
          component: Messages
        },
        {
          path: ':location',
          component: Location,
          children: [
            {
              path: '/',
              component: LocationInner
            },
            {
              path: 'images',
              component: Images
            },
            {
              path: ':listingType',
              component: ListingType,
              children: [
                {
                  path: '/',
                  component: ViewAll
                },
                {
                  path: 'add-new',
                  component: AddNew
                },
                {
                  path: 'categories',
                  component: Categories
                },
                {
                  path: 'preview/:id',
                  component: AddNew
                },
                {
                  path: 'edit/:id',
                  component: AddNew
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
