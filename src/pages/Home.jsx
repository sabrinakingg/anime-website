import { Link } from "react-router-dom"
import HeroImage from "../assets/hero.webp";

function Home() {
  return (
    <div className="heroContainer">
      {/* Left Side */}
      <div className="heroLeft">
        <h1>Discover anime on <span>AnimeUp</span></h1>
        <p>Welcome to AnimeUp, discover a world of anime like never before! Explore the latest series, timeless classics, and hidden gems all in one place.</p>
        <Link to="/anime" className="heroBtn">Browse Anime</Link>
      </div>
      {/* Right Side */}
      <div className="heroRight">
        <img src={HeroImage} alt="anime image" />
      </div>
    </div>
  )
}

export default Home