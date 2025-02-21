import { InputHTMLAttributes, Ref, forwardRef, useState } from "react";
import { SoEye } from "solom-icon";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  ({ type, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type === "password" && showPassword ? "text" : type}
          className="border border-gray-300 text-[#9CA3AF] focus:outline-none outline-none focus:ring-1 focus:ring-primary rounded-3xl px-4 py-3 text-base w-full bg-transparent duration-200"
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
          >
            {showPassword ? (
              <SoEye className="w-5 h-5 text-primary" />
            ) : (
              <SoEye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    );
  }
);

export default Input;
