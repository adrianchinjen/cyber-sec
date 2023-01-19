import React from "react";

const Grid = (props) => {
   return(
      <div className="bg-slate-600">
         <div className="container" style={{"margin": "auto"}}>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-8 pt-8 content-center">
               {props.children}
            </div>
         </div>
      </div>      
   )
};

export default Grid;
