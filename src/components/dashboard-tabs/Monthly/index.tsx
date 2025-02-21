import "../Tab.style.css";
// import Button from "../../schema/Button";
// import { tokenSelector } from "../../../app/functions/token";
// import { useSelector } from "react-redux";
// import useAuthenticatedQuery from "../../../hooks/useCustomQuery";
// import LoadingScreen from "../../website-loading";
// import axiosInstance from "../../../config/axios.config";
// import toast from "react-hot-toast";

// interface IPlan {
//   id: number;
//   title: string;
//   price: string;
//   total_sms: string;
// }

export default function MonthlyTab() {
  // const { access_token } = useSelector(tokenSelector);

  // const { data, isLoading, error } = useAuthenticatedQuery({
  //     queryKey: ['dashboardPlans'],
  //     URL: 'plans',
  //     config: {
  //         headers: {
  //             Authorization: `Bearer ${access_token}`,
  //         },
  //     },
  // });

  // if (isLoading) {
  //     return (
  //         <div className='w-full h-[50vh] flex items-center justify-center'>
  //             <LoadingScreen />
  //         </div>
  //     );
  // }

  // if (error) {
  //     return <div>Error loading profile: {error.message}</div>;
  // }

  // const plans = data?.data || [];

  //   const getPlanColor = (id: number) => {
  //     switch (id) {
  //       case 1:
  //         return {
  //           background: "linear-gradient(135deg, #5B93FF 0%, #ffffff 100%)",
  //           color: "#5B93FF",
  //         };
  //       case 2:
  //         return {
  //           background: "linear-gradient(135deg, #FF8F6B 0%, #ffffff 100%)",
  //           color: "#FF8F6B",
  //         };
  //       case 3:
  //         return {
  //           background: "linear-gradient(135deg, #605BFF 0%, #ffffff 100%)",
  //           color: "#605BFF",
  //         };
  //       default:
  //         return {
  //           background: "linear-gradient(135deg, #FFC327 0%, #ffffff 100%)",
  //           color: "#FFC327",
  //         };
  //     }
  //   };

  //   const handleRecharge = async (plan: IPlan) => {
  //     try {
  //       const response = await axiosInstance.post(
  //         `recharge/${plan.id}`,
  //         { amount: plan.price },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${access_token}`,
  //           },
  //         }
  //       );

  //       const paymentLink = response.data.data.redirect;
  //       if (paymentLink) {
  //         window.location.href = paymentLink;
  //       } else {
  //         toast.error("Error receiving payment link error.");
  //       }
  //     } catch (error) {
  //       console.error("Error in recharging:", error);
  //       // toast.error('Error in recharging:', error);
  //     }
  //   };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* <div className="w-full flex flex-row flex-wrap items-center justify-center gap-5 mt-5 max-sm:flex-col max-sm:space-y-4 max-sm:space-x-0"> */}
      {/* {plans.map((plan: IPlan) => {
          const { background, color } = getPlanColor(plan.id);
          return (
            <div
              key={plan.id}
              className="w-2/5 bg-white p-3 rounded-2xl flex flex-col items-center justify-between space-y-4 relative overflow-hidden max-sm:w-full shadow-lg"
            >
              <div
                className="absolute top-[-75px] left-[-115px] w-56 h-56 rounded-full"
                style={{ background }}
              ></div>
              <div className="flex flex-col items-center justify-between space-y-8">
                <h3
                  className="relative text-3xl font-semibold mt-2 z-50"
                  style={{ color }}
                >
                  {plan.title}
                </h3>
                <div
                  className="p-2 px-3 rounded-xl"
                  style={{ background: `${color}1A` }}
                >
                  <h2 className="text-5xl font-bold" style={{ color }}>
                    ${plan.price}
                  </h2>
                </div>
                <h3 className="text-2xl font-medium" style={{ color }}>
                  {plan.total_sms} Message
                </h3>
              </div>
              <Button
                fullWidth
                className="hover:opacity-90"
                style={{ background: color, color: "#fff" }}
                onClick={() => handleRecharge(plan)}
              >
                Choose Plan
              </Button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
