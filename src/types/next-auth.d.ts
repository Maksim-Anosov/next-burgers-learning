import { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    refreshToken?: string
    error?: string
  }

  interface User extends DefaultUser {
    accessToken?: string
    refreshToken?: string
  }
}
