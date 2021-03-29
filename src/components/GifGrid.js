import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

 
    const { data:images,loading } = useFetchGifs( category );

    

    // useEffect(() => {
    //     getGift( category )
    //     .then(setImages)
    // }, [ category ])

    
    return (
        <>
            <h3 className="animate__animate animate__fadeIn"> {category} </h3>

            
            <div className="card-grid">

                { loading && <p className="animate__animate animate__flash">loading</p> }


                {
                    images.map( img => (

                        <GifGridItem

                            key={img.id}

                            {...img}

                        />
                    ))

                }


            </div>
        </>

    )
}
