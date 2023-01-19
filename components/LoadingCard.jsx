

const LoadingCard = (props) => {
 
   return (
     <div id={props.id} className="p-4 mx-8 mb-8 flex flex-col bg-white h-64 min-[250px]:w-11/12 max-[640px]:w-11/12 w-11/12 rounded-lg shadow-md md:flex-row md:max-w-xl hover:-translate-y-2 transition duration-200 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-700 justify-self-center">
       <div className="animate-pulse flex space-x-4">
         <div className="rounded-lg bg-slate-600 h-32 w-32"></div>
         <div className="flex-1 space-y-6 py-1">
           <div className="h-4 w-70 bg-slate-600 rounded"></div>
           <div className="space-y-3">
             <div className="grid grid-cols-3 gap-4">
               <div className="h-2 w-60 bg-slate-600 rounded col-span-2"></div>
               {/* <div className="h-2 w-60 bg-slate-600 rounded col-span-1"></div> */}
             </div>
             <div className="h-2 w-60 bg-slate-600 rounded"></div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default LoadingCard;
 