import InfoSection from "./website/InfoSection";
import LandingSection from "./website/LandingSection";

const HomePage = () => {
  return (
    <div className="w-full max-sm:overflow-x-hidden relative">
      <LandingSection />
      <InfoSection />
    </div>
  );
};

export default HomePage;
