<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { useAuthStore, signIn } from "@/stores/auth"
import { useGraphqlAPIStore } from "@/stores/graphqlAPI";

const form = reactive({
    loginEmail: "",
    password: "",
    remember: true,
});

const router = useRouter();
const errMsg = ref('');
const authStore = useAuthStore();
const GraphqlAPIStore = useGraphqlAPIStore();

const handleSubmit = async () => {
    errMsg.value = '';
    // call the login method from the Authstore
    const resp = await signIn({
        email: form.loginEmail,
        password: form.password,
    });
    if (resp.isAuthenticated) {
        authStore.setupUser(resp.user);
        navigateTo('/dashboard')
        return;
    } else if (resp.msg) {
        errMsg.value = resp.msg.message;
    }
};
</script>

<template>
    <div>
        <NuxtLayout>
            <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
                <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
                    <FormField label="Login" help="Please enter your login">
                        <FormControl v-model="form.loginEmail" :icon="mdiAccount" name="login"
                            autocomplete="username" />
                    </FormField>

                    <FormField label="Password" help="Please enter your password">
                        <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
                            autocomplete="current-password" />
                    </FormField>

                    <FormCheckRadio v-model="form.remember" name="remember" label="Remember" :input-value="true" />
                    <NotificationBar v-if="errMsg" color="danger">{{ errMsg }} </NotificationBar>
                    <template #footer>
                        <div class="flex justify-between">
                            <BaseButtons>
                                <BaseButton type="submit" color="info" label="Login" />
                            </BaseButtons>
                            <NuxtLink to="/auth/signup"
                                class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600">
                                Don't have an account? Sign Up
                            </NuxtLink>
                        </div>
                    </template>
                </CardBox>
            </SectionFullScreen>
        </NuxtLayout>
    </div>
</template>
