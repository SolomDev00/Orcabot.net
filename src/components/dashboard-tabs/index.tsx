import "./Tab.style.css";
import { useState } from "react";
import YearlyTab from "./Yearly";
import MonthlyTab from "./Monthly";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function DashboardSelectPlan() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-auto mb-5">
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="الاشتراكات الحالية">
          <MonthlyTab />
        </TabPanel>
        <TabPanel header="الاشتراكات السابقة">
          <YearlyTab />
        </TabPanel>
      </TabView>
    </div>
  );
}
