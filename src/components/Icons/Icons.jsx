import React from 'react'

const Icons = ({color,children}) => {
  return (
    <div style={{ background:color }} className='StyledIcons' background={color}>
    {children}
    </div>
  )
}

export default Icons