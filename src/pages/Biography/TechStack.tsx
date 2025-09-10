import { bioData } from "../../data/biographyData"
export function TechStack() {
  return (
    <section>
      <div className="flex flex-wrap gap-2 mb-5">
        {bioData.tags.map((tag, index) => (
          <div key={index} className={` px-2 py-1 rounded-sm h-fit w-fit ${tag.color} text-white text-lg`}>{tag.label}</div>
        ))}
      </div>
    </section>
  )
}