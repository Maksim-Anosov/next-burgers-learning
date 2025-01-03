export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export type TServerResponse<T> = {
  success: boolean;
} & T;

export type TIngredientsResponse = TServerResponse<{
  data: TIngredient[];
}>;

export type TLoginData = {
  email: string;
  password: string;
};

export type TUser = {
  email: string;
  name: string;
};

export type TAuthResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
  user: TUser;
}>;