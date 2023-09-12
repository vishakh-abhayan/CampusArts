import ParticlesBg from "particles-bg";
import Navbar from "../../layouts/navbar/Navbar";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <Navbar />
            <ParticlesBg type="circle" bg={true} />
            <div className="hero_banner">Artistic Poly</div>
            <div>
                <button className="button-9">know more</button>
            </div>
        </div>
    );
}

export default Hero;
