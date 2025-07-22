import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import './Videos.css'

function Videos() {
    return (
        <div>
            <Breadcrumbs title='Videos' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='iframe-container'>
                         <div>
                            <iframe width="342" height="607" src="https://www.youtube.com/embed/lR5zj7xPy1Q" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe width="342" height="607" src="https://www.youtube.com/embed/_4ha6r-k4Ok" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe width="342" height="607" src="https://www.youtube.com/embed/2wF_DY7EiAc" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Videos
