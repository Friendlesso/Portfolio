import FolderImage from '../assets/images/icons/folder_closed.svg'

export interface TechCategory {
  label: string;
  color: string;
}
export interface ProjectItem {
  name: string;
  size: number;
  headerColor: string;
  description: string;
  learnings: string;
  video: string;
  icon: string;
  features: string[];
  techStack?: TechCategory[];
}

export interface ProjectData {
  project: ProjectItem[];
}

export const ProjectItems: ProjectData = {

  project: [
    {
      name: "TickIt",
      size: 9685,
      headerColor: '--folder-header',
      description: `TickIt is a lightweight and intuitive to-do app designed for effortless task management. With a clean, responsive interface, it allows you to quickly add, complete, and remove tasks — helping you stay organized and focused without unnecessary clutter.`,
      video: '',
      icon: FolderImage,
      learnings: `
        I built this project to learn Tailwind and to get hands-on experience working with Node.js and MongoDB. I also wanted to try solving   real-world problems, like creating a system to manage and organize tasks  efficiently.

         At first, I struggled with transitioning from following tutorials to building something entirely on my own. However, over time, I’ve become faster and more confident at creating projects without relying on step-by-step guides.

        Through this project, I learned a lot about MongoDB, Node.js, and Tailwind, and I gained practical experience in structuring a full-stack application and handling real-world challenges.
      `,
      techStack: [
        { label: 'HTML5/CSS3', color: 'bg-[var(--tag-basic)]' },
        { label: 'JavaScript(ES6+)', color: 'bg-[var(--tag-basic)]' },
        { label: 'Tailwind CSS', color: 'bg-[var(--tag-framework)]' },
        { label: 'Node.js', color: 'bg-[var(--tag-backend)]' },
        { label: 'MonogDB', color: 'bg-[var(--tag-backend)]' },
        { label: 'Express', color: 'bg-[var(--tag-backend)]' },
      ],
      features: [
        "Add Tasks - Quickly create new tasks with a simple input.",

        "Mark as Complete - Keep track of progress by checking off finished tasks.",

        "Remove Tasks - Delete tasks you no longer need.",

        "Mark as Complete - Keep track of progress by checking off finished tasks and see your completion progress as a percentage.",

        "Responsive Design - Optimized for both desktop and mobile use.",

        "Dark Mode – Easily switch between light and dark themes for a comfortable viewing experience.",

        "Fast & Minimal - Lightweight interface with no distractions."
      ]
    },

    {
      name: "Hyori Dyori",
      size: 1475,
      headerColor: '',
      icon: FolderImage,
      techStack: [
        { label: 'HTML5/CSS3', color: 'bg-[var(--tag-basic)]' },
        { label: 'JavaScript(ES6+)', color: 'bg-[var(--tag-basic)]' },
        { label: 'Electron', color: 'bg-[var(--tag-framework)]' },
      ],
      description: 'A personal fan project inspired by Studio Ghibli’s aesthetic, featuring seasonal weather effects and charming characters. Built for personal learning and creative exploration, this project allowed me to experiment with interactive design and animation techniques. (Not affiliated with or endorsed by Studio Ghibli.)',
      features: [
        "Search for any city and instantly see the current temperature.",
        "Option to view the temperature in Celsius or Fahrenheit.",
        "Cozy little animations that bring a warm, playful atmosphere to the app.",
        "Simple, lightweight interface built for everyday use."
      ],
      video: '',
      learnings: 'This was my second project with Electron, and I wanted to build something a little more structured and polished than my first attempt. It was also my first time working with APIs, so I learned how to fetch real-time weather data and integrate it smoothly into the app. Compared to my first Electron project, this one had a clearer structure and took me less time to complete — showing me how much I’d improved in organizing code and planning features. On top of that, I had fun experimenting with small animations to make the app feel cozy and enjoyable, instead of just functional.',
    },

    {
      name: "Suzu-no-Shiori",
      size: 323,
      headerColor: '',
      description: '',
      video: '',
      icon: FolderImage,
      techStack: [
        { label: 'HTML5/CSS3', color: 'bg-[var(--tag-basic)]' },
        { label: 'JavaScript(ES6+)', color: 'bg-[var(--tag-basic)]' },
        { label: 'Electron', color: 'bg-[var(--tag-framework)]' },
      ],
      learnings: `
        This was my very first project built with Electron, so you could call it a bit half-baked. At the time, I was still trying to wrap my head around how Electron works, how to structure the app properly, and what “best practices” even look like in this space. The code isn’t perfect and it’s not the most optimized project I’ve ever written, but I’m proud of it as a milestone.

        Working on it gave me a much clearer picture of how Electron combines web technologies with desktop functionality. I also got to experiment with features like time tracking logic and ambient design touches such as cozy sound effects and a Ghibli-styled interface.

        Even though it’s rough around the edges, this project marks real progress in my journey — it taught me how Electron can be used to build real desktop apps, and it gave me the confidence to take on more ambitious projects later.`,
      features: [
        "Start & Stop Tasks – Click a button to begin a task (records the current time), give it a name, and stop it when you’re done.",
        "Track Duration – Each task shows how long you worked on it.",
        "Task History – View all completed tasks in one place.",
        "Smart Summing – If you repeat the same task multiple times, durations are added together automatically.",
        "Task Management – Delete finished tasks when you no longer need them.",
        "Relaxing Experience – Styled in a cozy, Studio Ghibli–inspired theme (not affiliated), with calming sound effects.",
        "Electron-Powered – A lightweight desktop app you can run locally.",
      ]
    },

    {
      name: "Portfolio",
      size: 419,
      headerColor: '',
      description: '',
      video: '',
      icon: FolderImage,
      learnings: '',
      features: []
    },
  ],
};