import React from 'react'

const ContainerWrapper = (component) => {
  return (
    <div className='max-w-[1580px]'>
      {component}
    </div>
  )
}

export default ContainerWrapper
