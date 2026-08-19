import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
// import { ArticlePage } from './ArticlePage';
// import { ContactPage } from './ContactPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/article" element={<ArticlePage />} /> */}
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;