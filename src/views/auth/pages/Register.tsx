/* eslint-disable @typescript-eslint/no-explicit-any */
import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import Button from "../../../components/ui/elements/Button";
import Input from "../../../components/ui/elements/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { REGISTER_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import AppleIcon from "../../../assets/apple.svg";
import GoogleIcon from "../../../assets/google.svg";
import FacebookIcon from "../../../assets/facebook_2.svg";
import LeftSideAuth from "../../../components/ui/LeftSideAuth";

interface IFormInput {
  name: string;
  phone?: string;
  password: string;
  password_confirmation: string;
}

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const router = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const requestData = {
        ...data,
        phone,
      };
      const { status, data: resData } = await axiosInstance.post(
        "auth/register",
        requestData
      );
      if (status === 200) {
        if (resData.status === 422 && resData.data.errors) {
          const errorMessages = resData.data.errors;

          const firstErrorField = Object.keys(errorMessages)[0];
          const firstErrorMessage = errorMessages[firstErrorField][0];

          toast.error(firstErrorMessage);
          return;
        } else {
          toast.success(
            "Thank you, you have registered. Please go to your email and activate the account!"
          );
          setTimeout(() => {
            router("/auth/login");
          }, 1500);
        }
      }
    } catch (error: any) {
      const errorsMessages = error.response.data.data.errors;
      const firstErrorField = Object.keys(errorsMessages)[0];
      const firstErrorMessage = errorsMessages[firstErrorField][0];

      toast.error(firstErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1 text-right">
          <label htmlFor={forl} className="text-[#6B7280] text-base">
            {placel}
          </label>
          {name === "phone" ? (
            <>
              <div className="space-y-2 border border-gray-300 rounded-3xl">
                <PhoneInput
                  autoFocus
                  showDisabledDialCodeAndPrefix
                  value={phone}
                  defaultCountry="eg"
                  onChange={(phone) => setPhone(phone)}
                  placeholder="برجاء ادخال رقم الهاتف الخاص بك"
                  inputProps={{
                    style: {
                      direction: phone === "" ? "rtl" : "ltr",
                    },
                  }}
                />
              </div>
              {isSubmitted &&
                (phone.trim() === "" || phone.trim().length <= 2) && (
                  <InputErrorMessage msg={"Phone is Required!"} />
                )}
            </>
          ) : (
            <Input
              id={forl}
              type={type}
              placeholder={placeholder}
              {...register(name, validation)}
            />
          )}
          {isSubmitted && errors[name] && (
            <InputErrorMessage msg={errors[name]?.message} />
          )}
        </div>
      </div>
    )
  );

  const NotActiveNow = () => {
    toast.error("Development now, come back later!");
  };

  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 pl-5 mx-auto self-center text-left flex flex-col h-full max-sm:w-full px-10 pt-4 pb-1">
        <div className="w-full flex flex-col items-start mx-auto justify-center flex-grow pl-2 pb-5">
          <h3 className="text-[#1F2937] text-3xl font-bold mb-2">
            إنشاء حساب جديد
          </h3>
          <p className="text-[#0D0E0E]/75 text-base mb-6 max-sm:text-sm">
            أتملك حساباً بالفعل؟{" "}
            <Link to={"/auth/login"} className="font-semibold text-primary">
              تسجيل الدخول
            </Link>
          </p>
          <form className="w-[95%] space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {renderRegisterForm}
            <div className="w-full flex flex-col items-start pb-3">
              <h6 className="w-full flex items-center text-center text-[#9CA3AF] text-base font-medium pt-5 pb-3">
                <span className="flex-1 h-px bg-[#E5E7EB]"></span>
                <span className="px-3">أو مع</span>
                <span className="flex-1 h-px bg-[#E5E7EB]"></span>
              </h6>
              <div className="w-full flex items-center justify-center gap-8 pt-2">
                <img
                  className="w-8 cursor-pointer"
                  src={FacebookIcon}
                  alt="Facebook"
                  onClick={NotActiveNow}
                />
                <img
                  className="w-8 cursor-pointer"
                  src={GoogleIcon}
                  alt="Google"
                  onClick={NotActiveNow}
                />
                <img
                  className="w-8 cursor-pointer"
                  src={AppleIcon}
                  alt="Apple"
                  onClick={NotActiveNow}
                />
              </div>
            </div>
            <Button fullWidth isLoading={isLoading} className="rounded-3xl">
              إنشاء حساب جديد
            </Button>
            <p className="text-[#0D0E0E]/75 pt-1 mb-6 text-sm text-right">
              هل تواجهه اي مشاكل؟{" "}
              <Link to={"/contact-us"} className="font-semibold text-primary">
                التواصل مع الدعم
              </Link>
            </p>
          </form>
        </div>
        <footer className="mt-auto text-gray-500 font-medium text-sm text-right w-full">
          © 2025 <span className="font-bold">BFC</span> كل الحقوق محفوظة
        </footer>
      </div>
      <LeftSideAuth className="h-full" />
    </section>
  );
};

export default RegisterPage;
