import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Governance from './pages/Governance';
import Membership from './pages/Membership';
import Competitions from './pages/Competitions';
import Integrity from './pages/Integrity';
import Dispute from './pages/Dispute';
import Media from './pages/Media';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/membership-athletes" element={<Membership />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/integrity" element={<Integrity />} />
          <Route path="/dispute" element={<Dispute />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
