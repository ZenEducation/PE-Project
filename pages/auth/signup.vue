<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { useAuthStore, signUp, resendConfirmationCode, confirmSignUp } from "@/stores/auth"
import BaseDivider from "~~/components/Navbar/BaseDivider.vue";

const form = reactive({
    email: "",
    username: "",
    familyName: "",
    remember: true,
    verificationCode: ''
});

const authStore = useAuthStore();
const router = useRouter();
const validPasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
console.log('yolo');
const verificationCodeMsg = ref('');
const errMsg = ref('');

function showErr(msg) {
    errMsg.value = msg;
}
function emptyErr() {
    errMsg.value = '';
}

const createAccount = async () => {
    emptyErr()
    console.log('inside create account');
    resetState();
    authStore.emptyUser()
    const userData = await signUp({ ...form });
    if (userData.isUserCreated) {
        verificationCodeMsg.value = `Verification code sent to ${userData.codeDeliveryDetails.AttributeName} ${userData.codeDeliveryDetails.Destination}`
        authStore.setupUser(userData);
    } else {
        showErr(userData.msg)
    }
};

const verifyAccount = async () => {
    emptyErr();
    if (form.verificationCode) {
        const userData = await confirmSignUp({ username: form.email, code: form.verificationCode })
        if (userData) {
            if (!userData.isUserVerified) {
                showErr(userData.msg)
            }
        }
    }
}

const resendCode = () => {
    emptyErr();
    resendConfirmationCode({ username: form.email })
}

function resetState() {
    verificationCodeMsg.value = '';
}
</script>

<template>
    <NuxtLayout>
        <SectionFullScreen v-slot="{ cardClass }">
            <CardBox :class="cardClass" is-form @submit="createAccount">
                <div class="-mb-6" v-if="!verificationCodeMsg">
                    <CardsCardBoxComponentTitle class="justify-center" title="Signup">
                    </CardsCardBoxComponentTitle>

                    <CardsCardBoxComponentBody class="p-0 my-4">
                        <h3>Create an account using email</h3>
                    </CardsCardBoxComponentBody>

                    <FormField label="Email" help="Please enter your email">
                        <FormControl v-model.trim="form.email" :icon="mdiAccount" name="login" autocomplete="email" />
                    </FormField>

                    <FormField label="Username" help="Please enter your username">
                        <FormControl v-model.trim="form.username" :icon="mdiAccount" name="username"
                            autocomplete="username" />
                    </FormField>

                    <FormField label="Family name" help="Please enter your family name">
                        <FormControl v-model.trim="form.familyName" :icon="mdiAccount" name="familyName"
                            autocomplete="familyName" />
                    </FormField>

                    <NotificationBar v-if="errMsg" color="danger">
                        {{ errMsg }}
                    </NotificationBar>

                    <BaseButtons class="flex items-center justify-center">
                        <BaseButton @click="createAccount" color="info" label="Create account" />
                    </BaseButtons>

                    <div class="flex items-center mt-6">
                        <BaseDivider class="flex-grow mr-0"> </BaseDivider>
                        <span class="mx-4">or sign up using</span>
                        <BaseDivider class="flex-grow ml-0"> </BaseDivider>
                    </div>
                </div>
                <div class="-mb-6" v-else>
                    <CardsCardBoxComponentTitle class="justify-center" title="Verify">
                    </CardsCardBoxComponentTitle>

                    <CardsCardBoxComponentBody class="p-0 my-4">
                        <h3>{{ verificationCodeMsg }}</h3>
                    </CardsCardBoxComponentBody>

                    <FormField label="Please enter your verification code">
                        <FormControl v-model.trim="form.verificationCode" :icon="mdiAccount" name="code" />
                    </FormField>

                    <NotificationBar v-if="errMsg" color="danger">
                        {{ errMsg }}
                    </NotificationBar>

                    <BaseButtons class="flex items-center justify-center">
                        <BaseButton @click="resendCode" color="info" label="Resend code" />
                        <BaseButton @click="verifyAccount" color="info" label="Verify account" />

                    </BaseButtons>
                </div>

                <template #footer>
                    <BaseButtons v-if="!verificationCodeMsg" class="flex items-center justify-center mt-0">
                        <BaseButton color="info" label="Google">
                        </BaseButton>
                        <BaseButton color="info" label="Facebook" />
                    </BaseButtons>
                    <BaseButtons v-else class="flex items-center justify-center mt-0">
                        <BaseButton @click="resetState" color="info" label="Sign up with different email" />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionFullScreen>
    </NuxtLayout>
</template>
