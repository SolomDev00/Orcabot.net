/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Button from "../../../components/ui/elements/Button";
import { Link } from "react-router-dom";
import OTPImg from "../../../assets/auth/otp.svg";
import LogoImg from "../../../assets/logo.svg";
import toast from "react-hot-toast";

const OTPPage = () => {
  const [code, setCode] = useState(Array(4).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "");
    const newCode = [...code];
    newCode[index] = newValue.slice(0, 1);
    setCode(newCode);
    if (newValue && index < 5) {
      document.getElementById(`input-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // const codeString = code.join('');
      // const response = await a.post('/auth/reset-password', { code: codeString });

      toast.success("Code verified successfully");
    } catch (error: any) {
      setError(error.response?.data.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center gap-5 w-full min-h-screen">
      <div className="flex-shrink-0 w-[42%] pl-5 mx-auto self-center text-left flex flex-col h-full max-sm:w-full">
        <div className="w-full flex flex-col items-center overflow-hidden mx-auto justify-center flex-grow">
          <img className="w-60 mb-10" src={OTPImg} alt="Otp" />
          <div className="w-full flex flex-col items-start">
            <h3 className="text-[#1F2937] text-3xl font-bold mb-1">
              OTP Verification
            </h3>
            <h5 className="text-[#6B7280] text-base font-semibold mb-3 w-[400px] max-sm:w-full max-sm:text-sm">
              We will send you a one-time password for this email
            </h5>
            <h4 className="text-[#1F2937] text-base font-bold mb-8 max-sm:text-sm">
              email@example.email
            </h4>
            <form className="w-[95%] space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-start space-x-2">
                {code.map((value, index) => (
                  <input
                    key={index}
                    id={`input-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    className={`w-16 h-16 text-center text-xl border border-primary rounded focus:outline-none ${
                      value ? "bg-primary text-white" : "bg-white"
                    } focus:ring-2 focus:ring-primary`}
                    maxLength={1}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                ))}
                <p>{error}</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between pt-3">
                <p className="text-[#0D0E0E]/75 text-base font-semibold max-sm:text-sm">
                  Did not receive the message?{" "}
                  <Link
                    to={"/"}
                    className="font-semibold underline text-primary"
                  >
                    Resend
                  </Link>
                </p>
                <p className="text-base text-[#4B5563]">55:11</p>
              </div>
              <Button fullWidth isLoading={isLoading}>
                Confirm
              </Button>
            </form>
          </div>
        </div>
        <footer className="mt-auto mb-2 text-[#8A8A8A] font-medium text-sm text-left w-full">
          All Copyrighted goes for CIT E- Catalogue © 2024
        </footer>
      </div>
      <div className="backgroundImage max-sm:hidden flex flex-col justify-between p-4">
        <div className="flex justify-end pt-2">
          <img className="w-28" src={LogoImg} alt="Logo" />
        </div>
        <div className="flex flex-col items-start gap-2 pb-4 px-5">
          <h3 className="text-4xl font-semibold text-white pointer-events-none">
            Welcome back
          </h3>
          <p className="text-lg font-semibold text-white pointer-events-none">
            Ready to make great connections and find trusted service providers?
            Dive back in and let us guide you through every step of your
            journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OTPPage;
