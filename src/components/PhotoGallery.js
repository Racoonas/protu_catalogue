import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

function PhotoGallery({galleryItems}){   
    return(
        <Gallery withCaption>   
            <div className='photo_gallery_grid'>         
                {
                    galleryItems.map((item, index)=>{      
                        return(
                            <Item className = 'photo_gallery_item'
                                key={index}
                                caption={item.caption}
                                original={item.original}
                                thumbnail={item.thumbnail}
                                width={item.width}
                                height={item.height}
                            >
                                {({ ref, open }) => (
                                    <img 
                                    style={{ cursor: 'pointer' }}
                                    ref={ref} 
                                    onClick={open} 
                                    src={item.original} alt=''/>
                                )}
                            </Item>
                        );                                                                                            
                    })
                }
            </div>            
        </Gallery>
    )
}

export default PhotoGallery;