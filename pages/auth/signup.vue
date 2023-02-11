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
import { useAuthStore } from "@/stores/auth"
import { useGraphqlAPIStore } from "@/stores/graphqlAPI";
import BaseDivider from "~~/components/Navbar/BaseDivider.vue";

const form = reactive({
    loginEmail: "",
    password: "",
    confirmPassword: "",
    remember: true,
});

const router = useRouter();
const AuthStore = useAuthStore();
const GraphqlAPIStore = useGraphqlAPIStore();

const handleSubmit = async () => {
    // call the login method from the Authstore
    const user_from_amplify = await AuthStore.login({
        email: form.loginEmail,
        password: form.password,
    });
    console.log(user_from_amplify);
    if (user_from_amplify) {
        return;
    }
};
</script>

<template>
    <NuxtLayout>
        <SectionFullScreen v-slot="{ cardClass }">
            <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
                <div class="-mb-6">
                    <CardsCardBoxComponentTitle class="justify-center" title="Signup">
                    </CardsCardBoxComponentTitle>
                    <CardsCardBoxComponentBody class="p-0 my-4">
                        <h3>Create an account using email and password</h3>
                    </CardsCardBoxComponentBody>
                    <FormField label="Email" help="Please enter your email">
                        <FormControl v-model="form.loginEmail" :icon="mdiAccount" name="login"
                            autocomplete="username" />
                    </FormField>
                    <FormField label="Password">
                        <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
                            autocomplete="current-password" />
                    </FormField>
                    <FormField label="Confirm Password" help="Use alphanumeric text">
                        <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
                            autocomplete="current-password" />
                    </FormField>
                    <BaseButtons class="flex items-center justify-center">
                        <BaseButton type="submit" color="info" label="Create account" />
                    </BaseButtons>
                    <div class="flex items-center mt-6">
                        <BaseDivider class="flex-grow mr-0"> </BaseDivider>
                        <span class="mx-4">or sign up using</span>
                        <BaseDivider class="flex-grow ml-0"> </BaseDivider>
                    </div>
                </div>

                <template #footer>
                    <BaseButtons class="flex items-center justify-center mt-0">
                        <BaseButton type="submit" color="info" icon="" label="Google">
                        </BaseButton>
                        <BaseButton type="submit" color="info" label="Facebook" />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionFullScreen>
    </NuxtLayout>
</template>
