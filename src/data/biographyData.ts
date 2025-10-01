import profilePicture from '../assets/images/MihailoPicture.jpg'
import locationIcon from '../assets/images/icons/world.svg'

export const bioData = {
  name: 'Mihailo Djurovic',
  picture: profilePicture,
  role: 'Junior web developer',
  location: {
    country: 'Serbia',
    icon: locationIcon
  },
  tags: [
    { label: 'HTML5/CSS3', color: 'bg-[var(--tag-basic)]' },
    { label: 'JavaScript(ES6+)', color: 'bg-[var(--tag-basic)]' },
    { label: 'TypeScript', color: 'bg-[var(--tag-framework)]' },
    { label: 'React', color: 'bg-[var(--tag-framework)]' },
    { label: 'Tailwind CSS', color: 'bg-[var(--tag-framework)]' },
    { label: 'Node.js', color: 'bg-[var(--tag-backend)]' },
    { label: 'MonogDB', color: 'bg-[var(--tag-backend)]' },
    { label: 'Express', color: 'bg-[var(--tag-backend)]' },
    { label: 'Git/Github', color: 'bg-[var(--tag-tools)]' },
  ],
  about: `
    Hi! I’m a 19-year-old self-taught web developer passionate about building modern, user-friendly web applications. I work with HTML, CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Express, and MongoDB, and I’m always eager to learn new technologies and keep up with the latest trends in the tech world.

    I enjoy turning ideas into functional projects and constantly improving my skills to deliver clean, efficient, and scalable code. Learning never stops for me—I love exploring new frameworks, tools, and best practices to stay ahead in this fast-paced industry.

    I’m looking to grow as a developer, contribute to exciting projects, and collaborate with teams that share the same passion for technology.
  `,
  socials: {
    github: 'https://github.com/Friendlesso',
    linkedIn: 'https://www.linkedin.com/in/mihailo-djurovic-2598a8336/',
    Instagram: 'https://www.instagram.com/friendlesso/',
  }
}