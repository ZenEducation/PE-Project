<script setup>
  import { reactive } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import { mdiAccount, mdiEmail, mdiEye, mdiEyeOff, mdiMail } from '@mdi/js'
  import { Auth } from 'aws-amplify'
  import { useAuthStore } from '@/stores/authStore'
  import CardBox from '@/components/AfterAuth/Cards/CardBox.vue'
  import FormField from '@/components/AfterAuth/Forms/FormField.vue'
  import FormControl from '@/components/AfterAuth/Forms/FormControl.vue'
  import BaseButton from '@/components/AfterAuth/Buttons/BaseButton.vue'
  import BaseLevel from '@/components/AfterAuth/Buttons/BaseLevel.vue'
  import AuthNotificationBar from '@/components/AfterAuth/NotificationBars/AuthNotificationBar.vue'
  import { useMainStore } from '@/stores/main.js'
  import PremSectionFormScreen from '@/components/AfterAuth/Sections/SectionFormScreen.vue'

  const props = defineProps({
    email: {
      type: String,
      default: null,
    },
  })

  const router = useRouter()
  const AuthStore = useAuthStore()
  const notificationModal = ref(false)
  const toggleNotificationModal = (val) => {
    notificationModal.value = val
  }
  const emit = defineEmits(['setEmail'])
  const changeEmail = () => {
    emit('setEmail', null)
  }

  const userSubmitted = ref(false)
  const errorMsg = ref('')

  const form = reactive({
    otp_code: '',
  })

  const handleSubmit = async () => {
    console.log('form.otp_code:', form.otp_code)

    try {
      const registrationConfirmed = await AuthStore.confirmRegistration({
        email: props.email,
        code: form.otp_code,
      })

      if (registrationConfirmed) {
        console.log(registrationConfirmed)
        router.push('/')
      }
    } catch (err) {
      errorMsg.value = err
      toggleNotificationModal(true)
      console.log('CONFIRMATION ERROR ', err)
    }
  }
  const resendCode = async () => {
    try {
      const data = await AuthStore.resendConfirmationCode({
        email: props.email,
      })
      return data
    } catch (err) {
      errorMsg.value = err
      toggleNotificationModal(true)
      console.log('CONFIRMATION ERROR ', err)
    }
  }
</script>

<template>
  <div>
    <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
      <CardBox :class="cardClass">
        <AuthNotificationBar
          v-if="errorMsg"
          :is-visible="notificationModal"
          color="white"
          :icon="mdiMail"
          @toggle="toggleNotificationModal"
        >
          {{ errorMsg }}
        </AuthNotificationBar>
        <div class="flex xl:pr-4 justify-between">
          <div>{{ props.email }}</div>
          <div>
            <button class="text-red-400 text-sm" @click="changeEmail()">
              Change Email
            </button>
          </div>
        </div>
        <!-- <FormField label="Email" help="Please enter your email">
          <FormControl
            v-model="form.signUpEmail"
            :iconRight="mdiEmail"
            name="login"
            type="email"
            placeholder="user@example.com"
            autocomplete="email"
          />
        </FormField> -->
        <FormField
          label="Email"
          help="Please enter the verification Code sent to your email"
        >
          <FormControl
            v-model="form.otp_code"
            :icon="mdiEmail"
            name="code"
            type="text"
            placeholder="enter code"
            autocomplete="code"
          />
        </FormField>
        <div>
          <button class="text-red-400 text-sm" @click="resendCode()">
            Resend Code
          </button>
        </div>
        <h3 class="font-bold">
          Verification link has been sent to your email!
        </h3>
        <h3 class="font-bold">Verify to proceed</h3>
        <template #footer>
          <BaseLevel mobile class="flex justify-between">
            <div class="flex">
              <BaseButton
                label="Send"
                type="login"
                color="info"
                @click="() => handleSubmit()"
              />
            </div>
            <NuxtLink
              to="/auth/login"
              class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600"
            >
              Have an account? Sign In
            </NuxtLink>
          </BaseLevel>
        </template>
      </CardBox>
    </PremSectionFormScreen>
  </div>
</template>
