import React from 'react'
import '/dist/output.css'

const GifGridItem = ({title,url,id}) => {
  return (
    <div>
      <div className='p-3 m-3 group'>
        <img className='group-hover:shadow group-hover:shadow-red-900' src={url} alt={title} />
        <h3 className='font-light capitalize'>{title}</h3>
      </div>
    </div>
  )
}

export default GifGridItem
