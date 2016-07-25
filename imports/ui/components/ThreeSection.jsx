 import React, { PropTypes } from 'react'

 const ThreeSection = (props) => {
   return (
     <div className="container">
       <div className="section">
         <div className="row">
           <div className="col s12 m4 ">
             <div className="icon-block center promo">
               <h2 className="center"><i className="material-icons green-text">perm_identity</i></h2>
               <h5 className="center green-text">¿Quiénes somos?</h5>
               <p className="light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
             </div>
           </div>
           <div className="col s12 m4">
             <div className="icon-block">
               <h2 className="center"><i className="material-icons green-text">library_books</i></h2>
               <h5 className="center green-text">Principios</h5>

               <p className="light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
             </div>
           </div>
           <div className="col s12 m4">
             <div className="icon-block">
               <h2 className="center"><i className="material-icons green-text">info_outline</i></h2>
                 <h5 className="center green-text">Proyectos</h5>

               <p className="light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   )
 }

 export default ThreeSection
