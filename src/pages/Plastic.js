//using https://www.npmjs.com/package/react-photoswipe-gallery

import ProjectsHoldsImages from "../data/ProjectsPage_HoldsImg.json";
import PhotoGallery from "../components/PhotoGallery";

function Plastic(){
    return <>        
        <div className="about_wrapper">
            <div className="breadcrumbs">
                    Projects/ <a href= "/plastic">Plastic</a>                    
            </div>    
            <div className="about_wording">
                <div className="about_title">
                    <h1>Holds, of course</h1>
                </div>
                <div className="about_content">
                    <span>
                        We're about holds.<br/>
                        <br/>
                        Our goods went to Climbing Halls across the country and abroad: 
                        <a href="https://www.blockhaus-freiburg.de"> BlockHaus</a>, 
                        <a href="https://www.climbingspace.com.ua"> Climbing Space</a>, 
                        <a href = "https://the-wall.com.ua"> The Wall</a>, 
                        <a href= "https://up-climbing.com.ua/"> Up! </a>
                        and a number of other smaller GYMs and private home walls.<br/> 
                        <br/> 
                        Latest and greatest project - operating as a main supplier for a large Climbing Hall in Kyiv. Over 2020-2022 Protu&reg; shipped thousands of holds and dozens of Plywood volumes for <a href="https://hyperion.kiev.ua">Hyperion Climbing GYM</a> as a part of their great renewal program.<br/>
                    </span>
                </div>
            </div>
            <div className="gallery_wrapper">                                                
                <PhotoGallery galleryItems={ProjectsHoldsImages}/>
            </div>                       
        </div>         
    </>;
};
  
export default Plastic;