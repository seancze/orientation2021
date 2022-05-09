import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import useWindowDimensions from "../helpers/useWindowDimensions";
import Page from "../components/Page";
import TitlePage from "../components/TitlePage";

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <>
//       <div className="demoPage" ref={ref}>
//         <Navbar />
//         {/* <h1>Page Header</h1> */}
//         {props.children}
//       </div>
//     </>
//   );
// });

const MyBook = (props) => {
  const { width, height } = useWindowDimensions();
  console.log(height);
  const book = useRef();

  const loadNextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const loadPrevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <>
      <div style={{ backgroundColor: `#000` }} className="">
        <div className="xl:px-48">
          <HTMLFlipBook
            className=""
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            mobileScrollSupport={false}
            useMouseEvents={false}
            ref={book}
          >
            <TitlePage
              title="SUTD Freshmen Orientation 2021"
              tagline="is proud to present"
              theme="Majutsu"
              logo="https://ik.imagekit.io/kxnn3moobg/combined_flat_baFlDzhTd8U.png"
              loadNextPage={loadNextPage}
            ></TitlePage>
            {/* <PageCover /> */}
            <Page
              number="1"
              title="We need your help"
              tagline="- Headmaster of SUTD"
              ref={book}
              isPreface={true}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            ></Page>
            <Page
              number="2"
              title="Manis"
              tagline="Integrity - Courage Over Comfort"
              desc="Founded by Pietro Pangolius, sorcerers sorted into this House are known for their courage to uphold the Truth."
              logo="https://ik.imagekit.io/kxnn3moobg/manis_no_bg_tWdQ2h3dhvP.png"
              ref={book}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            ></Page>
            <Page
              number="3"
              title="Panthera"
              tagline="Creativity - Pierce the Mundane"
              desc="Founded by Panthera Perwira, this House holds the record for developing the most number of revolutionary (and quirky) technology known to sorcerers' kind."
              logo="https://ik.imagekit.io/kxnn3moobg/panthera_no_bg_6Ka_zklOJ.png"
              ref={book}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            ></Page>
            <Page
              number="4"
              title="Gruidae"
              tagline="Leadership - Dream and Inspire"
              desc="Founded by Gita Gade, sorcerers are constantly credited for their strong sense of vision, direction and most of all, ability to empower others."
              logo="https://ik.imagekit.io/kxnn3moobg/gruidae_no_bg_unkhhjRwf.png"
              ref={book}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            ></Page>
            <Page
              number="5"
              title="Leo"
              tagline="Passion - Make the impossible happen"
              desc="Founded by Lionel Lee, legend has it that his greatest fear is having not tried."
              logo="https://ik.imagekit.io/kxnn3moobg/leo_no_bg_dark_text_gu1RXrxDY.png"
              ref={book}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            ></Page>
            <Page
              number="6"
              title="I solemnly swear that I will change the world"
              ref={book}
              loadNextPage={loadNextPage}
              loadPrevPage={loadPrevPage}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "80%",
                  frameborder: 0,
                  border: 0,
                  allowfullscreen: true,
                }}
              ></iframe>
            </Page>
            <Page
              number="7"
              title=""
              ref={book}
              loadPrevPage={loadPrevPage}
            ></Page>
          </HTMLFlipBook>
        </div>
      </div>
    </>
  );
};

export default MyBook;
