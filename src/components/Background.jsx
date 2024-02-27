import React, { useState } from 'react'

const Background = () => {
    const [color, setColor] = useState("olive")
    const handleindigo=()=>{
      setColor("indigo");
    }
    return (
        <>
            <div
                className='w-full h-screen '
                style={{ backgroundColor: color }}>

                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "red" }}
                           onClick={()=>setColor("Red")}>Red
                           
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "green" }}
                           onClick={()=>setColor("green")}>Green
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "pink" }}
                           onClick={()=>setColor("pink")}>Pink
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "lavender" }}
                           onClick={()=>setColor("lavender")}>Lavender
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "orange" }}
                           onClick={()=>setColor("orange")}>Orange
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                           style={{ backgroundColor: "purple" }}
                           onClick={()=>setColor("purple")}>Purple
                        </button>
                        <button 
                          className='outline-none px-4 rounded-full text-white shadow-lg'
                          style={{backgroundColor:"indigo"}}
                          onClick={handleindigo}> Indigo
                      
                        </button>
                        
                    </div>
                </div>
            </div>



        </>
    )
}

export default Background