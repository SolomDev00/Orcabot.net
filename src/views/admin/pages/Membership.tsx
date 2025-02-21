import DashboardSelectPlan from "../../../components/dashboard-tabs";

const SubscriptionsPage = () => {
  const currentSubscriptions = [
    {
      id: 1,
      server: "Server A",
      sector: "Marketing",
      status: "مفعل",
      duration: "1 سنة",
      start: "2024-01-01",
      end: "2025-01-01",
    },
    {
      id: 2,
      server: "Server B",
      sector: "Sales",
      status: "مفعل",
      duration: "6 أشهر",
      start: "2024-03-01",
      end: "2024-09-01",
    },
  ];

  const pastSubscriptions = [
    {
      id: 3,
      server: "Server C",
      sector: "Support",
      status: "منتهي",
      duration: "1 سنة",
      start: "2022-01-01",
      end: "2023-01-01",
    },
  ];

  return (
    <div className="w-full p-5 text-white">
      <DashboardSelectPlan />
      <div className="bg-[#3a3a4b] p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold mb-6">الاشتراكات الحالية</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-right border-b border-gray-300">
                <th className="pb-3">رقم الاشتراك</th>
                <th className="pb-3">السيرفر</th>
                <th className="pb-3">القطاع</th>
                <th className="pb-3">الحالة</th>
                <th className="pb-3">المدة</th>
                <th className="pb-3">تاريخ البداية</th>
                <th className="pb-3">تاريخ النهاية</th>
              </tr>
            </thead>
            <tbody>
              {currentSubscriptions.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-300">
                  <td className="py-3">{sub.id}</td>
                  <td className="py-3">{sub.server}</td>
                  <td className="py-3">{sub.sector}</td>
                  <td className="py-3">
                    <span className="bg-green-800/30 text-green-400 px-2 py-1 rounded">
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-3">{sub.duration}</td>
                  <td className="py-3">{sub.start}</td>
                  <td className="py-3">{sub.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#3a3a4b] p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">الاشتراكات السابقة</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-right border-b border-gray-300">
                <th className="pb-3">رقم الاشتراك</th>
                <th className="pb-3">السيرفر</th>
                <th className="pb-3">القطاع</th>
                <th className="pb-3">الحالة</th>
                <th className="pb-3">المدة</th>
                <th className="pb-3">تاريخ البداية</th>
                <th className="pb-3">تاريخ النهاية</th>
              </tr>
            </thead>
            <tbody>
              {pastSubscriptions.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-300">
                  <td className="py-3">{sub.id}</td>
                  <td className="py-3">{sub.server}</td>
                  <td className="py-3">{sub.sector}</td>
                  <td className="py-3">
                    <span className="bg-red-800/30 text-red-400 px-2 py-1 rounded">
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-3">{sub.duration}</td>
                  <td className="py-3">{sub.start}</td>
                  <td className="py-3">{sub.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
