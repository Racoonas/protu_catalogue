//using https://www.npmjs.com/package/react-photoswipe-gallery

import AboutTechnologyImages from "../data/AboutPage_TechnologyImg.json"
import PhotoGallery from "../components/PhotoGallery";
import {Link} from "react-router-dom";

function Technology(){    
    return <>
        <div className="about_wrapper">  
            <div className="breadcrumbs">
                <Link to= "/">Home </Link> 
                / About /
                <Link to= "/technology"> Technology</Link>                     
            </div>                 
            <div className="about_wording">
                <div className="about_title">
                    <h1>Technology</h1>
                </div>
                <div className="about_content">
                    <span>
                        Protu&reg; has full production cycle 'from shape to plastic' under the hood. <br/>
                        For casting we're using machine-poured Poly-Urethane. Same material brands and series which are used in climbing holds production across Europe. <br/>
                        <br/>
                        Importantly - all holds are post-cured with temperature to get the best friction-resistant results.<br/>
                        <br/>
                        Our tools include pouring machine, vacuum chambers, post-curing ovens, grinding machines and variety of specific instruments made for facility service and maintenance. 
                        Majority of our production tools were designed and made by ourselves.<br/>                        
                    </span>            
                </div>
            </div>
            <div className="gallery_wrapper">                                                
                <PhotoGallery galleryItems={AboutTechnologyImages}/>
            </div>                        
        </div>        
    </>;
};
  
export default Technology;