import bgImg from "../assets/images/parchment_bg.jpg";

const Body = (props) => {
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
        <p className="font-cursive text-xl mb-4">{props.tagline}</p>
        <img
          src={props.logo}
          alt="SUTD Magic Themed Logo"
          className="h-2/3 pb-full mx-auto fill-current text-green-600"
        />
        <p className="font-cursive text-xl mb-4">{props.desc}</p>
      </div>
    </section>
  );
};

export default Body;
