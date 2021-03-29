import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';



 const GifExpertApp = () => {

 

 

  const [category, setCategory] = useState(['devilman']);

  

  

  
    return (
      <>
          <h2 >GifExpertApp</h2>
          <hr />  
          
       <AddCategory setCategory={ setCategory }/>
          <ol>
            
            
            {
              category.map( ( category ) => (
              <GifGrid
              key={ category }
              category={ category } 
              />  
              ))
            }
         
       
          </ol> 
         
            
        

        </>
    

    )
  
    
        

      };
export default GifExpertApp
      