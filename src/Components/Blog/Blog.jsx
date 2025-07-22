import React from 'react'
import './BlogPage.css';
import Breadcrumbs from '../Breadcrumbs';
import { v4 as uuidv4 } from 'uuid';
import hypospadiassurgery from '../../Assets/ashvingami_assets/Hypospadias-Surgery.webp'
import urethratreatment from '../../Assets/ashvingami_assets/urethral-stricture.jpg'
import pediatricsurgery from '../../Assets/ashvingami_assets/ped-surgery.png'
import new_invention from '../../Assets/ashvingami_assets/new_invention.jpg'
import postsurgerycare from '../../Assets/ashvingami_assets/Patient-being-prepared-for-surgery-on-operating-table.jpg'
import { Link } from 'react-router-dom'

function Blog() {
    const blogPosts = [
        {
          id: uuidv4(),
          img: hypospadiassurgery,
          title: 'Understanding Hypospadias: Causes and Treatments',
          description: 'Hypospadias is a common congenital condition affecting the urethra. In this blog, Dr. Ashvin Gami explains its causes, diagnosis methods, and the surgical options available for treatment.',
        },
        {
          id: uuidv4(),
          img: urethratreatment,
          title: 'Stricture Urethra Treatment: What You Should Know?',
          description: 'Urethral strictures can lead to painful urination and other complications. Dr. Gami discusses modern techniques for diagnosing and treating urethral stricture with high success rates.',
        },
        {
          id: uuidv4(),
          img: pediatricsurgery,
          title: 'Pediatric Hypospadias Surgery: Why Early Intervention Matters',
          description: 'For parents, understanding the right time for hypospadias surgery in children is crucial. This article outlines the surgical timeline, benefits of early correction, and recovery tips.',
        },
        {
          id: uuidv4(),
          img: postsurgerycare,
          title: 'Post-Surgery Care for Urethral Conditions',
          description: 'After surgery for urethral problems, recovery and hygiene are critical. Learn about post-operative care tips directly from Dr. Ashvin Gami to ensure a smooth healing process.',
        },
        {
          id: uuidv4(),
          img: new_invention,
          title: 'Endourethroplasty (MSTGM) a new invention by Dr Ashvin Gami',
          description: 'Endourethroplasty is endoscopic urethroplasty, where we put skin graft inside urethral defects by endoscopic method.',
        },
      ];
    return (
        <div className='btm100'>
            <Breadcrumbs title='Blog' />
            <section className='m-top53px' data-aos="fade-up">
                <div className='container'>
                    <div className='grid-container'>
                        {
                            blogPosts?.map((product, index) => {
                                return (
                                    <Link key={product.id} className='product-child' to={`/blog/${index + 1}`}>
                                        <img src={product.img} width='100' />
                                        <div style={{padding:'24px'}}>
                                        <h4>{product.title}</h4>
                                        
                                        <p>{`${product.description.slice(0, 58)}...`}</p>
                                        <ul>
                                            <li><a >View Details</a></li>
                                        </ul>
                                        </div>
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

export default Blog
