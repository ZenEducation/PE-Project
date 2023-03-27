<template>
  <div class="w-12/12 flex justify-center items-center">
    <table>
      <tr>
        <th></th>
        <th>
          <h1>$500</h1>
          <h5>Silver Membership</h5>
          <h4>You can view few of the courses</h4>
        </th>
        <th>
          <h1>$500</h1>
          <h5>Gold Membership</h5>
          <h4>You can view most of the courses</h4>
        </th>
        <th>
          <h1>$500</h1>
          <h5>Diamond Membership</h5>
          <h4>You can view all the courses</h4>
        </th>
      </tr>

      <tr>
        <td>Number of courses</td>
        <td class="text-center">3</td>
        <td class="text-center">6</td>
        <td class="text-center">21</td>
      </tr>
      <tr v-for="data in tabledata" :key="data.title">
        <td>{{ data.title }}</td>
        <td class="text-center" v-html="[data.silver]"></td>
        <td class="text-center">{{ data.gold }}</td>
        <td class="text-center">{{ data.diamond }}</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <div class="middle">
            <button>Get it now</button>
          </div>
        </td>
        <td>
          <div class="middle">
            <button>Get it now</button>
          </div>
        </td>
        <td>
          <div class="middle">
            <button>Get it now</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  definePageMeta({
    layout: 'frontend',
  })

  const tabledata = ref([
    {
      title: 'Introduction to Javascript for Beginners',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Open Programming Courses for Everyone: Python',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Master jQuery in a Short Period of Time',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Problem-solving Skills for Better Success',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Database & SQL for Computer Science',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Academic Listening and Note-taking',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
    {
      title: 'Intermediate English Speaking Practice',
      silver: '<icon name="uil:check"/>',
      gold: '<icon name="uil:check"/>',
      diamond: '<icon name="uil:check"/>',
    },
  ])
</script>

<style scoped>
  th,
  td {
    border: solid 1px #f3f3f3;
  }

  td {
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    padding: 20px 10px;
    color: #f3f3f3;
  }

  th {
    padding: 30px 10px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
    color: #20ad96;
  }

  h4,
  h5 {
    color: white;
  }

  h5 {
    text-transform: uppercase;
    font-size: 14px;
  }

  h4 {
    font-size: 15px;
    line-height: 1.3;
    margin-top: 10px;
  }

  button {
    border-color: #f8f9fa;
    border-radius: 4px;
    background-color: #f8f9fa;
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    line-height: 50px;
    height: 52px;
    padding: 0px 40px;
  }

  .middle {
    background: transparent;
    border-radius: 0px;
    width: 100%;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
