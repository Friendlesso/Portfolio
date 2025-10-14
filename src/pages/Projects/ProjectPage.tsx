import { WindowHeader } from "../../components/WindowHeader";
import { type ProjectItem } from "../../data/projectsData";
import { useMaximizable } from "../../hooks/useMaximizable";
import { TechStack } from "./TechStack";

interface ProjectPageProps {
  project: ProjectItem;
  onClose: () => void;
}

export function ProjectPage({ project, onClose }: ProjectPageProps) {

  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
      ${isMaximized ? "h-[100dvh] w-[100vw] pb-[3.5rem]" : "h-[80vh] w-fit min-w-[700px] max-w-[950px]"}
    `}>
      <header className="bg-[var(--folder-header)]">
        <WindowHeader
          label={project.name}
          icon={project.icon}
          bgColor={project.headerColor}
          onClose={onClose}
          isMaximized={isMaximized}
          onMaximize={toggleMaximized}
          disableMaximize={isSmallScreen}
        />
      </header>
      <section className="bg-[var(--folder-box-color)] h-full dual-border-inner p-5 overflow-y-auto">
        <h1 className="text-3xl">{project.name}</h1>
        <div className={`flex  items-center my-2 ${isSmallScreen ? "flex-col flex-wrap " : ""}`}>
          <h2 className={`flex whitespace-nowrap text-2xl mr-2 ${isSmallScreen ? "text-left w-full" : ""}`}>Tech Stack:</h2>
          <TechStack project={project} />
        </div>
        <div>
          <p className="text-xl">{project.description}</p>
        </div>
        <div className=" my-1">
          <h2 className="text-2xl">Features:</h2>
          <ul className="pl-4">
            {project.features.map((feat, i) => (
              <li key={i} className="text-xl list-disc">{feat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Thought Process & Learnings:</h2>
          <p className="text-xl">{project.learnings}</p>
        </div>
      </section>
    </div>
  );
}