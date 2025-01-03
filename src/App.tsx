import ReactFullpage from "@fullpage/react-fullpage";
import LicenseInfo from "./LicenseInfo";
import Projects from "./Projects";
import Joke from "./Joke";
import Contact from "./Contact";

const App = () => {
  const navClasses =
    "cursor-pointer flex-auto w-1 inline-block text-black bg-white active:text-white active:bg-slate-700 hover:bg-slate-300 p-2";
  return (
    <div className="App w-full">
      <div
        id="menu"
        className="fixed top-0 left-0 z-50 p-0 m-0 w-full bg-white opacity-85 select-none"
      >
        <ul className="flex justify-center align-middle text-center">
          {[
            { anchor: "front", label: "Front" },
            { anchor: "about", label: "About" },
            { anchor: "projects", label: "Projects" },
            { anchor: "contact", label: "Contact" },
            { anchor: "footer", label: "Footer" },
          ].map((item) => (
            <li
              key={item.anchor}
              data-menuanchor={item.anchor}
              onClick={() => {
                location.href = `#${item.anchor}`;
              }}
              className={navClasses}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <ReactFullpage
        credits={{ enabled: false }}
        // navigation={true}
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
              <div className="slide" data-anchor="slide1">
                <h1>Projects</h1>
              </div>
              <div className="slide" data-anchor="slide2">
                <Projects
                  ProjName="Binary Search"
                  DueDate="Sept. 19th, 2024"
                  ActiveLink="https://fleeber.rmamet.xyz"
                  GHLink="https://github.com/IACS-CS/binary-search-game-fleeber"
                  Image="/fleeber.png"
                >
                  This project was made to use and learn binary search, having a
                  limited amount of final outcomes, and seeing the maximum
                  needed to get to that outcome with sorting. The easiest way of
                  doing so was with a pile of if statements, to make logical
                  outcomes from a user's input.
                </Projects>
              </div>
              <div className="slide" data-anchor="slide3">
                <Projects
                  ProjName="This Portfolio"
                  DueDate="Oct. 17th, 2024"
                  ActiveLink="https://rmamet.xyz"
                  GHLink="https://github.com/rmamet/apcsp-portfolio-rmamet"
                  Image="/portfolio.png"
                >
                  The goal for this project is to have a place to introduce
                  myself, and show off my projects and experiences. For this
                  project I learned how to use fullPage.js to make the
                  slide-style layout of the website.
                </Projects>
              </div>
              <div className="slide" data-anchor="slide4">
                <Projects
                  ProjName="Evolution of the Web Project"
                  DueDate="Nov. 8th, 2024"
                  Image="/evoOfWeb.png"
                >
                  This project was to research, and tell our class about
                  something that helped evolve the web to be how we know it
                  today. For our group, we researched WiFi, and how it works and
                  was invented.
                </Projects>
              </div>
              <div className="slide" data-anchor="slide5">
                <Projects
                  ProjName="Turtle Project"
                  DueDate="Dec. 3rd, 2024"
                  ActiveLink="https://turtle.rmamet.xyz"
                  GHLink="https://github.com/IACS-CS/mini-turtle-project-fleeberv2-0"
                  Image="/bag.png"
                >
                  The goal for this project was to learn the functions and uses
                  of a turtle library, along with learning how to make our own
                  functions instead of running everything in the main code loop.
                  My group made a bag with a `:3` symbol on it.
                </Projects>
              </div>
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
              <div className="slide" data-anchor="slide1">
                <h1>Footer</h1>
                <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
                  This is the boring stuff. Continue to the right for
                  attributions, copyright notice, and anything else I might add
                  later
                </p>
              </div>
              <div className="slide" data-anchor="slide2">
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
              <div className="slide" data-anchor="slide3">
                <h1>Copyright Notice</h1>
                <LicenseInfo />
              </div>
              <div className="slide" data-anchor="slide4">
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
