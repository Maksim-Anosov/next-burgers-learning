import { checkResponse } from "../shared";
import { TAuthResponse, TLoginData } from "../types/types";

export class AuthorizeService {
  static async loginUser(data: TLoginData) {
    const res = await fetch(`https://norma.nomoreparties.space/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    const checkedRes = await checkResponse<TAuthResponse>(res);

    if(!checkedRes.success) return Promise.reject(checkedRes);

    return checkedRes;
  }
}