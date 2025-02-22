/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const PaymentSection = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handlePayment = useCallback(() => {
    if ((window as any).paypal) {
      (window as any).paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "blue",
            shape: "pill",
            label: "paypal",
            height: 55,
            tagline: false,
            locale: "ar_EG",
          },
          createOrder: function () {
            return axios
              .post("http://localhost:8000/create-payment", {
                amount: "100.00",
                currency: "USD",
              })
              .then((res) => res.data.orderID)
              .catch(() => alert("فشل في إنشاء طلب الدفع!"));
          },
          onApprove: function (data: any) {
            return axios
              .post(`http://localhost:8000/capture-payment/${data.orderID}`)
              .then(() => alert("تم الدفع بنجاح!"))
              .catch(() => alert("حدث خطأ في تأكيد الدفع!"));
          },
          onError: (err: any) => {
            console.error("Payment error:", err);
            alert("فشلت عملية الدفع!");
          },
        })
        .render("#paypal-button-container");
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AaUXFW_pTKgrQPOWeyeWVTgNaGDf2vOEN_lzUPSMr8Co0h0zVFWJ_meyztvmEVLJMSrmoCebHpKjsWqP&currency=USD`;
    script.addEventListener("load", () => setScriptLoaded(true));
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      handlePayment();
    }
  }, [scriptLoaded, handlePayment]);

  return (
    <div className="mx-auto">
      <div className="rounded-xl animate-fade-in">
        <div id="paypal-button-container" className="mb-2" />
      </div>
    </div>
  );
};

export default PaymentSection;
