import LeftSideAuth from "../../../components/ui/LeftSideAuth";
import ResetImg from "../../../assets/reset.svg";
import Button from "../../../components/ui/elements/Button";

const DoneResetPage = () => {
  return (
    <section className="flex items-center justify-center gap-5 w-full p-7">
      <div className="flex-shrink-0 w-1/2 mx-auto self-center text-center flex flex-col h-full max-sm:w-full">
        <div className="w-full flex flex-col items-center mx-auto justify-center flex-grow">
          <img className="w-60" src={ResetImg} alt="Reset" />
          <h3 className="text-[#1F2937] text-3xl mt-12">
            تم تغيير كلمة المرور بنجاح
          </h3>
          <h5 className="text-[#6B7280] text-lg max-w-[300px] mt-2 mb-10 max-sm:w-full max-sm:text-sm">
            تم تغيير كلمة المرور الخاصة بك بنجاح{" "}
          </h5>
          <Button className="rounded-3xl px-8">الرجوع لتسجيل الدخول</Button>
        </div>
        <footer className="mt-auto text-gray-500 font-medium text-sm text-right w-full">
          © 2025 <span className="font-bold">BFC</span> كل الحقوق محفوظة
        </footer>
      </div>
      <LeftSideAuth />
    </section>
  );
};

export default DoneResetPage;
