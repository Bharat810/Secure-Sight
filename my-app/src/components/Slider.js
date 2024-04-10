import React,{Component} from "react";
import car1 from '../Images/car1.png';
import car2 from '../Images/car2.png';
import car3 from '../Images/car3.png';
export class Slider extends Component {
    render(){
        return( 
        <>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={car1} className="d-block w-100" alt="car1" width="200px" height="500px"/>
                        </div>
                        <div className="carousel-item">
                            <img src={car2} className="d-block w-100" alt="car2" width="200px" height="500px"/>
                        </div>
                        <div className="carousel-item">
                            <img src={car3} className="d-block w-100" alt="car3" width="200px" height="500px"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </>
        )
    }
}