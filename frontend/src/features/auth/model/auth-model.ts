export type AuthModel = {
  name: string;
  placeholder: string;
  lable: string;
};

export const authModel: AuthModel[] = [
  {
    name: "login",
    placeholder: "Логин",
    lable: "Логин",
  },
  {
    name: "password",
    placeholder: "Пароль",
    lable: "Пароль",
  },
];
