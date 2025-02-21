import ChooseSection from "./website/ChooseSection";
import LandingSection from "./website/LandingSection";
import MostOrderedSection from "./website/MostOrderedSection";
import SpecialOfferSection from "./website/OfferSection";
import TestimonialsSection from "./website/TestimonialsSection";
import WhyChooseUsSection from "./website/WhyChooseUsSection";

const HomePage = () => {
  return (
    <div className="w-full max-sm:overflow-x-hidden relative">
      <LandingSection />
      <SpecialOfferSection />
      <ChooseSection />
      <WhyChooseUsSection />
      <MostOrderedSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
