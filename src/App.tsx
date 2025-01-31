import ReactFullpage from "@fullpage/react-fullpage";
import LicenseInfo from "./Elements/Footer/LicenseInfo";
import Joke from "./Elements/Footer/Joke";
import Contact from "./Elements/Contact";
import Navbar from "./Elements/Navbar";
import ProjectSlides from "./Elements/Projects/ProjectSlides";

const App = () => {
  return (
    <div className="App w-full">
      <Navbar />

      <ReactFullpage
        credits={{ enabled: false }}
        anchors={["front", "about", "projects", "contact", "footer"]}
        recordHistory={false}
        loopTop={false}
        loopBottom={true}
        menu="#menu"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="flex justify-stretch flex-col h-svh">
                <div className="flex-auto"></div>
                <div className="place-content-center flex-auto">
                  <h1>Roee's</h1>
                  <h2>Portfolio</h2>
                </div>
                <div className="flex-auto place-content-center">
                  <p className="text-s text-white animate-fade w-auto">
                    Press Down Arrow or Scroll
                  </p>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="flex flex-col md:flex-row">
                <div className="flex-auto p-8 md:w-16 pt-4 pb-4">
                  <img
                    alt="An image of Roee."
                    src="/Roee.jpg"
                    className="rounded-lg"
                  ></img>
                  <p>Photo Credit: Zohar Mamet</p>
                </div>
                <div className="flex-auto p-8 md:w-16 md:text-left md:p-2 m-auto pt-4 pb-4">
                  <h1>About Me</h1>
                  <p>
                    Hello!! I'm Roee Mamet! I'm an ambitious student learning at
                    Innovation Academy Charter School
                  </p>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="slide" data-anchor="main">
                <h1>Projects</h1>
              </div>
              <ProjectSlides />
            </div>
            <div className="section">
              <h1>Contact</h1>
              <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                Email:{" "}
                <a
                  className="underline"
                  href="mailto:rmamet@rmamet.xyz"
                  target="_blank"
                >
                  rmamet@rmamet.xyz
                </a>
              </p>
              <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                Github:{" "}
                <a
                  rel="noopener noreferrer"
                  className="underline"
                  href="https://github.com/rmamet"
                  target="_blank"
                >
                  https://github.com/rmamet
                </a>
              </p>
              <Contact />
            </div>
            <div className="section">
              <div className="slide" data-anchor="footer">
                <h1>Footer</h1>
                <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                  This is the boring stuff. Continue to the right for
                  attributions, copyright notice, and anything else I might add
                  later
                </p>
              </div>
              <div className="slide" data-anchor="attributions">
                <div>
                  <h1>Attributions</h1>
                  <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                    This portfolio uses fullPage.js which is licensed under{" "}
                    <a
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://github.com/alvarotrigo/fullPage.js/blob/master/LICENSE"
                      target="_blank"
                    >
                      GPLv3
                    </a>
                  </p>
                  <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                    This portfolio uses TailwindCSS which is licensed under the{" "}
                    <a
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://github.com/tailwindlabs/tailwindcss/blob/next/LICENSE"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </p>
                  <br />
                  <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                    If you feel like any content on this site infringes on your
                    copyright, please email{" "}
                    <a className="underline">rmamet [at] rmamet.xyz</a>, and the
                    appropriate action will be taken
                  </p>
                </div>
              </div>
              <div className="slide" data-anchor="CopyrightNotice">
                <h1>Copyright Notice</h1>
                <LicenseInfo />
              </div>
              <div className="slide" data-anchor="joke">
                <Joke />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;
