<script setup>
  import { reactive } from 'vue'
  import {
    mdiAccount,
    mdiEmail,
    mdiEye,
    mdiEyeOff,
    mdiMail,
    mdiMapMarker,
    mdiCity,
  } from '@mdi/js'
  import { Auth } from 'aws-amplify'
  import { useAuthStore } from '@/stores/authStore'
  import CardBox from '@/components/AfterAuth/Cards/CardBox.vue'
  import FormField from '@/components/AfterAuth/Forms/FormField.vue'
  import FormControl from '@/components/AfterAuth/Forms/FormControl.vue'
  import BaseButton from '@/components/AfterAuth/Buttons/BaseButton.vue'
  import BaseLevel from '@/components/AfterAuth/Buttons/BaseLevel.vue'
  import { useMainStore } from '@/stores/main.js'
  import PremSectionFormScreen from '@/components/AfterAuth/Sections/SectionFormScreen.vue'
  import AuthNotificationBar from '@/components/AfterAuth/NotificationBars/AuthNotificationBar.vue'
  const emit = defineEmits(['setEmail'])

  const AuthStore = useAuthStore()

  const userSubmitted = ref(false)
  const errorMsg = ref('')
  const passwordFieldType = ref('password')
  const passwordFieldIcon = ref(mdiEye)

  const notificationModal = ref(false)
  const toggleNotificationModal = (val) => {
    notificationModal.value = val
  }

  const togglePasswordField = () => {
    if (passwordFieldType.value === 'password') {
      passwordFieldType.value = 'text'
      passwordFieldIcon.value = mdiEyeOff
    } else {
      passwordFieldType.value = 'password'
      passwordFieldIcon.value = mdiEye
    }
  }

  const form = reactive({
    name: '',
    signUpEmail: '',
    password: '',
    address: '',
    pincode: '',
  })

  const handleSubmit = async () => {
    // call the login method from the Authstore
    try {
      const registeredUser = await AuthStore.register({
        name: form.name,
        email: form.signUpEmail,
        password: form.password,
        address: form.address,
        pincode: form.pincode.toString(),
      })
      console.log('Sent user', registeredUser)

      if (registeredUser) {
        emit('setEmail', form.signUpEmail)
        return
        // use return statements to change the UI
      }
    } catch (err) {
      errorMsg.value = err
      toggleNotificationModal(true)
      console.log('REGISTRATION ERROR ', err)
    }
  }
</script>
<template>
  <div>
    <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
      <CardBox :class="cardClass">
        <AuthNotificationBar
          :is-visible="notificationModal"
          color="white"
          :icon="mdiMail"
          @toggle="toggleNotificationModal"
        >
          {{ errorMsg }}
        </AuthNotificationBar>
        <FormField label="Name" help="Please enter your new name">
          <FormControl
            v-model="form.name"
            :icon="mdiAccount"
            name="login"
            placeholder="johndoe"
            autocomplete="name"
          />
        </FormField>
        <FormField label="Email" help="Please enter your email">
          <FormControl
            v-model="form.signUpEmail"
            :icon="mdiEmail"
            name="login"
            type="email"
            placeholder="user@example.com"
            autocomplete="email"
          />
        </FormField>
        <FormField label="Password" help="Click icon to show/hide">
          <FormControl
            v-model="form.password"
            :icon-password-eye="passwordFieldIcon"
            :type="passwordFieldType"
            name="password"
            placeholder="Password"
            autocomplete="new-password"
            @togglePasswordVisibility="togglePasswordField()"
          />
        </FormField>
        <FormField label="Address" help="Please enter your address">
          <FormControl
            v-model="form.address"
            :icon="mdiMapMarker"
            name="address"
            placeholder="address"
            autocomplete="address"
          />
        </FormField>
        <FormField label="Pincode" help="Please enter your pincode">
          <FormControl
            v-model="form.pincode"
            :icon="mdiCity"
            name="pincode"
            type="number"
            placeholder="pincode"
            autocomplete="pincode"
          />
        </FormField>
        <div class="flex justify-between">
          <BaseButton
            color="info"
            outline
            label="Login with Google"
            @click="() => Auth.federatedSignIn({ provider: 'Google' })"
          />
          <BaseButton
            color="info"
            outline
            label="Login with Facebook"
            @click="() => Auth.federatedSignIn({ provider: 'Facebook' })"
          />
        </div>
        <template #footer>
          <BaseLevel mobile class="flex justify-between">
            <div class="flex">
              <BaseButton
                label="Signup"
                color="info"
                @click.prevent="handleSubmit"
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
