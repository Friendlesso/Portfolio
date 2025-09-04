import { bioData } from "../../data/biodata"

export function AboutMe() {
  return(
    <section>
      <p className="text-3xl underline">About me</p>
      <p className="text-lg text-[var(--text-gray)]">{bioData.about}</p>
    </section>
  )
}