export type InputModel = {
  name: "first_name" | "second_name" | "group" | "email" | "password";
  placeholder: string;
  lable: string;
};

export const registrationModel: InputModel[] = [
  {
    name: "first_name",
    placeholder: "Имя",
    lable: "Имя",
  },
  {
    name: "second_name",
    placeholder: "Фамилия",
    lable: "Фамилия",
  },
  {
    name: "group",
    placeholder: "Группа",
    lable: "Группа",
  },
  {
    name: "email",
    placeholder: "Почта",
    lable: "Почта",
  },
  {
    name: "password",
    placeholder: "Пароль",
    lable: "Пароль",
  },
];
