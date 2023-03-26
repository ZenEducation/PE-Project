import { Auth } from "aws-amplify";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// cognito needs username as unique field eg phone num, email
export async function signUp({ email, username, familyName, password }) {
  try {
    const resp = await Auth.signUp({
      username: email,
      password: "Test@1234",
      attributes: {
        email,
        name: username,
        // family_name: familyName,
      },
      autoSignIn: {
        enabled: true,
      },
    });
    if (resp.user && !resp.userConfirmed)
      return {
        isUserCreated: true,
        userConfirmed: resp.userConfirmed,
        user: resp.user,
        mg: "User created successfully",
        codeDeliveryDetails: resp.codeDeliveryDetails,
      };
  } catch (error) {
    console.log("inside signup error ", error);
    return {
      isUserCreated: false,
      msg: error.message,
    };
  }
}

export async function resendConfirmationCode({ username }) {
  try {
    const resp = await Auth.resendSignUp(username);
    if (resp && resp.CodeDeliveryDetails) {
      return {
        isCodeSent: true,
        ...resp.CodeDeliveryDetails,
      };
    }
  } catch (error) {
    return {
      msg: error,
    };
  }
}

export async function confirmSignUp({ username, code }) {
  try {
    const resp = Auth.confirmSignUp(username, code);
    if (resp) {
      return {
        isUserVerified: true,
      };
    }
  } catch (error) {
    console.log("error ", error);
    return {
      isUserVerified: false,
      msg: error?.message ? error.message : "",
    };
  }
}

export async function signOut() {
  try {
    const resp = await Auth.signOut();
    console.log("resp ", resp);
  } catch (error) {
    return {
      msg: error,
    };
  }
}

export async function signIn({ email, password }) {
  try {
    const username = email;
    console.log(email, password);
    const user = await Auth.signIn(username, password);
    return { isAuthenticated: true, user };
  } catch (error) {
    return {
      isAuthenticated: false,
      msg: error,
    };
  }
}

export const state = () => ({
  isAuthenticated: false,
  user: null,
});

const getters = {};

export const actions = {
  async loadAmplifyUser() {
    try {
      const userfromAmplify = await Auth.currentAuthenticatedUser();
      this.user = userfromAmplify;
      return user;
    } catch (error) {
      console.log(error);
      this.user = null;
    }
  },

  async register({ email, password }) {
    const user = await Auth.signUp({
      username: email,
      password,
    });
    return user;
  },

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code);
  },

  async login({ email, password }) {
    const userfromAmplify = await Auth.signIn(email, password);
    this.user = userfromAmplify;
    this.isAuthenticated = true;
    return this.user;
  },

  async logout() {
    await Auth.signOut();
    if (this.isAuthenticated === true) {
      this.isAuthenticated = false;
    }
    this.user = null;
    if (!user) {
      console.log("User successfully logged out");
    }
  },
};

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});
  const username = computed(() => user.value?.username);

  function setupUser(userData) {
    user.value = { ...userData };
  }
  function emptyUser() {
    setupUser({});
  }
  return {
    setupUser,
    username,
    emptyUser,
  };
});
