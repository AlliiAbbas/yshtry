import React, { Component } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Offer from './components/AdidasModels/Offer'


import AdidasProduct from './components/AdidasProduct/AdidasProduct'
import  NotFound  from './components/notFound/NotFound'

import AdidasBlackTshirt from './components/OffersPages/AdidasBlackTshirt'


 class Pages extends Component {

  render(){
  
    return (  
      <div>
        <BrowserRouter>
      <Routes>
         <Route  path="/yshtry" element = {<AdidasProduct />}  >
              <Route path="offer" element= {<Offer />} >
                  <Route path="adidasblacktshirt" element= {<AdidasBlackTshirt />} /> 
              </Route>

          
         </Route>
         <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     
      </div>
    )
  }
 }

export default Pages
