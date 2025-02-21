import backgroundImage from "../../../assets/about.svg";

const AboutUsLanding = () => {
  return (
    <section
      id="aboutUs"
      className="landing-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content space-y-5 max-sm:mt-20">
        <h2 className="text-white text-7xl font-extrabold uppercase max-sm:text-2xl max-sm:font-semibold">
          About our platform
        </h2>
        <p className="text-white text-3xl font-bold max-sm:text-xl max-sm:font-medium">
          Connecting You to the Best, Every Step of the Way
        </p>
      </div>
    </section>
  );
};

export default AboutUsLanding;
