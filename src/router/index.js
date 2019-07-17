import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WaterShow from '@/components/WaterShows/WaterShow'
import WaterShowList from '@/components/WaterShows/WaterShowList'
import NewWaterShow from '@/components/WaterShows/NewWaterShow'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import MyAddresses from '@/components/User/MyAddresses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/show/:id',
      name: 'show',
      component: WaterShow
    },
    {
      path: '/list',
      name: 'list',
      component: WaterShowList
    },
    {
      path: '/new',
      name: 'newWaterShow',
      component: NewWaterShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: MyAddresses
    }
  ],
  mode: 'history'
})
