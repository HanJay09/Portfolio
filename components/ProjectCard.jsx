import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div
        className="h-52 rounded-t-xl relative group center center bg-no-repeat"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>

      <div className="text-white">
        <h5 className="font-semibold text-xl mb-2">{title}</h5>
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
