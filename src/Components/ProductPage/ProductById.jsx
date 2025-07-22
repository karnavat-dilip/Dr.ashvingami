import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
import type1 from '../../Assets/greenliving/type1cylinder.jpg'
import type2 from '../../Assets/greenliving/type2cylinder.jpg'
import type3 from '../../Assets/greenliving/type3cylinder.jpg'
import type4 from '../../Assets/greenliving/type4cylinder.png'
import Engine_Carbon_Cleaning from '../../Assets/greenliving/web photo 2/2.jpg'
import Car_Detailing from '../../Assets/greenliving/web photo 2/3.jpg'
import { Link, useParams } from 'react-router-dom';
import hypospadiassurgery from '../../Assets/ashvingami_assets/Hypospadias-Surgery.webp'
import urethratreatment from '../../Assets/ashvingami_assets/urethral-stricture.jpg'
import pediatricsurgery from '../../Assets/ashvingami_assets/ped-surgery.png'
import new_invention from '../../Assets/ashvingami_assets/new_invention.jpg'
import postsurgerycare from '../../Assets/ashvingami_assets/Patient-being-prepared-for-surgery-on-operating-table.jpg'
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    AOS.init()
  }, [])

  const blogPosts = [
    {
      id: 1,
      img: hypospadiassurgery,
      title: 'Understanding Hypospadias: Causes and Treatments',
      description: 'Hypospadias is a common congenital condition affecting the urethra. In this blog, Dr. Ashvin Gami explains its causes, diagnosis methods, and the surgical options available for treatment.',
      longContent: `
Hypospadias is a congenital condition where the urinary opening is not at the usual location at the tip of the penis. It affects both function and appearance and is typically diagnosed in infancy.

Symptoms
- Urine stream pointing downward
- Curved penis (chordee)
- Incomplete foreskin
- Abnormal appearance of the penis

Causes
The exact cause of hypospadias is not always known. It may be linked to genetics, hormone imbalances during pregnancy, or environmental exposures.

Conclusion
Hypospadias is treatable with surgery, ideally between 6 to 18 months of age. Dr. Ashvin Gami specializes in precision surgical correction, restoring both urinary and cosmetic function with minimal scarring and high success rates.
`
    },
    {
      id: 2,
      img: urethratreatment,
      title: 'Stricture Urethra Treatment: What You Should Know',
      description: 'Urethral strictures can lead to painful urination and other complications. Dr. Gami discusses modern techniques for diagnosing and treating urethral stricture with high success rates.',
      longContent: `
Urethral stricture is a narrowing of the urethra due to scar tissue, often caused by infection, trauma, or surgery. It can seriously impact quality of life if left untreated.

Symptoms
- Weak urine stream
- Straining to urinate
- Urinary retention or infections
- Pain during urination
- Blood in urine

Causes
Common causes include past catheterization, pelvic injury, sexually transmitted infections, or inflammation from prior surgeries.

Conclusion
Dr. Ashvin Gami uses modern, minimally invasive techniques like endoscopic urethrotomy and staged urethroplasty to treat strictures. Early diagnosis and the right approach ensure long-term relief and better urinary health.
`
    },
    {
      id: 3,
      img: pediatricsurgery,
      title: 'Pediatric Hypospadias Surgery: Why Early Intervention Matters',
      description: 'For parents, understanding the right time for hypospadias surgery in children is crucial. This article outlines the surgical timeline, benefits of early correction, and recovery tips.',
      longContent: `
For children born with hypospadias, early treatment is important not just for physical correction but also for psychological development and functional improvement.

Symptoms
- Abnormal urine direction
- Penile curvature (chordee)
- Underdeveloped foreskin
- Difficulty in toilet training

Causes
Most cases are congenital and may be due to genetic factors or hormonal changes during fetal development.

Conclusion
Surgical correction during infancy or toddler age is ideal for the best functional and cosmetic outcomes. Dr. Ashvin Gami is experienced in pediatric hypospadias surgery and focuses on compassionate care for children and parents alike.
`
    },
    {
      id: 4,
      img: postsurgerycare,
      title: 'Post-Surgery Care for Urethral Conditions',
      description: 'After surgery for urethral problems, recovery and hygiene are critical. Learn about post-operative care tips directly from Dr. Ashvin Gami to ensure a smooth healing process.',
      longContent: `
Recovery after urological surgery is essential to avoid complications and support healing. Post-operative care plays a vital role in the success of the treatment.

Symptoms to Monitor
- Swelling or redness near the surgery site
- Pain or discomfort during urination
- Fever or signs of infection
- Blood in urine (temporary but should be monitored)

Post-Op Care Tips
- Maintain hygiene around the surgical area
- Ensure catheter care if used
- Stay hydrated
- Avoid strenuous activities until cleared by the doctor

Conclusion
With proper post-surgery care, most patients recover smoothly. Dr. Ashvin Gami and his team provide comprehensive instructions and follow-up to ensure a smooth healing journey.
`
    },
    {
      id: 5,
      img: new_invention,
      title: 'Endourethroplasty (MSTGM) a new invention by Dr Ashvin Gami ',
      description: 'Endourethroplasty is endoscopic urethroplasty, where we put skin graft inside urethral defects by endoscopic method.',
      longContent: `Which till now done by open surgery. 
Endourethroplasty – a revolutionary, scar-free solution for urethral strictures. 
Minimally invasive
Long term cure for urethral stricture 

Developed by Dr. Gami after years of research 
After surgery patient will not complain of post void drilling and ejeculation problems which are common with open Urethroplasty. 

`
    }
  ];
  useEffect(() => {

    const foundProduct = blogPosts.find(item => item.id === productId);
    setProduct(foundProduct);
  }, [productId]);


  const { title, img, description, longContent } = product || {};

  return (
    <>
      <div className='btm100'>
        <Breadcrumbs title={title} />
        <section className='m-top53px'>
          <div>
            <div>
              {product ? (
                <div>
                  <div className='img-magnify container'>
                    <div className='border1px'>
                      <ReactImageMagnify {...{
                        smallImage: {
                          alt: 'Wristwatch by Ted Baker London',
                          isFluidWidth: true,
                          src: img,

                        },
                        largeImage: {
                          src: img,
                          width: 800,
                          height: 800
                        },
                        enlargedImagePosition: 'over',
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                      }} />
                    </div>
                    <div className='description' data-aos="fade-up">
                      <h2>{title}</h2>

                      <p>{description}</p>
                      <p>{longContent}</p>

                    </div>
                  </div>

                </div>
              ) : (
                <p>Product not found</p>
              )}
            </div>
          </div>
        </section>
        <section className='m-top53px'>

        </section>
      </div>
    </>
  )
}

export default ProductById
