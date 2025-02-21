import User from "../../assets/omda.png";
import User2 from "../../assets/customer2.svg";

const servers = Array.from({ length: 12 }, () => (
  <img
    className="w-12 rounded-full hover:scale-110 duration-200 cursor-pointer"
    src={User2}
    alt="server"
  />
));

const DashboardServer = () => {
  return (
    <aside className={`w-24 bg-[#1f1f25]`}>
      <div className="flex flex-col items-center justify-between gap-2 pb-2">
        <div className="flex flex-col items-center justify-between gap-2">
          <img className="w-12 rounded-full" src={User} alt="server" />
          <div className="w-full h-[1px] bg-[#35353e] rounded-full" />
        </div>
        {servers.map((server) => {
          return server;
        })}
      </div>
    </aside>
  );
};

export default DashboardServer;
