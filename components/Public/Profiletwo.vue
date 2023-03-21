<template>
  <div>
    <div class="p-3 lg:clear-right">
      <div class="relative w-12/12 mb-8">
        <ul class="flex">
          <li @click="display = 'dashboard'">Dashboard</li>
          <li @click="display = 'courses'">Courses</li>
          <li @click="display = 'quizzes'">Quizzes</li>
        </ul>
        <div class="h-[2px] w-full bg-white absolute bottom-[2px] z-0"></div>
      </div>

      <div v-show="display === 'dashboard'">
        <profileboard />
      </div>
      <div v-show="display === 'courses'">
        <profilecourses />
      </div>
      <div v-show="display === 'quizzes'">
        <profilequizzes />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            display: 'dashboard'
        }
    }
}</script>

<style scoped>
ul li {
  font-weight: 700;
  font-size: 24px;
  padding: 9px 25px;
  color: #ababab;
  position: relative;
}

ul li:hover {
  color: #333333;
}

li::after {
  content: "  ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #20ad96;
  height: 2px;
  display: none;
  z-index: 100;
}

ul li:hover::after {
  display: block;
}
</style>