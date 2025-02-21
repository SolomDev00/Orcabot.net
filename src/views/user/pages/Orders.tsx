import OrderCard from "../../../components/ui/OrderCard";

const OrdersPage = () => {
  const orders = [
    {
      orderId: 1,
      paymentMethod: "الدفع عند الاستلام",
      price: "14,50$",
      points: 5,
      status: "preparing" as const,
    },
    {
      orderId: 2,
      paymentMethod: "الدفع عند الاستلام",
      price: "14,50$",
      points: 5,
      status: "delivered" as const,
    },
    {
      orderId: 3,
      paymentMethod: "الدفع عند الاستلام",
      price: "14,50$",
      points: 5,
      status: "confirmed" as const,
    },
  ];

  return (
    <section id="orders" className="w-full flex flex-col items-center pr-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-right w-full text-[#353535] font-bold text-lg mb-4">
          الشحنة الحالية
        </h2>
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
