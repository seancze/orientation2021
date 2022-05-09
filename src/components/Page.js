import React from "react";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import Navbar from "./Navbar";
import bgImg from "../assets/images/parchment_bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

// Deprecated: py-32

const urlEndpoint = "https://ik.imagekit.io/kxnn3moobg/";

const Page = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <Navbar />
        <IKContext urlEndpoint={urlEndpoint}>
          <div
            className="flex flex-col h-screen bg-cover bg-center justify-top py-16 sm:px-5 lg:px-28 text-primary-dark"
            style={{
              backgroundImage: `linear-gradient(to ${
                props.number % 2 == 0 ? "left" : "right"
              }, #333, #fff0 5%), linear-gradient(rgba(255,255,255,0.20), rgba(0,0,0,0.60) 120%), url(${bgImg}) `,
            }}
          >
            <div className="font-medium text-center z-10 w-full place-self-center h-5/6 mb-4">
              <h1 className="font-magic-primary text-2xl md:text-3xl">
                {props.title}
              </h1>
              {props.children}
              <p className="font-cursive text-xl mb-4">{props.tagline}</p>
              {props.logo && (
                <IKImage
                  src={props.logo}
                  alt="SUTD Magic Themed House Logo"
                  transformation={[
                    {
                      height: 300,
                    },
                  ]}
                  className="mx-auto"
                  loading="lazy"
                />
                // <img
                //   src={props.logo}
                //   alt="SUTD Magic Themed Logo"
                //   className="h-2/3 pb-full mx-auto fill-current text-green-600"
                // />
              )}
              <p className="font-cursive text-md mb-4">
                {props.desc}
                {props.isPreface ? (
                  <p>
                    Majutsu is set in a parallel universe where magic and
                    wizardry exists. Recently, an evil spirit was unleashed onto
                    the world, causing widespread chaos. Legend has it that this
                    evil spirit can be defeated by crafting the weapons
                    originally created by the founders of the Sorcerers’
                    University of Technological Divination (SUTD). With no time
                    to lose, the Headmaster decides to reward the House that
                    crafts their weapon the fastest handsomely.
                    <br />
                    <p className="text-xl">
                      Will you be the fastest House and will Chaos ever be
                      defeated?
                      <br />
                      <b>
                        {" "}
                        Join us from 6th to 10th September to shape your legacy.
                      </b>{" "}
                      <br />
                    </p>
                  </p>
                ) : null}
              </p>
              <div className="flex flex-row justify-around">
                {props.loadPrevPage && (
                  <button
                    className={`${props.number % 2 == 1 ? "md:hidden" : ""}`}
                    onClick={() => props.loadPrevPage()}
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="inline w-12 text-4xl ml-2 text-primary-dark"
                      icon={faArrowCircleLeft}
                    />
                  </button>
                )}
                {props.loadNextPage && (
                  <button
                    className={`${props.number % 2 == 1 ? "" : "md:hidden"}`}
                    onClick={() => props.loadNextPage()}
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="inline w-12 text-4xl ml-2 text-primary-dark"
                      icon={faArrowCircleRight}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </IKContext>
      </div>
    </>
  );
});

export default Page;
