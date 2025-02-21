import { Link } from "react-router-dom";
import LeftSideAuth from "../../../components/ui/LeftSideAuth";
import MailImg from "../../../assets/mail.svg";

const DoneForgetPage = () => {
  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 mx-auto self-center text-center flex flex-col h-full max-sm:w-full">
        <div className="w-full flex flex-col items-center mx-auto justify-center flex-grow">
          <h3 className="text-[#1F2937] text-3xl mb-6">تم بنجاح</h3>
          <h5 className="text-[#6B7280] text-lg max-w-[300px] mb-12 max-sm:w-full max-sm:text-sm">
            اذهب لتفقد الهاتف الخاص بك لتسجيل كلمة المرور الجديدة
          </h5>
          <img className="w-56" src={MailImg} alt="Mail" />
          <p className="text-[#0D0E0E]/75 pt-10 mb-6 text-sm">
            لم تحصل علي الرسالة؟{" "}
            <Link to={"/contact-us"} className="font-semibold text-primary">
              إعادة إرسال رسالة الواتساب{" "}
            </Link>
          </p>
        </div>
        <footer className="mt-auto text-gray-500 font-medium text-sm text-right w-full">
          © 2025 <span className="font-bold">BFC</span> كل الحقوق محفوظة
        </footer>
      </div>
      <LeftSideAuth />
    </section>
  );
};

export default DoneForgetPage;
