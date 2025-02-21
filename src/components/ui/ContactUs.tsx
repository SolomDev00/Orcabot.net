import Input from "./elements/Input";
import { FormEvent, useState } from "react";
import {
  SoFacebook,
  SoInstagram,
  SoLinkedIn,
  SoMail,
  SoSend,
  SoTwitter,
} from "solom-icon";
import Textarea from "./elements/Textarea";
import Button from "./elements/Button";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axios.config";
import Cookies from "universal-cookie";

const AboutUsContact = () => {
  const token = new Cookies().get("userLoggedCIT");

  const [msgData, setMsgData] = useState({
    msgName: "",
    msgEmail: "",
    msgPhone: "",
    msgCompany: "",
    msgMessage: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMsg = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !msgData.msgName ||
      !msgData.msgEmail ||
      !msgData.msgPhone ||
      !msgData.msgMessage ||
      !msgData.msgCompany
    ) {
      toast.error("Please fill all fields");
      setIsLoading(false);
      return;
    }

    const data = {
      name: msgData.msgName,
      email: msgData.msgEmail,
      phone: msgData.msgPhone,
      subject: msgData.msgMessage,
      message: msgData.msgMessage,
      company_name: msgData.msgCompany,
      status: 1,
    };

    try {
      const response = await axiosInstance.post("v1/general/contact-us", data, {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        },
      });

      if (response.status === 200) {
        toast.success("The Message was sent successfully!");
        setMsgData({
          msgName: "",
          msgEmail: "",
          msgPhone: "",
          msgCompany: "",
          msgMessage: "",
        });
      } else {
        toast.error("Failed to send the message!");
      }
    } catch (error) {
      toast.error("An error occurred while sending the Request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="aboutUscontact" className="testimonial bg-center pt-44 pb-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
        <div className="flex flex-col items-start text-white text-right space-y-4 md:w-1/2">
          <span className="bg-secondary text-[#53490D] px-4 py-1 rounded-full text-sm mb-5">
            تواصل معنا
          </span>
          <h2 className="text-3xl font-bold">احنا هنا علشان نسمع منك</h2>
          <p className="text-lg leading-7">
            في <span className="font-bold">BFC</span> رأيك يهمنا، لو عندك أي
            استفسار، اقتراح، أو حتى مجرد كلمة حلوة عايز تقولها. احنا موجودين
            دايماً ليك.
          </p>
          <div className="flex items-center gap-3 py-12">
            <div className="p-3 bg-white/10 rounded-full">
              <SoMail className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium space-y-1">
              إبعتلنا علي
              <span className="block font-bold text-white">info@bfc.eg</span>
            </p>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <div className="flex items-center gap-3">
              <p>أو من خلال</p>
              <span className="block w-7 h-0.5 rounded-2xl bg-white" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg group hover:bg-white transition-colors duration-150 cursor-pointer">
              <SoLinkedIn className="text-white w-4 h-4 group-hover:text-[#6E3F30]" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg group hover:bg-white transition-colors duration-150 cursor-pointer">
              <SoInstagram className="text-white w-4 h-4 group-hover:text-[#6E3F30]" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg group hover:bg-white transition-colors duration-150 cursor-pointer">
              <SoTwitter className="text-white w-4 h-4 group-hover:text-[#6E3F30]" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg group hover:bg-white transition-colors duration-150 cursor-pointer">
              <SoFacebook className="text-white w-4 h-4 group-hover:text-[#6E3F30]" />
            </div>
          </div>
        </div>
        <form
          className="bg-white p-6 rounded-xl shadow-lg md:w-1/2"
          onSubmit={handleSendMsg}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black/85">
                الاسم الكامل
              </label>
              <Input
                id="fullname"
                type="text"
                placeholder="ادخل اسمك الأول والأخير"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black/85">
                البريد الإلكتروني
              </label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <label className="text-sm font-medium text-black/85">الموضوع</label>
            <Input id="subject" type="text" placeholder="عنوان الموضوع" />
          </div>
          <div className="mt-4 space-y-2">
            <label className="text-sm font-medium text-black/85">
              التفاصيل
            </label>
            <Textarea id="message" placeholder="التفاصيل" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 accent-secondary"
            />
            <label htmlFor="agree" className="text-sm text-accent ml-2">
              أوافق على تلقي عروض وتحديثات من الموقع
            </label>
          </div>
          <Button
            isLoading={isLoading}
            fullWidth
            type="submit"
            className="w-full mt-6 bg-primary text-white py-3 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            <SoSend className="h-5 w-5" />
            إرسال
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AboutUsContact;
