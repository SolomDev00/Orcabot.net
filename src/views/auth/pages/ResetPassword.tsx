import { useEffect, useState } from "react";
import Button from "../../../components/ui/elements/Button";
import Input from "../../../components/ui/elements/Input";
import { RESET_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../../interfaces";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import LeftSideAuth from "../../../components/ui/LeftSideAuth";

interface IFormInput {
  password: string;
  password_confirmation: string;
}

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const cookie = new Cookies();
  const router = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(resetSchema),
  });

  useEffect(() => {
    const hashParams = window.location.hash.split("?")[1];
    if (hashParams) {
      const urlParams = new URLSearchParams(hashParams);
      const tokenParam = urlParams.get("token");
      const emailParam = urlParams.get("email");

      if (tokenParam) setToken(tokenParam);
      if (emailParam) setEmail(emailParam);
    }
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    if (!token || !email) {
      toast.error("Invalid link, try again.");
      return;
    }
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "auth/reset-password",
        {
          ...data,
          token,
          email,
        }
      );
      cookie.set("userLoggedCIT", resData.data);
      if (status === 200) {
        toast.success(resData.msg);
        setTimeout(() => {
          router("/auth/login");
        }, 1000);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`Update failed: ${errorObj.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderResetForm = RESET_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1 text-right">
          <label htmlFor={forl} className="text-[#6B7280] text-base">
            {placel}
          </label>
          <Input
            id={forl}
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 pl-5 mx-auto self-center text-left flex flex-col h-full max-sm:w-full px-10">
        <div className="w-full flex flex-col items-start mx-auto justify-center flex-grow pl-2">
          <h3 className="text-[#1F2937] text-3xl font-medium mb-3">
            إنشاء كلمة مرور جديدة
          </h3>
          <h5 className="text-[#6B7280] text-lg mb-5 max-sm:text-sm">
            عد لرحلتك مرة أخرى
          </h5>
          <form className="w-[95%] space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {renderResetForm}
            <div className="py-2" />
            <Button fullWidth isLoading={isLoading} className="rounded-3xl">
              إعادة تعيين كلمة المرور
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

export default ResetPasswordPage;
