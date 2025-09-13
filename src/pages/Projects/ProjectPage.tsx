import { WindowHeader } from "../../components/WindowHeader";
import { type ProjectItem } from "../../data/projectsData";
import { TechStack } from "./TechStack";

interface ProjectPageProps {
  project: ProjectItem;
  onClose: () => void;
}

export function ProjectPage({ project, onClose }: ProjectPageProps) {
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[80vh] w-fit min-w-[350px] max-w-[950px] ">
      <header className="bg-[var(--folder-header)]">
        <WindowHeader
          label={project.name}
          icon={project.icon}
          bgColor={project.headerColor}
          onClose={onClose}
        />
      </header>
      <section className="bg-[var(--folder-box-color)] h-full dual-border-inner p-5 overflow-y-auto">
        <h1 className="text-3xl">{project.name}</h1>
        <div className="flex items-start">
          <h2 className="whitespace-nowrap">Tech Stack:</h2>
          <TechStack project={project} />
        </div>
        <div>
          <p className="text-lg">{project.description}</p>
        </div>
        <div>
          <h2 className="text-2xl">Features:</h2>
          <p className="text-lg">{project.features}</p>
        </div>
        <div>
          <h2 className="text-2xl">Thought Process & Learnings:</h2>
          <p className="text-lg">{project.learnings}</p>
        </div>
      </section>
    </div>
  );
}