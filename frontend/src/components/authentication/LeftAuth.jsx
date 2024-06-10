import React from 'react'

const LeftAuth = ({tittle, description, icon}) => {
  return (
    <div>
        <div>{icon}</div>
        <h2 className='font-bold text-[50px] text-primary_color'>
            {tittle}
        </h2>
        <p className='font-normal text-[20px] text-tittle_color mt-2'>
            {description}
        </p>
    </div>
  )
}

export default LeftAuth