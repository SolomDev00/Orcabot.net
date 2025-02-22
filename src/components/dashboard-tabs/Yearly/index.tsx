import "../Tab.style.css";

export default function YearlyTab() {
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
    <div className="bg-[#3a3a4b] text-white p-6 rounded-xl mt-5">
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
  );
}
