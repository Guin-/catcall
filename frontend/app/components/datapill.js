import React from 'react'

const Datapill = ({tag}) => {
  return (
    <div className='data-pill'> {tag.replace(/_/g, ' ')} </div>
  )
}

export default Datapill;
