<script setup>
  import {
    mdiMonitorCellphone,
    mdiTableBorder,
    mdiTableOff,
    mdiGithub,
  } from '@mdi/js'
  import SectionMain from '@/components/AfterAuth/Sections/SectionMain.vue'
  import NotificationBar from '@/components/AfterAuth/NotificationBars/NotificationBar.vue'
  import TableSampleClients from '@/components/AfterAuth/Tables/TableSampleClients.vue'
  import CardBox from '@/components/AfterAuth/Cards/CardBox.vue'

  import SectionTitleLineWithButton from '@/components/AfterAuth/Sections/SectionTitleLineWithButton.vue'
  import BaseButton from '@/components/AfterAuth/Buttons/BaseButton.vue'
  import CardBoxComponentEmpty from '@/components/AfterAuth/Cards/CardBoxComponentEmpty.vue'
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiTableBorder" title="Tables" main>
          <BaseButton
            href="https://github.com/justboil/admin-one-vue-tailwind"
            target="_blank"
            :icon="mdiGithub"
            label="Star on GitHub"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>
        <NotificationBar color="info" :icon="mdiMonitorCellphone">
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox class="mb-6" has-table>
          <TableSampleClients checkable />
        </CardBox>

        <SectionTitleLineWithButton
          :icon="mdiTableOff"
          title="Empty variation"
        />

        <NotificationBar color="danger" :icon="mdiTableOff">
          <b>Empty table.</b> When there's nothing to show
        </NotificationBar>

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
