import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, productionRedirectSignIn] =
  awsExports.oauth.redirectSignIn.split(",");

const [localRedirectSignOut, productionRedirectSignOut] =
  awsExports.oauth.redirectSignOut.split(",");

console.log("inside amplify.ts ", isLocalhost, awsExports.oauth.redirectSignIn);
console.log(
  "inside amplify.ts ",
  isLocalhost,
  awsExports.oauth.redirectSignOut
);

const updatedAwsConfig = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  // Amplify.configure(awsExports);
  Amplify.configure(updatedAwsConfig);

  return {
    provide: {
      auth: Auth,
    },
  };
});
