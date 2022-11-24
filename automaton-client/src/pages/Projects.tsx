import React, { useState } from "react";
import CreateProject from "../components/projects/CreateProject";

interface ProjectType {
  pid: string;
  lastAccess: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  return (
    <div className="flex flex-col">
      <div className="py-3" />
      <div className="flex flex-row bg-gray-800 m-auto md:w-11/12 md:h-80 rounded-2xl border-gray-900 border-solid border-4">
        <CreateProject />
        <div className="bg-gray-700 w-2/6 h-full mx-auto border-x-4 border-gray-900" />
      </div>
    </div>
  );
};

export default Projects;
