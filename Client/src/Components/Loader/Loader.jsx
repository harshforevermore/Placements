import React from 'react';

const Loader = () => {
  return (
    <div className='loader-container z-[999] fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center gap-2 bg-gray-200/60 backdrop-blur-xs transition-all duration-200 ease-in-out'>
        <div id='loader-dot-1' className='w-5 h-5 rounded-full bg-[#ff5b5b] shadow-[0_0_3px_gray]'></div>
        <div id='loader-dot-2' className='w-5 h-5 rounded-full bg-[#ff5b5b] shadow-[0_0_3px_gray]'></div>
        <div id='loader-dot-3' className='w-5 h-5 rounded-full bg-[#ff5b5b] shadow-[0_0_3px_gray]'></div>
        <div id='loader-dot-4' className='w-5 h-5 rounded-full bg-[#ff5b5b] shadow-[0_0_3px_gray]'></div>
    </div>
  )
}

export default Loader;