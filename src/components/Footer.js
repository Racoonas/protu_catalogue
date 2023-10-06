import social_fb from '../img/social-fb.png'
import social_insta from '../img/social-insta.png'

function Footer(){
    return (
        <>
            <div className="pre_footer"></div>
            <div className="footer">            
                <div className="inner_footer">
                    <div>
                        <span>CONTACT:</span>
                    </div>
                    <div>
                        <span>
                            Kyiv, Ukraine <br/>
                            Email: protuholds@gmail.com
                        </span>
                    </div>
                    <div className="footer_social">
                        <a href="https://www.facebook.com/protuholds"><img src = {social_fb} alt=""/></a>
                        <a href="https://www.instagram.com/protuholds/"><img src = {social_insta} alt=""/></a>
                    </div>
                </div>            
            </div>
        </>
    )
}

export default Footer;
