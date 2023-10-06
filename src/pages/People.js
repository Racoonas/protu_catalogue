//using https://www.npmjs.com/package/react-photoswipe-gallery

import AboutPeopleImages from "../data/AboutPage_People.json"
import PhotoGallery from "../components/PhotoGallery";

function People(){    
    return <>
        <div className="about_wrapper">
            <div className="breadcrumbs">
                    About/ <a href= "/people">People</a>
            </div>
            <div className="about_wording">
                <div className="about_title">
                    <h1>People</h1>
                </div>
                <div className="about_content">
                    <span>
                        All the value Protu&reg; ever had is people: Shapers, PU-Casting Specialists, Silicone Moulders, Professional Building Engineers, Professional Climbers and Climbing Coaches, 
                        Routesetters and all of the other awesome skilled men.<br/>
                    </span>            
                </div>
            </div>
            <div className="gallery_wrapper">                      
                <PhotoGallery galleryItems={AboutPeopleImages}/>
            </div>            
        </div>        
    </>;
};
  
export default People;