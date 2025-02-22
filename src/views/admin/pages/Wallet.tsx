import { ServerCrash } from "lucide-react";
import { SoShoppingCart, SoWallet2 } from "solom-icon";
import DashboardLineChart from "../../../components/dashboard-charts/LineChart";
import PaymentSection from "../../../components/ui/Payment";
import { Link } from "react-router-dom";

const WalletPage = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-03-01",
      amount: "50$",
      method: "PayPal",
      status: "مكتمل",
    },
    {
      id: 2,
      date: "2024-02-25",
      amount: "30$",
      method: "Credit Card",
      status: "مرفوض",
    },
    {
      id: 3,
      date: "2024-02-20",
      amount: "100$",
      method: "PayPal",
      status: "مكتمل",
    },
  ];

  const sampleData = [
    { name: "January", value: 40 },
    { name: "February", value: 30 },
    { name: "March", value: 20 },
    { name: "April", value: 80 },
    { name: "May", value: 90 },
    { name: "June", value: 80 },
    { name: "July", value: 74 },
    { name: "August", value: 68 },
    { name: "September", value: 38 },
    { name: "October", value: 20 },
    { name: "November", value: 31 },
    { name: "December", value: 50 },
  ];

  return (
    <div className="w-full p-5 text-white">
      <div className="flex justify-between items-center gap-4 mb-8">
        <div className="w-full flex justify-between items-start gap-6 p-4 gradientBg rounded-2xl">
          <div>
            <h2 className="text-xl font-bold mb-3">رصيد المحفظة</h2>
            <div className="text-4xl font-bold text-white">150$</div>
          </div>
          <SoWallet2 className="w-14 h-14" />
        </div>
        <div className="w-full flex justify-between items-start gap-6 p-4 gradientBg rounded-2xl">
          <div>
            <h2 className="text-xl font-bold mb-3">عدد الأشتراكات</h2>
            <div className="text-4xl font-bold text-white">5</div>
          </div>
          <ServerCrash className="w-14 h-14" />
        </div>
        <div className="w-full flex justify-between items-start gap-6 p-4 gradientBg rounded-2xl">
          <div>
            <h2 className="text-xl font-bold mb-3">المدفوعات</h2>
            <div className="text-4xl font-bold text-white">2300$</div>
          </div>
          <SoShoppingCart className="w-14 h-14" />
        </div>
      </div>
      <div className="bg-[#3a3a4b] rounded-lg p-6 shadow-lg mb-8 hidden">
        <h2 className="text-2xl font-bold mb-4">المدفوعات</h2>
        <DashboardLineChart data={sampleData} />
      </div>
      <div className="mb-8 p-6 bg-[#3a3a4b] rounded-xl">
        <h2 className="text-2xl font-bold mb-6">شحن الرصيد</h2>
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <label className="block mb-2 text-lg text-primary">
              المبلغ المطلوب
            </label>
            <div className="grid grid-cols-3 gap-3">
              {["10$", "20$", "50$", "100$", "200$", "أخرى"].map((amount) => (
                <button
                  key={amount}
                  className="p-3 bg-gray-400 rounded-lg hover:bg-primary transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="block mb-3 text-lg text-primary">
              طريقة الدفع
            </label>
            <PaymentSection />
          </div>
          <p className="text-sm text-gray-400 text-right">
            للدفع بطرق اخري مثل تحويل بنكي او اس تي سي باي او كريبتو او غيره
            الرجاء التواصل مع{" "}
            <Link to="/support" className="text-primary hover:underline">
              الدعم عبر الديسكورد
            </Link>
          </p>
        </div>
      </div>
      <div className="p-6 bg-[#3a3a4b] rounded-xl">
        <h2 className="text-2xl font-bold mb-6">سجل العمليات</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-right border-b border-gray-300">
                <th className="pb-3">التاريخ</th>
                <th className="pb-3">المبلغ</th>
                <th className="pb-3">طريقة الدفع</th>
                <th className="pb-3">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-300">
                  <td className="py-3">{transaction.date}</td>
                  <td className="py-3">{transaction.amount}</td>
                  <td className="py-3">{transaction.method}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded ${
                        transaction.status === "مكتمل"
                          ? "bg-green-800/30 text-green-400"
                          : "bg-red-800/30 text-red-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
