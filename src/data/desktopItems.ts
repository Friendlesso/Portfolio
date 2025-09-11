import biographyImage from '../assets/images/icons/biography.png'
import folderImage from '../assets/images/icons/folder_closed.png'
import ResumeImage from '../assets/images/icons/contact_book.png'
import emailImage from '../assets/images/icons/email.png'
import liveCodeImage from '../assets/images/icons/livecode.png'
import gitHubImage from '../assets/images/icons/github.png'
import gamesImage from '../assets/images/icons/games.png'
import { BiographyWindow } from '../pages/Biography/BiographyWindow'
import { ResumeWindow } from '../pages/ResumeWindow'
import { FolderPage } from '../pages/Projects/ProjectsWindow'
import { GitHubWindow } from '../pages/GitHub/GitHubWindow'
import type { ComponentType } from 'react'
import { EmailWindow } from '../pages/Email/EmailWindow'

interface MenuItem {
  label: string
  icon: string
  headerColor: string
  component: ComponentType<{ item: MenuItem; onClose: () => void }>
}

export const menuItems: MenuItem[] = [
  {
    icon: biographyImage,
    label: 'Biography',
    headerColor: 'bg-[var(--biography-header)]',
    component: BiographyWindow
  },
  {
    icon: folderImage,
    label: 'Folder',
    headerColor: 'bg-[var(--folder-header)]',
    component: FolderPage
  },
  {
    icon: ResumeImage,
    label: 'Resume',
    headerColor: 'bg-[var(--resume-header)]',
    component: ResumeWindow
  },
  {
    icon: emailImage,
    label: 'Email',
    headerColor: 'bg-[var(--email-header)]',
    component: EmailWindow
  },
  {
    icon: liveCodeImage,
    label: 'Live Code',
    headerColor: 'bg-[var(--liveCode-header)]',
    component: ResumeWindow
  },
  {
    icon: gitHubImage,
    label: 'GitHub',
    headerColor: 'bg-[var(--github-header)]',
    component: GitHubWindow
  },
  {
    icon: gamesImage,
    label: 'Games',
    headerColor: 'bg-[var(--games-header)]',
    component: ResumeWindow
  },
]