import ProductDetails from "../../components/ui/ProductDetails";
import SuggestionSlider from "../../components/ui/SuggestionSlider";

const ProductPage = () => {
  return (
    <section id="product" className="relative">
      <div className="flex flex-col items-center justify-center mt-28 pb-10 container">
        <ProductDetails />
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">المقترح</h2>
          <SuggestionSlider />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">مميز من اجلك فقط</h2>
          <SuggestionSlider />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
