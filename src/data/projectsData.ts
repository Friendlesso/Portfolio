export interface ProjectItem {
  name: string;
  size: number;
}

export interface ProjectData {
  projectSize: ProjectItem[];
}

export const ProjectItems: ProjectData = {
  
  projectSize: [
    { name: "Hiyori-Dayori", size: 419 },
    { name: "Portfolio", size: 1475 },
    { name: "Suzu-no-Shiori", size: 323 },
    { name: "TickIt", size: 9685 },
  ],
};