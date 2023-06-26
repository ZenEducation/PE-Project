<template>
  <NuxtLayout>
    <SectionFullScreen v-slot="{ cardClass }">
      <BaseButtons class="flex items-center justify-center">
        <BaseButton color="info" label="Sign out" @click="signOutAndRedirect" />
      </BaseButtons>
    </SectionFullScreen>
  </NuxtLayout>
</template>

<script setup>
  import BaseButton from '@/components/AfterAuth/Buttons/BaseButton.vue'
  import BaseButtons from '@/components/AfterAuth/Buttons/BaseButtons.vue'
  import SectionFullScreen from '@/components/AfterAuth/Sections/SectionFullScreen.vue'
  import { useAuthStore } from '@/stores/authStore'
  const AuthStore = useAuthStore()
  definePageMeta({
  middleware: 'auth-check'
})
  async function signOutAndRedirect() {
    const resp = await AuthStore.logout()
    navigateTo('/auth/login')
  }
</script>
