<template>
  <div class="text-left mt-10 mb-24">
    <table class="text-white">
      <tr class="bg-[#111]">
        <th>Course</th>
        <th>Quiz</th>
        <th>Date</th>
        <th>Progress</th>
        <th>Interval</th>
      </tr>
      <tr v-for="data in tabledata" :key="data.id">
        <td>{{ data.course }}</td>
        <td>{{ data.quiz }}</td>
        <td>{{ data.date }}</td>
        <td>
          {{ data.progress }}
          <span
            class="
              ml-3
              text-center text-[10px] text-[#111]
              p-[6px]
              bg-[#ffdc1e]
              rounded-md
            "
            >Completed</span
          >
        </td>
        <td>{{ data.interval }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default{
    data () {
        return {
tabledata: [
    {
        id: 1,
    course: 'Academic Listening and Note-taking',
    quiz: 'Quiz 01: Songs & Films',
    date: 'Dec 23, 2019',
    progress: 0 + '%',
    interval: '88:23:42:59'
},
    {
        id: 2,
    course: 'Introduction to Javascript for Beginners',
    quiz: 'Mid-term test',
    date: 'Dec 19, 2019',
    progress: 0 + '%',
    interval: '--:--'
},
    {
        id: 3,
    course: 'Introduction to Javascript for Beginners',
    quiz: 'Terminal test',
    date: 'Dec 23, 2019',
    progress: 33.3 + '%',
    interval: '88:23:42:59'
},
    {
        id: 4,
    course: 'Database & SQL for Computer Science',
    quiz: 'SQL Test',
    date: 'Dec 23, 2019',
    progress: 0 + '%',
    interval: '--:--'
},

],
        }
    }
}
</script>

<style>
table {
  width: 100%;
}
tr {
  width: 100%;
  background-color: #161821;
}

th {
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
}

td {
  font-size: 14px;
  font-weight: 400;
  padding: 20px 20px;
  border-bottom: solid 1px #555;
}
</style>