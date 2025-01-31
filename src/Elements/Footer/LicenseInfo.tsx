import React from "react";

const LicenseInfo: React.FC = () => {
  return (
    <div className="content-center">
      <p
        {...{
          "xmlns:cc": "http://creativecommons.org/ns#",
          "xmlns:dct": "http://purl.org/dc/terms/",
        }}
      >
        <a
          property="dct:title"
          rel="cc:attributionURL"
          href="https://rmamet.xyz"
        >
          Roee's Portfolio{" "}
        </a>
        by{" "}
        <a
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          href="https://rmamet.xyz"
        >
          Roee Mamet{" "}
        </a>
        is licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International
        </a>
      </p>
      <div className="flex space-x-4 justify-center p-2">
        <img
          style={{
            height: "22px",
            marginLeft: "3px",
            verticalAlign: "text-bottom",
          }}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt="Creative Commons"
        />
        <img
          style={{
            height: "22px",
            marginLeft: "3px",
            verticalAlign: "text-bottom",
          }}
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          alt="By"
        />
        <img
          style={{
            height: "22px",
            marginLeft: "3px",
            verticalAlign: "text-bottom",
          }}
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
          alt="NonCommercial"
        />
        <img
          style={{
            height: "22px",
            marginLeft: "3px",
            verticalAlign: "text-bottom",
          }}
          src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
          alt="ShareAlike"
        />
      </div>
    </div>
  );
};

export default LicenseInfo;
