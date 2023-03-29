<template>
    <OnboardLayout>
        <template v-slot:right>
            <DetailedRequirements></DetailedRequirements>
        </template>
    </OnboardLayout>
</template>

<script setup>
import OnboardLayout from './-component/onboardLayout.vue';
definePageMeta({
    layout: 'frontend',
})
</script>
