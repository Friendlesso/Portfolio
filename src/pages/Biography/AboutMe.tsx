import { bioData } from "../../data/biographyData"

export function AboutMe() {
  return(
    <section className="mb-5">
      <p className="text-3xl underline mb-2.5">About me</p>
      <p className="text-lg text-[var(--text-gray)]">{bioData.about}</p>
    </section>
  )
}