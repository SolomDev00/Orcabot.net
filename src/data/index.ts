import {
  IForgetInput,
  ILoginInput,
  IRegisterInput,
  IResetInput,
} from "../interfaces";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "name",
    placeholder: "برجاء ادخال اسمك الاول والاخير",
    type: "text",
    forl: "username",
    placel: "الاسم كامل",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "phone",
    placeholder: "برجاء ادخال رقم الهاتف الخاص بك",
    type: "text",
    forl: "name",
    placel: "رقم الهاتف",
  },
  {
    name: "password",
    placeholder: "برجاء ادخال كلمة المرور الخاصة بك",
    type: "password",
    forl: "password",
    placel: "كلمة المرور",
    validation: {
      required: true,
      minLength: 8,
    },
  },
  {
    name: "password_confirmation",
    placeholder: "برجاء ادخال إعادة كلمة المرور الخاصة بك",
    type: "password",
    forl: "password_confirmation",
    placel: "تاكيد كلمة المرور",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "phone",
    placeholder: "برجاء ادخال رقم الهاتف الخاص بك",
    type: "text",
    forl: "email",
    placel: "رقم الهاتف",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "برجاء ادخال كلمة المرور الخاصة بك",
    type: "password",
    forl: "password",
    placel: "كلمة المرور",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];

export const FORGET_FORM: IForgetInput[] = [
  {
    name: "phone",
    placeholder: "برجاء ادخال رقم الهاتف الخاص بك",
    type: "text",
    forl: "email",
    placel: "رقم الهاتف",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
];

export const RESET_FORM: IResetInput[] = [
  {
    name: "password",
    placeholder: "برجاء ادخال كلمة المرور الخاصة بك",
    type: "password",
    forl: "password",
    placel: "كلمة مرور جديدة",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "password_confirmation",
    placeholder: "برجاء ادخال كلمة المرور الخاصة بك",
    type: "password",
    forl: "password_confirmation",
    placel: "تأكيد كلمة المرور",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
