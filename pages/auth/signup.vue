<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import SectionFullScreen from "@/components/AfterAuth/Sections/SectionFullScreen.vue";
import CardBox from "@/components/AfterAuth/Cards/CardBox.vue";
import FormField from "@/components/AfterAuth/Forms/FormField.vue";
import FormControl from "@/components/AfterAuth/Forms/FormControl.vue";
import BaseButton from "@/components/AfterAuth/Buttons/BaseButton.vue";
import BaseButtons from "@/components/AfterAuth/Buttons/BaseButtons.vue";
import {
  useAuthStore,
  signUp,
  resendConfirmationCode,
  confirmSignUp,
} from "@/stores/auth";
import BaseDivider from "@/components/AfterAuth/Navbar/BaseDivider.vue";

const form = reactive({
  email: "",
  username: "",
  familyName: "",
  remember: true,
  verificationCode: "",
});

const authStore = useAuthStore();
const router = useRouter();
const validPasswordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const verificationCodeMsg = ref("");
const errMsg = ref("");
const resendCodeMsg = ref("");
function showErr(msg) {
  errMsg.value = msg;
}
function emptyErr() {
  errMsg.value = "";
}

const createAccount = async () => {
  emptyErr();
  console.log("inside create account");
  resetState();
  authStore.emptyUser();
  const userData = await signUp({ ...form });
  if (userData.isUserCreated) {
    verificationCodeMsg.value = `Verification code sent to ${userData.codeDeliveryDetails.AttributeName} ${userData.codeDeliveryDetails.Destination}`;
    authStore.setupUser(userData);
  } else {
    showErr(userData.msg);
  }
};

const verifyAccount = async () => {
  emptyErr();
  if (form.verificationCode) {
    const userData = await confirmSignUp({
      username: form.email,
      code: form.verificationCode,
    });
    if (userData) {
      if (!userData.isUserVerified) {
        showErr(userData.msg);
      } else {
        navigateTo({ path: "/dashboard" });
      }
    }
  }
};

const resendCode = async () => {
  emptyErr();
  const resp = await resendConfirmationCode({ username: form.email });
  if (resp.isCodeSent) {
    resendCodeMsg.value = `Verification code sent on ${resp.AttributeName} to ${resp.Destination}`;
  }
  setTimeout(() => {
    resendCodeMsg.value = "";
  }, 3000);
};

function resetState() {
  verificationCodeMsg.value = "";
}
</script>

<template>
  <NuxtLayout name="frontend">
    <SectionFullScreen v-slot="{ cardClass }">
      <CardBox :class="cardClass" is-form @submit="createAccount">
        <div v-if="!verificationCodeMsg" class="-mb-6">
          <CardsCardBoxComponentTitle class="justify-center" title="Signup">
          </CardsCardBoxComponentTitle>

          <CardsCardBoxComponentBody class="p-0 my-4">
            <h3>Create an account using email</h3>
          </CardsCardBoxComponentBody>

          <FormField label="Email" help="Please enter your email">
            <FormControl
              v-model.trim="form.email"
              :icon="mdiAccount"
              name="login"
              autocomplete="email"
            />
          </FormField>

          <FormField label="Username" help="Please enter your username">
            <FormControl
              v-model.trim="form.username"
              :icon="mdiAccount"
              name="username"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Family name" help="Please enter your family name">
            <FormControl
              v-model.trim="form.familyName"
              :icon="mdiAccount"
              name="familyName"
              autocomplete="familyName"
            />
          </FormField>

          <NotificationBar v-if="errMsg" color="danger">
            {{ errMsg }}
          </NotificationBar>

          <BaseButtons class="flex items-center justify-center">
            <BaseButton
              color="info"
              label="Create account"
              @click="createAccount"
            />
          </BaseButtons>

          <div class="flex items-center mt-6">
            <BaseDivider class="flex-grow mr-0"> </BaseDivider>
            <span class="mx-4">or sign up using</span>
            <BaseDivider class="flex-grow ml-0"> </BaseDivider>
          </div>
        </div>
        <div v-else class="-mb-6">
          <CardsCardBoxComponentTitle class="justify-center" title="Verify">
          </CardsCardBoxComponentTitle>

          <CardsCardBoxComponentBody class="p-0 my-4">
            <h3>{{ verificationCodeMsg }}</h3>
          </CardsCardBoxComponentBody>

          <FormField label="Please enter your verification code">
            <FormControl
              v-model.trim="form.verificationCode"
              :icon="mdiAccount"
              name="code"
            />
          </FormField>

          <NotificationBar v-if="resendCodeMsg" color="success">
            {{ resendCodeMsg }}
          </NotificationBar>
          <NotificationBar v-if="errMsg" color="danger">
            {{ errMsg }}
          </NotificationBar>

          <BaseButtons class="flex items-center justify-center">
            <BaseButton color="info" label="Resend code" @click="resendCode" />
            <BaseButton
              color="info"
              label="Verify account"
              @click="verifyAccount"
            />
          </BaseButtons>
        </div>

        <template #footer>
          <BaseButtons
            v-if="!verificationCodeMsg"
            class="flex items-center justify-center mt-0"
          >
            <BaseButton
              color="info"
              label="Google"
              @click="
                () =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Google,
                  })
              "
            >
            </BaseButton>
            <BaseButton
              color="info"
              label="Facebook"
              @click="
                () =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Facebook,
                  })
              "
            />
          </BaseButtons>
          <BaseButtons v-else class="flex items-center justify-center mt-0">
            <BaseButton
              color="info"
              label="Sign up with different email"
              @click="resetState"
            />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </NuxtLayout>
</template>
