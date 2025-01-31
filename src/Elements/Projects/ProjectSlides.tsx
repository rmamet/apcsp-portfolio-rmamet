import Projects from "./ProjectElem";

const ProjectSlides = () => {
  return (
    <>
      <Projects
        ProjName="Binary Search Project"
        DueDate="Sept. 19th, 2024"
        ActiveLink="https://fleeber.rmamet.xyz"
        GHLink="https://github.com/IACS-CS/binary-search-game-fleeber"
        Image="/fleeber.png"
      >
        This project was made to use and learn binary search, having a limited
        amount of final outcomes, and seeing the maximum needed to get to that
        outcome with sorting. The easiest way of doing so was with a pile of if
        statements, to make logical outcomes from a user's input.
      </Projects>
      <Projects
        ProjName="This Portfolio"
        DueDate="Oct. 17th, 2024"
        ActiveLink="https://rmamet.xyz"
        GHLink="https://github.com/rmamet/apcsp-portfolio-rmamet"
        Image="/portfolio.png"
      >
        The goal for this project is to have a place to introduce myself, and
        show off my projects and experiences. For this project I learned how to
        use fullPage.js to make the slide-style layout of the website.
      </Projects>
      <Projects
        ProjName="Evolution of the Web Project"
        DueDate="Nov. 8th, 2024"
        Image="/evoOfWeb.png"
      >
        This project was to research, and tell our class about something that
        helped evolve the web to be how we know it today. For our group, we
        researched WiFi, and how it works and was invented.
      </Projects>
      <Projects
        ProjName="Turtle Project"
        DueDate="Dec. 3rd, 2024"
        ActiveLink="https://turtle.rmamet.xyz"
        GHLink="https://github.com/IACS-CS/mini-turtle-project-fleeberv2-0"
        Image="/bag.png"
      >
        The goal for this project was to learn the functions and uses of a
        turtle library, along with learning how to make our own functions
        instead of running everything in the main code loop. My group made a bag
        with a `:3` symbol on it.
      </Projects>
      <Projects
        ProjName="MASH Project"
        DueDate="Jan. 7th, 2025"
        ActiveLink="https://mash.rmamet.xyz"
        GHLink="https://github.com/IACS-CS/mash-game-fleeberv3-0"
        Image="/mash.png"
      >
        The goal for this project was to learn how to use ReactJS's useState.
        Although I have already used React for different projects including this
        portfolio, it was a great refresher. My group made the MASH game that
        has pseudo-random results using hashing
      </Projects>
      <Projects
        ProjName="Image Filter Project"
        DueDate="Feb. 6th, 2025"
        ActiveLink="https://filter.rmamet.xyz"
        GHLink="https://github.com/IACS-CS/image-filter-project-fleeberv4-0"
        Closed={true}
        Image="/filter.png"
      >
        For this project, we experimented with image editing. The goal was to
        implement custom image filters by modifying pixel values and learning
        how to manipulate images programmatically. My group made several
        different filters, but made a vignette for the "ultimate challenge".
      </Projects>
    </>
  );
};

export default ProjectSlides;
