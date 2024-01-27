import React from 'react'

const ContainerWrapper = (Component,idName) => 
  function HOC() {
  return(
    <div id={idName} className='xl:max-w-[1280px] 2xl:max-w-[1580px] mx-auto'>
      <Component />
    </div>
  )
}


export default ContainerWrapper
