import { bioData } from "../../data/biodata"
export function Profile(){
  return(
    <section>
      <div>
        <img src={bioData.picture} alt="" />
      </div>
        <p className="text-4xl">{bioData.name}</p>
        <div className="flex justify-between">
          <p className="text-3xl">{bioData.role}</p>
          <div className="flex items-center">
            <p className="text-xl">{bioData.location.country}</p>
            <img className="w-4 h-4" src={bioData.location.icon} />
          </div>
        </div>
    </section>
  )
}