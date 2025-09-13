import { type ProjectItem } from "../../data/projectsData";
interface TechStackProps {
  project: ProjectItem;
}

export function TechStack({project}: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.techStack?.map((tag,index) => (
        <div key={index} className={`px-2 py-1 rounded-sm h-fit w-fit ${tag.color} text-white text-lg`}>{tag.label}</div>
      ))}
    </div>
  )
}