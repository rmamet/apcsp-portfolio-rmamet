import ReactFullpage from "@fullpage/react-fullpage";
import LicenseInfo from "./LicenseInfo";
import Projects from "./Projects";
import Joke from "./Joke";

const App = () => {
  return (
    <div className="App">
      <ReactFullpage
        credits={{ enabled: false }}
        navigation={true}
        anchors={["front", "about", "projects", "contact", "footer"]}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>Roee's</h1>
              <h2>Portfolio</h2>
            </div>
            <div className="section">
              <div className="flex flex-col md:flex-row">
                <div className="flex-auto p-8 md:w-16 pt-4 pb-4">
                  <img src="/Roee.jpg" className="rounded-lg"></img>
                </div>
                <div className="flex-auto p-8 md:w-16 md:text-left md:p-2 m-auto pt-4 pb-4">
                  <h1>About Me</h1>
                  <p>
                    Hello!! I'm Roee Mamet! I'm an ambitious student learning at
                    Innovation Acadamy Charter School
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
                  GHLink="https://github.com/IACS-CS/apcsp-portfolio-rmamet"
                  Image="/portfolio.png"
                >
                  The goal for this project is to have a place to introduce
                  myself, and show off my projects and experiences. For this
                  project I learned how to use fullPage.js to make the
                  slide-style layout of the website.
                </Projects>
              </div>
            </div>
            <div className="section">
              <h1>Contact</h1>
              <p>
                Email:{" "}
                <a
                  className="underline"
                  href="mailto:rmamet@rmamet.xyz"
                  target="_blank"
                >
                  rmamet@rmamet.xyz
                </a>
              </p>
              <p>
                Github:{" "}
                <a
                  className="underline"
                  href="https://github.com/rmamet"
                  target="_blank"
                >
                  https://github.com/rmamet
                </a>
              </p>
            </div>
            <div className="section">
              <div className="slide" data-anchor="slide1">
                <h1>Footer</h1>
                <p>
                  This is the boring stuff. Continue to the right for
                  attributions, copyright notice, and anything else I might add
                  later
                </p>
              </div>
              <div className="slide" data-anchor="slide2">
                <div>
                  <h1>Attributions</h1>
                  <p>
                    This portfolio uses fullPage.js which is licensed under{" "}
                    <a
                      className="underline"
                      href="https://github.com/alvarotrigo/fullPage.js/blob/master/LICENSE"
                      target="_blank"
                    >
                      GPLv3
                    </a>
                  </p>
                  <p>
                    This portfolio uses TailwindCSS which is licensed under the{" "}
                    <a
                      className="underline"
                      href="https://github.com/tailwindlabs/tailwindcss/blob/next/LICENSE"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </p>
                  <br />
                  <p>
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
