import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import Navbar from "../components/Navbar";
import bgImg from "../assets/images/parchment_bg.jpg";
import Countdown from "./Countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const urlEndpoint = "https://ik.imagekit.io/kxnn3moobg/";

// Deprecated: radial-gradient(at top center, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.60) 120%),

const TitlePage = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <Navbar />
        <IKContext urlEndpoint={urlEndpoint}>
          <div
            className="flex flex-col h-screen bg-cover bg-center justify-center sm:px-5 lg:px-28 text-primary-dark"
            style={{
              backgroundImage: `linear-gradient(to left, #333, #fff0 5%), linear-gradient(rgba(255,255,255,0.20), rgba(0,0,0,0.60) 120%), url(${bgImg}) `,
            }}
          >
            <div className="font-medium text-center z-10 w-full lg:w-4/5 place-self-center h-5/6 mb-4">
              <h1 className="font-magic-primary text-2xl md:text-3xl">
                {props.title}
              </h1>
              <p className="font-cursive text-xl mb-4">{props.tagline}</p>
              <IKImage
                src={props.logo}
                alt="SUTD Magic Themed Logo"
                transformation={[
                  {
                    height: 500,
                    crop: "at_most",
                  },
                ]}
                className="mx-auto"
              />
              {/* <img
                src={props.logo}
                alt="SUTD Magic Themed Logo"
                className="mx-auto fill-current text-green-600"
              /> */}
              <h2 className="font-magic-primary text-2xl md:text-3xl">
                {props.theme}
              </h2>
              <Countdown date="06 September 2021" />
              <p>
                <b className="font-cursive text-sm  text-primary-red">
                  The orientation programme may be modified / cancelled, subject
                  to prevailing COVID-19 guidelines.
                </b>
              </p>

              <div className="flex flex-row justify-around mt-4 md:hidden">
                <button onClick={() => props.loadNextPage()}>
                  {" "}
                  <FontAwesomeIcon
                    className="inline w-12 text-4xl ml-2 text-primary-dark"
                    icon={faArrowCircleRight}
                  />
                </button>
              </div>
            </div>
          </div>
        </IKContext>
      </div>
    </>
  );
});

export default TitlePage;
