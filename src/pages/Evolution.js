//using https://www.npmjs.com/package/react-photoswipe-gallery

import AboutEvolutionImages from "../data/AboutPage_EvolutionImg.json"
import PhotoGallery from "../components/PhotoGallery";

function Evolution(){    
    return <>
        <div className="about_wrapper">
            <div className="breadcrumbs">
                    About/ <a href= "/evolution">Evolution</a>                    
            </div> 
            <div className="about_wording">
                <div className="about_title">
                    <h1>Evolution</h1>
                </div>
                <div className="about_content">
                    <span>
                        Protu&reg; started as a small Art project around 2015. Back then we simply wanted to make nice things that could be bolted to the walls. 
                        Our shapes were mainly toys, which later made their way into the 'Animals' series.
                        Around 2017 we've made decision to use only PU {"("}Poly-Urethane{")"} in our castings. <br/>
                        <br/>
                        Today Protu reg; is a registered trademark having production capabilities with PU pouring machines, degassing stations, post-curing ovens and around 300 shapes in our catalogue.<br/>
                        <br/>
                        We took part in local Climbing Expos and the great <a href = "https://www.vertical-pro.com/information/halls-walls">'Halls And Walls'</a> expo. 
                        Our goods can be found in a big outdoor equipment centers in Kyiv.<br/>
                    </span>
                </div>
            </div>
            <div className="gallery_wrapper">
                <PhotoGallery galleryItems={AboutEvolutionImages}/>
            </div>                       
        </div>        
    </>;
};
  
export default Evolution;