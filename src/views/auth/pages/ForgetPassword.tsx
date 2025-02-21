/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../components/ui/elements/Button";
import { FORGET_FORM } from "../../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../../components/auth-errormsg/InputErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { forgetSchema } from "../../../validation";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../../interfaces";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { setToken } from "../../../app/functions/token";
import { PhoneInput } from "react-international-phone";
import LeftSideAuth from "../../../components/ui/LeftSideAuth";

interface IFormInput {
  phone?: string;
}

const ForgetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<IFormInput>({
    resolver: yupResolver(forgetSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "auth/forget-password",
        data
      );
      dispatch(setToken(resData.data));
      cookie.set("userLoggedCIT", resData.data);
      if (status === 200) {
        if (resData.data.data && resData.data.data.error) {
          toast.error(resData.data.msg);
        } else {
          toast.success(
            "A password reset message has been sent, please review the validity email for an hour from now!"
          );
        }
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`Forget password failed: ${errorObj.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForgetForm = FORGET_FORM.map(
    ({ placeholder, forl, placel }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1 text-right">
          <label htmlFor={forl} className="text-[#6B7280] text-base">
            {placel}
          </label>
          <div className="space-y-2 border border-gray-300 rounded-3xl">
            <PhoneInput
              autoFocus
              showDisabledDialCodeAndPrefix
              value={phone}
              defaultCountry="eg"
              onChange={(phone) => setPhone(phone)}
              placeholder={placeholder}
              inputProps={{
                style: {
                  direction: phone === "" ? "rtl" : "ltr",
                },
              }}
            />
          </div>
          {isSubmitted && (phone.trim() === "" || phone.trim().length <= 2) && (
            <InputErrorMessage msg={"Phone is Required!"} />
          )}
        </div>
      </div>
    )
  );

  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 pl-5 mx-auto self-center text-left flex flex-col h-full max-sm:w-full px-10">
        <div className="w-full flex flex-col items-start mx-auto justify-center flex-grow pl-2">
          <h3 className="text-[#1F2937] text-3xl font-bold mb-6">
            نسيت الرقم السري
          </h3>
          <h5 className="text-[#6B7280] text-base mb-5 w-[250px] max-sm:w-full max-sm:text-sm text-right">
            لنرجعك مرة اخري لحسابك قم بكتابة رقم الواتساب لارسال الرابط
          </h5>
          <p className="text-[#0D0E0E]/75 text-base mb-5 max-sm:text-sm">
            هل تذكرت الرقم السري؟{" "}
            <Link to={"/auth/login"} className="font-semibold text-primary">
              تسجيل الدخول
            </Link>
          </p>
          <form className="w-[95%] space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {renderForgetForm}
            <Button fullWidth isLoading={isLoading} className="rounded-3xl">
              التالي{" "}
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
      <LeftSideAuth />
    </section>
  );
};

export default ForgetPasswordPage;
