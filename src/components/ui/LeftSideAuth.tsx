import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo_white.svg";

interface IProps {
  className?: string;
}

const LeftSideAuth = ({ className }: IProps) => {
  return (
    <div
      className={`backgroundImage max-sm:hidden flex flex-col justify-between p-4 rounded-2xl ${className}`}
    >
      <div className="flex justify-end pt-2">
        <Link to={"/"}>
          <img className="w-32 px-5" src={LogoImg} alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-2 pb-4 px-5">
        <h3 className="text-4xl font-semibold text-white pointer-events-none">
          اهلا بعودتك
        </h3>
        <p className="text-2xl font-semibold text-white pointer-events-none">
          استكمل رحلتك معنا
        </p>
      </div>
    </div>
  );
};

export default LeftSideAuth;
