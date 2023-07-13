import { Auth } from 'aws-amplify'
import { defineStore } from 'pinia'
import { useRouter } from "vue-router";

const router = useRouter()

export const state = () => ({
  isAuthenticated: false,
  user: null,
})

const getters = {}

export const actions = {
  async loadAmplifyUser() {
    try {
      const userfromAmplify = await Auth.currentAuthenticatedUser()
      this.user = userfromAmplify
      return user
    } catch (error) {
      console.log(error)
      this.user = null
    }
  },

  async register({ email, password }) {
    const user = await Auth.signUp({
      username: email,
      password,
    })
    return user
  },

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code)
  },

  async login({ email, password }) {
    const userfromAmplify = await Auth.signIn(email, password)
    localStorage.setItem(
      'authToken',
      userfromAmplify.signInUserSession.accessToken.jwtToken
    )
    this.user = userfromAmplify
    this.isAuthenticated = true
    return this.user
  },

  async logout() {
    await Auth.signOut()
    if (this.isAuthenticated === true) {
      this.isAuthenticated = false
    }
    localStorage.removeItem('authToken')
    navigateTo('/auth/login')

    this.user = null
    if (!this.user) {
      console.log('User successfully logged out')
    }
  },
}

export const useAuthStore = defineStore('authStore', {
  state,
  getters,
  actions,
})
