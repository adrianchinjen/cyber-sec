

const Card = (props) => {
  // justify-between
  // items-center

  const buttonHandler = ()=>{
    console.log(props.title);
    console.log(props.description);
  }

  return (
    <div className="mx-8 mb-8 flex flex-col bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:-translate-y-2 transition duration-200 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 justify-self-center">
        <img className="sm:w-full sm:h-32 md:h-full md:w-64 lg:h-full lg:w-32 xl:w-64 min-[320px]:rounded-t-lg max-[640px]:rounded-t-lg md:rounded-l-lg md:rounded-r-none object-cover" src={props.img} alt="" />
        <div className="flex flex-col  p-4 leading-normal mb-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        </div>
        <div className="relative">
          <div className="absolute top-100 bottom-4 right-5">
            <button type="button" className="w-32 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-red-600 hover:inherit hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={buttonHandler}>{props.buttonTitle}</button>
          </div>
        </div>
    </div>


    // <div classNameName="bg-white rounded overflow-hidden shadow-md mx-4 mb-8">
    //   <img
    //     src={props.img}
    //     alt={props.title}
    //     classNameName="w-full h-32 sm:h-48 object-cover"
    //   />
    //   <div classNameName="m-4">
    //     <p classNameName="font-bold sm:text-lg md:text-xl lg:text-xl ">{props.title}</p>
    //     <p classNameName="sm:text-sm md:text-sm lg:text-base mt-4">{props.description}</p>
    //   </div>
    //   <div>
    //   <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{props.buttonTitle}</button>
    //   </div>
    // </div>
  );
}

export default Card
