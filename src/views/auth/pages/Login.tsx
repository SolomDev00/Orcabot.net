/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../components/ui/elements/Button";
import Input from "../../../components/ui/elements/Input";
import { LOGIN_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../../interfaces";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { setToken } from "../../../app/functions/token";
import AppleIcon from "../../../assets/apple.svg";
import GoogleIcon from "../../../assets/google.svg";
import FacebookIcon from "../../../assets/facebook_2.svg";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import LeftSideAuth from "../../../components/ui/LeftSideAuth";

interface IFormInput {
  phone?: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();
  const router = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    setIsLoading(true);
    try {
      const requestData = {
        ...data,
        phone,
      };
      const { data: resData } = await axiosInstance.post(
        "auth/login",
        requestData
      );

      if (resData.status === 200 && resData.status !== 403) {
        if (resData.status === 403) {
          toast.error(resData.msg);
          return;
        }

        dispatch(setToken(resData.data));

        const { token_type, permissions, user, ...otherData } = resData.data;
        const { roles, ...filteredUser } = user;

        const filteredResponse = {
          ...otherData,
          user: filteredUser,
        };

        cookie.set("userLoggedCIT", filteredResponse);

        toast.success("Logged in successfully!");
        setTimeout(() => {
          router("/");
        }, 2000);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      if (errorObj.response?.status === 401) {
        toast.error("Please check your password and email and try again.");
        return;
      }
      if (errorObj.response?.status === 500) {
        toast.error("Server or Network Error, try again.");
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderLoginForm = LOGIN_FORM.map(
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
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  const NotActiveNow = () => {
    toast.error("Development now, come back later!");
  };

  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 pl-5 mx-auto self-center text-left flex flex-col h-full max-sm:w-full px-10">
        <div className="w-full flex flex-col items-start mx-auto justify-center flex-grow pl-2">
          <h3 className="text-[#1F2937] text-3xl font-bold mb-2">
            تسجيل الدخول
          </h3>
          <p className="text-[#0D0E0E]/75 text-base mb-10 max-sm:text-sm">
            لا تملك حساب؟{" "}
            <Link to={"/auth/register"} className="font-semibold text-primary">
              إنشاء حساب جديد
            </Link>
          </p>
          <form className="w-[95%] space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {renderLoginForm}
            <div className="w-full flex flex-row items-center justify-between">
              <div className="flex items-center justify-between">
                <input
                  id="remember1"
                  name="remember"
                  type="checkbox"
                  value="remember"
                  className="w-3 h-3 accent-primary border-gray-300 bg-transparent rounded focus:ring-accent"
                />
                <label
                  htmlFor="remember1"
                  className="mr-2 text-base text-[#000C14]"
                >
                  تذكرني
                </label>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  to={"/auth/forget-password"}
                  className="font-semibold text-sm ml-1 text-primary"
                >
                  نسيت الرقم السري؟
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col items-start pb-5">
              <h6 className="w-full flex items-center text-center text-[#9CA3AF] text-base font-medium py-5">
                <span className="flex-1 h-px bg-[#E5E7EB]"></span>
                <span className="px-3">أو مع</span>
                <span className="flex-1 h-px bg-[#E5E7EB]"></span>
              </h6>
              <div className="w-full flex items-center justify-center gap-8 pt-3">
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
              تسجيل الدخول
            </Button>
          </form>
        </div>
        <footer className="mt-auto text-gray-500 font-medium text-sm text-right w-full">
          © 2025 <span className="font-bold">BFC</span> كل الحقوق محفوظة
        </footer>
      </div>
      <LeftSideAuth />
    </section>
  );
};

export default LoginPage;
