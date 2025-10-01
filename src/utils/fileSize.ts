import type { ProjectData } from "../data/projectsData";

export function fileSize(data: ProjectData) {
  const totalSizeKb = data.project.reduce((acc,item) => acc + item.size, 0);
  const totalSizeMb = Number(totalSizeKb / 1024).toFixed(1)
  return totalSizeMb.toString();
}
