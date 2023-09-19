import React, {useEffect} from 'react'

const Cards = () => {
    useEffect(() => {
        console.log("card component create");
    
        return () => {
          console.log("component unmount");
        };
      }, []);
    
      return (
        <>
        <div className='text-center mb-5'>
          <h1>CARDS</h1>
        </div>
        </>
      );
};

export default Cards
