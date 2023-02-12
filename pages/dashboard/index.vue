<template>
    <NuxtLayout>
        <SectionFullScreen v-slot="{ cardClass }">
            <BaseButtons class="flex items-center justify-center">
                <BaseButton @click="signOutAndRedirect" color="info" label="Sign out" />
            </BaseButtons>
        </SectionFullScreen>
    </NuxtLayout>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import { signOut } from '@/stores/auth';

async function signOutAndRedirect() {
    const resp = await signOut();
    navigateTo('/auth/login');
}
</script>