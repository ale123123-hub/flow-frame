import { Link } from 'react-router-dom';
import './NavBar.css';

const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'Article', path: '/articles' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
];

export const Header = () => {
  return (
    <header className="nav-header">
      <h2 >Food Ninja</h2>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="nav-card">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};