import { ProjectType } from "../../pages/Projects";

interface ProjectsDisplayType {
  projects: ProjectType[];
}

const ProjectsDisplay = ({ projects }: ProjectsDisplayType) => {
  return (
    <div className="bg-gray-700 w-2/6 h-full mx-auto border-x-4 border-gray-900">
      {projects.length === 0 ? (
        <div className="flex justify-center py-6 ">
          <p className="text-gray-900 font-semibold">No projects yet</p>
        </div>
      ) : (
        <p>Items</p>
      )}
    </div>
  );
};

export default ProjectsDisplay;
