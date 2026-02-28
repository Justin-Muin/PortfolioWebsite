import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProjectCaseStudy from './pages/ProjectCaseStudy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:slug',
    element: <ProjectCaseStudy />,
  },
], { basename: '/PortfolioWebsite' })

export default function App() {
  return <RouterProvider router={router} />
}
