<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <CardBox has-table>
          <TableTasks :tasks="studentTasks.tasksList" />
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, ref, onMounted } from "vue";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import { useTasksAPIStore } from "~~/stores/tasksAPI";

import TableTasks from "@/components/AfterAuth/Tables/TableTasks.vue";

// const state = reactive({
//   count: 17,
// });

const TasksList = useTasksAPIStore();
console.log("TasksList:", TasksList);

const getStudentLists = async () => {
  const response = await TasksList.listStudentTasks();
  console.log("Response:", response.data.listStudentTasks.items);
  studentTasks.tasksList = response.data.listStudentTasks.items;
  console.log(" studentTasks.tasksList:", studentTasks.tasksList[0]);
  return response;
};

onMounted(() => {
  //   console.log(
  //     "Response within onMounted:",
  //     studentTasks.data.listStudentTasks.items
  //   );
  getStudentLists();
});

const studentTasks = reactive({
  tasksList: [{ title: "abc" }],
});
</script>

<style scoped></style>
