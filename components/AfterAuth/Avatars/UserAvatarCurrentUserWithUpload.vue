<script setup>
  import { mdiCamera } from '@mdi/js'
  import UserAvatarCurrentUser from '@/components/AfterAuth/Avatars/UserAvatarCurrentUser.vue'
  import FormFilePicker from '@/components/AfterAuth/Forms/FormFilePicker.vue'
</script>

<template>
  <UserAvatarCurrentUser class="relative">
    <div class="absolute right-0 bottom-0">
      <FormFilePicker :icon="mdiCamera" is-round-icon />
    </div>
  </UserAvatarCurrentUser>
</template>
