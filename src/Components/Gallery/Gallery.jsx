// src/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Breadcrumbs from '../Breadcrumbs';
import i1 from '../../Assets/ashvingami_assets/img1.jpg'
import i2 from '../../Assets/ashvingami_assets/img2.jpg'
import i3 from '../../Assets/ashvingami_assets/img3.jpg'
import i4 from '../../Assets/ashvingami_assets/img4.jpg'
import i5 from '../../Assets/ashvingami_assets/img5.jpg'
import i6 from '../../Assets/ashvingami_assets/img6.jpg'
import i7 from '../../Assets/ashvingami_assets/img7.jpg'
import i8 from '../../Assets/ashvingami_assets/img8.jpg'
import i9 from '../../Assets/ashvingami_assets/Dr.Ashvin-Gami.jpg'
import i10 from '../../Assets/ashvingami_assets/Dr.Asvin-Gami-2.jpg'
import i11 from '../../Assets/ashvingami_assets/TEJS1124.jpg'
import i12 from '../../Assets/ashvingami_assets/giving_lecture.jpg'



const images = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    console.log(index);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className='btm100'>
      <Breadcrumbs title='Photos' />
      <section className='m-top53px'>
        <div className='container'>
          <div className="gallery">
            {images.map((src, index) => (
              <div key={index} className="gallery-item" >
                <LazyLoadImage
                className='lazy'
                onClick={() => openLightbox(index)}
                  effect="blur"
                  src={src}
                  alt={`Gallery ${index}`}
                />
              </div>
            ))}

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
