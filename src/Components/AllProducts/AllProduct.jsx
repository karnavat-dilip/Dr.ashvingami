import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
import type1 from '../../Assets/greenliving/type1cylinder.jpg'
import type2 from '../../Assets/greenliving/type2cylinder.jpg'
import type3 from '../../Assets/greenliving/type3cylinder.jpg'
import type4 from '../../Assets/greenliving/type4cylinder.png'
import Engine_Carbon_Cleaning from '../../Assets/greenliving/web photo 2/2.jpg'
import Car_Detailing from '../../Assets/greenliving/web photo 2/3.jpg'

import { Link } from 'react-router-dom'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

  const products = [
    {
      id: uuidv4(),
      img: type1,
      title: 'Type 1 Cylinder',
      description: 'Made entirely of metal (usually steel or aluminum), Type 1 cylinders are the most traditional and durable. Ideal for industrial applications and cost-effective solutions.'
    },
    {
      id: uuidv4(),
      img: type2,
      title: 'Type 2 Cylinder',
      description: 'Type 2 cylinders feature a metal liner reinforced with glass or carbon fiber wrapping around the hoop. This reduces weight while maintaining strength and is commonly used in automotive and transport.'
    },
    {
      id: uuidv4(),
      img: type3,
      title: 'Type 3 Cylinder',
      description: 'Constructed with a full composite overwrap on an aluminum liner, Type 3 cylinders are much lighter than traditional cylinders and offer excellent gas retention, ideal for fuel storage and portable systems.'
    },
    {
      id: uuidv4(),
      img: type4,
      title: 'Type 4 Cylinder',
      description: 'These cylinders are fully composite with a plastic liner, making them the lightest and most advanced. Type 4 cylinders are perfect for high-performance applications such as CNG vehicles and aerospace.'
    },
    {
      id: uuidv4(),
      img: Engine_Carbon_Cleaning,
      title: 'Engine Carbon Cleaning',
      description: 'Engine Carbon Cleaning helps remove carbon deposits from your engine, improving fuel efficiency, restoring power, and reducing emissions. A cleaner engine means better performance and longer life.'
    },
    {
      id: uuidv4(),
      img: Car_Detailing,
      title: 'Car Detailing (A Car Beauty SPA.)',
      description: 'Car Detailing is a deep-cleaning and restoration service that makes your car look brand new inside and out. From polishing paint to deep interior cleaning, give your vehicle the spa treatment it deserves.'
    }

  ];

  return (
    <div className='btm100'>
      <Breadcrumbs title='All Service' />
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
            {
              products?.map((product, index) => {
                return (
                  <Link key={product.id} className='product-child' to={`/Allservice/${index + 1}`}>
                    <h4>{product.title}</h4>
                    <img src={product.img} width='100' />
                    <h3>Description</h3>
                    <p>{`${product.description.slice(0, 58)}...`}</p>
                    <ul>
                      <li><a >Read More</a></li>
                    </ul>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct