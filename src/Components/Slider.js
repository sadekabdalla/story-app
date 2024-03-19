import one from '../assets/one.jpeg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpeg'
import './Slider.css'
export default function Slider()  {
    return (
        <div className='container mt-5'> 
        <h1 className='text-center text-white p-5'>Welcom back in my Stor</h1>
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={one} className="d-block  im" alt="EC"/>
                </div>
                <div className="carousel-item">
                <img src={two} className="d-block im " alt="EC"/>
                </div>
                <div className="carousel-item">
                <img src={three} className="d-block im" alt="EC"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
)
}

