import { ServerCrash } from "lucide-react";
import { Link } from "react-router-dom";
import { SoShoppingCart, SoWallet2 } from "solom-icon";

const AdminDashboardPage = () => {
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
          <div className="mb-6">
            <label className="block mb-2 text-lg text-primary">
              طريقة الدفع
            </label>
            <div className="flex items-center gap-3">
              <label className="w-full flex items-center gap-2 p-3 bg-gray-400 rounded-lg">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>PayPal</span>
              </label>
              <label className="w-full flex items-center gap-2 p-3 bg-gray-400 rounded-lg">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>Credit/Debit Card</span>
              </label>
            </div>
          </div>
          <div className="text-sm text-white mb-6">
            للدفع بطرق أخرى، الرجاء التواصل مع الدعم عبر{" "}
            <Link to="/#" className="text-primary ml-1">
              الديسكورد
            </Link>
          </div>
          <button className="w-full py-3 bg-primary rounded-lg hover:bg-opacity-90 transition-colors">
            إتمام عملية الدفع
          </button>
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

export default AdminDashboardPage;
