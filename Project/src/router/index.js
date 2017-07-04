import Login from '@/components/Login'
import Index from '@/components/content/Index'
import Home from '@/components/content/Home'
import Local from '@/components/content/Local'
import Equipment from '@/components/content/Equipment'
import Realtime from '@/components/content/RealTime'
import User from '@/components/content/User'

const routes = [{
	path:'/',
	component:Login
},{
	path:'/Index',
	component:Index,
	children:[{
		path:'',
		component:Home
	},{
		path:'Local',
		component:Local
	},{
		path:'Equipment',
		component:Equipment
	},{
		path:'Realtime',
		component:Realtime
	},{
		path:'User',
		component:User
	}]
},{ 
  path: '*', 
  redirect: '/' 
}]

export default routes;

