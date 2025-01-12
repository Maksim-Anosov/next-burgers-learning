import { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"
import { TUser } from "./types"


declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    refreshToken?: string
    error?: string
  }

  interface User extends DefaultUser {
    accessToken?: string
    refreshToken?: string
    user: TUser
  }
}
 
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: User
    accessToken?: string
    refreshToken?: string
  }
}