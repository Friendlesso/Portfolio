import { WindowHeader } from "../../components/WindowHeader";
import { type ProjectItem } from "../../data/projectsData";

interface ProjectPageProps {
  project: ProjectItem;
  onClose: () => void;
}

export function ProjectPage({ project, onClose }: ProjectPageProps) {
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[70vh] w-fit min-w-[550px] max-w-[950px]">
      <WindowHeader
        label={project.name}
        icon={project.icon}
        bgColor="#0047ab"
        onClose={onClose}
      />

      <div className="p-4 text-sm text-white overflow-y-auto">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-xs text-gray-300 mb-3">
          Size: {project.size} KB
        </p>

        {project.description && (
          <div className="mb-4">
            <h3 className="font-semibold">Description:</h3>
            <p className="whitespace-pre-line">{project.description}</p>
          </div>
        )}

        {project.learnings && (
          <div className="mb-4">
            <h3 className="font-semibold">What I Learned:</h3>
            <p className="whitespace-pre-line">{project.learnings}</p>
          </div>
        )}

        {project.features && (
          <div className="mb-4">
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside">
              {project.features.map((feat, i) => (
                <li key={i} className="whitespace-pre-line">
                  {feat.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.video && (
          <div>
            <h3 className="font-semibold">Demo:</h3>
            <video controls className="w-full mt-2">
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}