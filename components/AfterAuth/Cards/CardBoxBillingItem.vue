<script setup>
  import CardBox from '@/components/AfterAuth/Cards/CardBox.vue'
  import BaseButtons from '@/components/AfterAuth/Buttons/BaseButtons.vue'
  import BaseButton from '@/components/AfterAuth/Buttons/BaseButton.vue'
  import PillTag from '@/components/AfterAuth/Display/PillTag.vue'

  defineProps({
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: [String, Number],
      required: true,
    },
  })
</script>

<template>
  <CardBox class="mb-6">
    <div class="md:flex md:justify-between md:items-center">
      <BaseButtons type="justify-center md:justify-start">
        <BaseButton label="View invoice" color="lightDark" small />
        <BaseButton label="PDF" color="lightDark" small />
      </BaseButtons>
      <div
        class="mt-6 md:mt-0 flex justify-between md:justify-end items-center"
      >
        <p class="text-gray-500 mr-6">{{ date }}</p>
        <PillTag color="info" label="Paid" class="mr-6" />
        <h2 class="text-2xl font-semibold">${{ amount }}</h2>
      </div>
    </div>
  </CardBox>
</template>
