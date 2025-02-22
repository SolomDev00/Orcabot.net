import { Info } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { SoCheckBadge } from "solom-icon";

interface Invoice {
  id: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: "pending" | "grace" | "expired";
  subscriptionEnd: string;
}

const InvoicesPage = () => {
  const [walletBalance] = useState(1500);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-2023-001",
      issueDate: "2023-10-01",
      dueDate: "2023-10-16",
      amount: 500,
      status: "pending",
      subscriptionEnd: "2023-10-20",
    },
    {
      id: "INV-2023-002",
      issueDate: "2023-10-05",
      dueDate: "2023-10-20",
      amount: 300,
      status: "grace",
      subscriptionEnd: "2023-10-22",
    },
  ]);

  const handlePayment = (invoiceId: string) => {
    const invoice = invoices.find((inv) => inv.id === invoiceId);
    if (!invoice) return;

    if (walletBalance < invoice.amount) {
      toast.error("رصيد المحفظة غير كافي!");
      return;
    }
    setInvoices(invoices.filter((inv) => inv.id !== invoiceId));
    toast.success("تم الدفع بنجاح وتجديد الاشتراك!");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="badge warning">معلقة</span>;
      case "grace":
        return <span className="badge info">فترة سماح</span>;
      case "expired":
        return <span className="badge danger">منتهية</span>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-8 text-white">
      <div className="bg-[#3a3a4b] p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">الفواتير الحالية</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-right border-b border-gray-300">
                <th className="pb-3">رقم الفاتورة</th>
                <th className="pb-3">تاريخ الإصدار</th>
                <th className="pb-3">تاريخ الاستحقاق</th>
                <th className="pb-3">المبلغ</th>
                <th className="pb-3">الحالة</th>
                <th className="pb-3">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-300">
                  <td className="py-3">{invoice.issueDate}</td>
                  <td className="py-3">{invoice.id}</td>
                  <td className="py-3">{invoice.dueDate}</td>
                  <td className="py-3">{invoice.amount}$</td>
                  <td className="py-3">{getStatusBadge(invoice.status)}</td>
                  <td className="py-3">
                    <button
                      className="pay-btn"
                      onClick={() => handlePayment(invoice.id)}
                    >
                      دفع الآن
                      <SoCheckBadge />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {invoices.length === 0 && (
          <div className="text-center py-8">
            <Info className="text-4xl mx-auto text-gray-400" />
            <p className="mt-4 text-gray-400">لا توجد فواتير معلقة</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoicesPage;
