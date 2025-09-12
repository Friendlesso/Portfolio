import FolderImage from '../assets/images/icons/folder_closed.png'

export interface ProjectFeatures {
  description: string;
}
export interface ProjectItem {
  name: string;
  size: number;
  description: string;
  learnings: string;
  video: string;
  icon: string;
  features?: ProjectFeatures[];
}

export interface ProjectData {
  project: ProjectItem[];
}

export const ProjectItems: ProjectData = {

  project: [
    {
      name: "TickIt",
      size: 9685,
      description: `TickIt is a lightweight and intuitive to-do app designed for effortless task management. With a clean, responsive interface, it allows you to quickly add, complete, and remove tasks — helping you stay organized and focused without unnecessary clutter.`,
      video: '',
      icon: FolderImage,
      learnings: `
        I built this project to learn Tailwind and to get hands-on        experience working with Node.js and MongoDB. I also wanted to try solving   real-world problems, like creating a system to manage and organize tasks  efficiently.

         At first, I struggled with transitioning from following tutorials to building something entirely on my own. However, over time, I’ve become faster and more confident at creating projects without relying on step-by-step guides.

        Through this project, I learned a lot about MongoDB, Node.js, and Tailwind, and I gained practical experience in structuring a full-stack application and handling real-world challenges.
      `,
      features: [{
        description: `
          Add Tasks - Quickly create new tasks with a simple input.

          Mark as Complete - Keep track of progress by checking off finished tasks.

          Remove Tasks - Delete tasks you no longer need.

          Mark as Complete - Keep track of progress by checking off finished tasks and see your completion progress as a percentage.

          Responsive Design - Optimized for both desktop and mobile use.

          Dark Mode – Easily switch between light and dark themes for a comfortable viewing experience.

          Fast & Minimal - Lightweight interface with no distractions.`
      }]
    },

    {
      name: "Portfolio",
      size: 1475,
      description: '',
      video: '',
      icon: FolderImage,
      learnings: '',
      features: [{
        description: 'something'
      }]
    },

    {
      name: "Suzu-no-Shiori",
      size: 323,
      description: '',
      video: '',
      icon: FolderImage,
      learnings: '',
      features: [{
        description: 'something'
      }]
    },

    {
      name: "HyoriDyori",
      size: 419,
      description: '',
      video: '',
      icon: FolderImage,
      learnings: '',
      features: [{
        description: 'something'
      }]
    },
  ],
};