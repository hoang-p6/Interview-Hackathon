import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage'
import StudentCard from './components/StudentCard'
import CourseCard from './components/CourseCard'
import AboutPage from './components/AboutPage'
import StudentForm from './components/StudentForm.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/courses', component: CourseCard, name: 'CourseCard' },
  { path: '/students', component: StudentCard, name: 'StudentCard' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/addstudent', component: StudentForm, name: 'StudentForm' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
