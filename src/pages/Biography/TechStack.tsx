import { bioData } from "../../data/biographyData"
export function TechStack() {
  return (
    <section className="flex w-full">
      <div className="flex flex-wrap gap-2 mb-5">
        {bioData.tags.map((tag, index) => (
          <div key={index} className={`techStack px-2 py-1 rounded-sm h-fit w-fit ${tag.color} text-white text-lg `}>{tag.label}</div>
        ))}
      </div>
    </section>
  )
}