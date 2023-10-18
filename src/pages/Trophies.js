//using https://www.npmjs.com/package/react-photoswipe-gallery
import ProjectsTrophiesImages from "../data/ProjectsPage_TrophiesImg.json";
import PhotoGallery from "../components/PhotoGallery";
import {Link} from "react-router-dom";

function Trophies(){
    return <>
        <div className="about_wrapper">
            <div className="breadcrumbs">
                <Link to= "/">Home </Link>
                / Projects /
                <Link to= "/trophies"> Trophies</Link>
            </div> 
            <div className="about_wording">
                <div className="about_title">
                    <h1>Trophies</h1>
                </div>
                <div className="about_content">
                    <span>
                        Bringing more joy to climbers. <br/>
                        We've produced medals and trophies for 
                        <a href = 'https://www.facebook.com/events/1467072933693384/'> End Of Season 2021</a>, 
                        <a href = 'https://www.facebook.com/events'> Indie Go!</a>, 
                        <a href = 'https://www.facebook.com/climbingjam.org'> Junior Climbing Jam</a>,                         
                         and other local competitions and festivals. <br/>                        
                    </span>
                </div>
            </div>
            <div className="gallery_wrapper">
                <PhotoGallery galleryItems={ProjectsTrophiesImages}/>
            </div>
        </div>        
    </>;
};
  
export default Trophies;