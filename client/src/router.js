import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage'
import StudentCard from './components/StudentCard'
import CourseCard from './components/CourseCard'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/courses', component: CourseCard, name: 'CourseCard' },
  { path: '/students', component: StudentCard, name: 'StudentCard' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
