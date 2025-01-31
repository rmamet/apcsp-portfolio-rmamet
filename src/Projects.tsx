import React, { ReactNode } from "react";

interface ProjProps {
  ProjName: string;
  DueDate: string;
  ActiveLink?: string;
  GHLink?: string;
  Closed?: boolean;
  Image: string;
  children: ReactNode | string;
}

const Projects: React.FC<ProjProps> = ({
  ProjName,
  DueDate,
  ActiveLink,
  GHLink,
  Closed,
  Image,
  children,
}) => {
  return (
    <div>
      <span className="flex">
        <h1 className="flex-auto mr-0 text-right">{ProjName}</h1>
        <p className="flex-auto ml-0 text-left">Done on {DueDate}</p>
      </span>

      {(ActiveLink || GHLink) && (
        <h3 className="underline">
          {ActiveLink && (
            <a href={`${ActiveLink}`} target="_blank">
              Try it out!
            </a>
          )}{" "}
          {GHLink && !Closed && (
            <a href={`${GHLink}`} target="_blank">
              (source code)
            </a>
          )}
          {GHLink && Closed && (
            <a href={`${GHLink}`} target="_blank">
              (closed source - APCSP)
            </a>
          )}
        </h3>
      )}
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
