import "../Tab.style.css";

export default function MonthlyTab() {
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

  return (
    <div className="bg-[#3a3a4b] text-white p-6 rounded-xl mt-5">
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
  );
}
