import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required("اسم المستخدم مطلوب!")
      .min(3, "يجب أن يكون اسم المستخدم 3 أحرف على الأقل!"),
    phone: yup.string().optional(),
    password: yup
      .string()
      .required("كلمة المرور مطلوبة!")
      .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل!"),
    password_confirmation: yup
      .string()
      .required("تأكيد كلمة المرور مطلوب!")
      .oneOf([yup.ref("password")], "يجب أن تتطابق كلمات المرور!"),
  })
  .required();

export const loginSchema = yup
  .object({
    phone: yup.string().optional(),
    password: yup
      .string()
      .required("كلمة المرور مطلوبة!")
      .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل!"),
  })
  .required();

export const forgetSchema = yup
  .object({
    phone: yup.string().optional(),
  })
  .required();

export const resetSchema = yup
  .object({
    password: yup
      .string()
      .required("كلمة المرور مطلوبة!")
      .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل!"),
    password_confirmation: yup
      .string()
      .required("تأكيد كلمة المرور مطلوب!")
      .oneOf([yup.ref("password")], "يجب أن تتطابق كلمات المرور!"),
  })
  .required();
