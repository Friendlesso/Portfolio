import { bioData } from "../../data/biodata"
export function TechStack() {
  return (
    <section>
      <div className="flex flex-wrap gap-2">
        {bioData.tags.map((tag) => (
          <div className={` px-2 py-1 rounded-sm h-fit w-fit ${tag.color} text-white text-lg`}>{tag.label}</div>
        ))}
      </div>
    </section>
  )
}