import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import StudentCard from "./components/StudentCard.vue";
import CourseCard from "./components/CourseCard.vue";
import AboutPage from "./components/AboutPage.vue";
import CourseForm from "./components/CourseForm.vue";
import StudentForm from "./components/StudentForm.vue";
import StudentsInCourse from "./components/StudentInCourse.vue";
const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/courses", component: CourseCard, name: "CourseCard" },
  {
    path: "/courses/:id",
    component: StudentsInCourse,
    name: "StudentsInCourse",
  },
  { path: "/students", component: StudentCard, name: "StudentCard" },
  { path: "/about", component: AboutPage, name: "AboutPage" },
  { path: "/courses/form", component: CourseForm, name: "CoursesForm" },
  { path: "/students/form", component: StudentForm, name: "StudentForm" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
