import { generateFromEmail } from "unique-username-generator";

export function generateUserName({ email }) {
  return generateFromEmail(email);
}
