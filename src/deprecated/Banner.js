import Countdown from "../components/Countdown";
import bgImg from "../assets/images/parchment_bg.jpg";
import sutdMagicLogo from "../assets/images/sutd_magic_logo_two.png";

const Banner = (props) => {
  return (
    <section
      className="flex flex-col h-screen bg-cover bg-center justify-top py-32 sm:px-5 lg:px-28 text-primary-dark"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="font-medium text-center z-10 w-full lg:w-4/5 xl:w-3/5 place-self-center h-5/6 mb-4">
        <h1 className="font-magic-primary text-2xl md:text-3xl">
          {props.title}
        </h1>
        <p className="font-cursive text-xl mb-4">{props.desc}</p>
        <img
          src={sutdMagicLogo}
          alt="SUTD Magic Themed Logo"
          className="h-2/3 pb-full mx-auto fill-current text-green-600"
        />
      </div>
      <Countdown date="09 September 2021" />
    </section>
  );
};

export default Banner;
