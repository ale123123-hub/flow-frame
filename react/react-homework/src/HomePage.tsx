
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';


export const HomePage = () => {
  return (
    <Container>
      <header>
        <h2>Food Ninja</h2>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/articles">Article</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
 
  )
  
}
