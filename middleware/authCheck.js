import { useRouter } from "vue-router";
import { Auth } from "aws-amplify";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter()
  try {
    const session = await Auth.currentSession()
    return true
  } catch (error) {
    console.log('session')
    return navigateTo('/auth/login')
  }
});
