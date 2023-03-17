<template class="main">
  <div>
    <div class="card-rendered" v-if="selectedStudent">
      <h3>Student</h3>
      <div>Name: {{ this.student.firstName }} {{ this.student.lastName }}</div>

      <div>Email: {{ this.student.email }}</div>
      <div>Student Id: {{ this.student.id }}</div>
      <h3>Courses</h3>
      <div>
        {{ this.courses.name }}
        {{ this.courses.id }}
        {{ this.courses.code }}
      </div>
      <button class="button-student" @click="getAllCourses">
        Assign Courses
      </button>
      <div v-if="assignCourse">
        <div v-for="course in this.courses" :key="course.id">
          <div @click="getCourseById(course.id)">
            {{ course.name }}
          </div>

          <div>
            <form>
              <input
                :v-model="text"
                placeholder="Student Grade"
                :value="this.grade"
                name="grade"
                @input="handleChange"
              />
            </form>
            <button
              class="button-assign"
              @click="assignStudentToCourse(course.id)"
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card" v-else v-for="student in students" :key="student.id">
      <div @click="getStudentById(student.id)">
        <h2>
          {{ student.firstName }}
          {{ student.lastName }}
        </h2>
      </div>
    </div>
  </div>
  <button class="button" @click="$router.push('/students/form')">
    Add Student
  </button>
</template>
<script>
import axios from "axios";
export default {
  // eslint-disable-next-line
  name: "StudentCard",
  data: () => ({
    students: [],
    student: "",
    courses: "",
    assignCourse: false,
    allStudents: false,
    selectedStudent: false,
    courseAssignment: {
      courseId: "",
      studentId: "",
      grade: "",
    },
    courseById: "",
    formOn: false,
  }),
  mounted() {
    this.getAllStudents();
  },
  methods: {
    async getAllStudents() {
      this.allStudents = true;
      this.selectedStudent = false;
      const response = await axios.get(`http://localhost:3001/api/students/`);
      this.students = response.data;
      console.log(this.students);
    },
    async getStudentById(studentId) {
      this.allStudents = false;
      this.selectedStudent = true;
      const response = await axios.get(
        `http://localhost:3001/api/students/${studentId}`
      );
      this.student = response.data;
      this.courses = response.data.courses[0];
      console.log(this.courses);
    },
    async getAllCourses() {
      this.assignCourse = true;
      const response = await axios.get(`http://localhost:3001/api/courses/`);
      this.courses = response.data;
      console.log(this.courses);
    },
    handleChange() {
      this.courseAssignment[event.target.name] = event.target.value;
      console.log(this.courseAssignment.grade);
    },
    async getCourseById(courseId) {
      this.formOn = true;
      const response = await axios.get(
        `http://localhost:3001/api/courses/${courseId}`
      );
      this.courseById = response.data;
      console.log(response.data);
    },
    async assignStudentToCourse(courseId) {
      this.courseAssignment.courseId = courseId;
      this.courseAssignment.studentId = this.student.id;
      console.log(this.courseAssignment);
      const response = await axios.post(
        `http://localhost:3001/api/individuals/assign`,
        this.courseAssignment
      );
      console.log(response);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap%27");

.main {
  font-family: "Source Sans Pro", sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card {
  font-family: "Source Sans Pro", sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(10, 36, 114);
  width: 20%;
  height: 40%;
  margin-bottom: 10px;
  border-radius: 15px;
}

.card-rendered {
  font-family: "Source Sans Pro", sans-serif;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(10, 36, 114);
  width: 20%;
  height: 40%;
  margin-bottom: 10px;
  border-radius: 15px;
}

:hover.card {
  border-style: solid;
  /* background-color: rgba(10, 36, 114, 0.591); */
  color: rgb(3, 83, 164);
}

.button {
  background-color: rgb(4, 83, 164);
  color: aliceblue;
  width: 20%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: none;
  font-size: 1em;
  margin-top: 5px;
}

.button-student {
  background-color: rgb(4, 83, 164);
  color: aliceblue;
  width: 80%;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: none;
  font-size: 1em;
  margin-top: 5px;
}

.button-assign {
  background-color: rgb(4, 83, 164);
  color: aliceblue;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-style: none;
  font-size: 1em;
  margin-top: 5px;
}
:hover.button {
  background-color: rgb(3, 83, 164);
}
</style>
