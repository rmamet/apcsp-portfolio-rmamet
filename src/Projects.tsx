import React, { ReactNode } from "react";

interface ProjProps {
  ProjName: string;
  DueDate: string;
  ActiveLink: string;
  GHLink: string;
  Image: string;
  children: ReactNode | string;
}

const Projects: React.FC<ProjProps> = ({
  ProjName,
  DueDate,
  ActiveLink,
  GHLink,
  Image,
  children,
}) => {
  return (
    <div>
      <span className="flex">
        <h1 className="flex-auto mr-0 text-right">{ProjName}</h1>
        <p className="flex-auto ml-0 text-left">Done on {DueDate}</p>
      </span>
      <h3 className="underline">
        <a href={`${ActiveLink}`} target="_blank">
          Try it out!
        </a>{" "}
        <a href={`${GHLink}`} target="_blank">
          (source code)
        </a>
      </h3>
      <img
        className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto"
        src={`${Image}`}
      ></img>
      <p className="w-full md:w-1/2 h-auto pl-2 pr-2 ml-auto mr-auto">
        {children}
      </p>
    </div>
  );
};

export default Projects;
