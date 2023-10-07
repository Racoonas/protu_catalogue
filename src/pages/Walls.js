//using https://www.npmjs.com/package/react-photoswipe-gallery

import ProjectsHomeWallsImages from "../data/ProjectsPage_HomeWallsImg.json";
import PhotoGallery from "../components/PhotoGallery";
import {Link} from "react-router-dom";

function Walls(){
    return <>
        <div className="about_wrapper">
            <div className="breadcrumbs">
                <Link to= "/">Home </Link>
                / About /
                <Link to= "/walls"> Walls</Link>
            </div>
            <div className="about_wording">
                <div className="about_title">
                    <h1>Climbing Walls building and service</h1>
                </div>
                <div className="about_content">
                    <span>
                        Together with 
                        <a href = "https://www.rockwell.in.ua/"> Rockwell, </a>
                        <a href = "https://www.12climb.com/gyms/">12Climb </a>
                        and other talented building engineers we've produced various home wall projects, walls in daycare centers, schools, opened outdoor playgrounds, marketing areas and even a private zoo. <br/>                        
                    </span>
                </div>
            </div>
            <div className="gallery_wrapper">
                <PhotoGallery galleryItems={ProjectsHomeWallsImages}/>
            </div>             
        </div>         
    </>;
};
  
export default Walls;