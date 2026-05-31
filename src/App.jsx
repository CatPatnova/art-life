import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Authors from './pages/Authors'
import AuthorPost from './pages/Author-Post'
import Magazine from './pages/Magazine'
import MagazinePost from './pages/Magazine-Post'
import Podcasts from './pages/Podcasts'
import PodcastPost from './pages/Podcast-Post'
import { Layout } from './Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Frontpage />} />
          <Route path="/Authors" element={<Authors />} />
          <Route path="/Authors/Post" element={<AuthorPost />} />
          <Route path="/Magazines" element={<Magazine />} />
          <Route path="/Magazines/Post" element={<MagazinePost />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/Podcasts/Post" element={<PodcastPost />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
