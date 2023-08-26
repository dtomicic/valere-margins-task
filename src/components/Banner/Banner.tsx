import Button from 'react-bootstrap/Button';
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
        <div className="hero-text">
            <h1 className="hero-text-header">Explore your favorite movies</h1>
            <Button variant='primary'>Discover movies</Button>
        </div>
    </div>
  )
}

export default Banner