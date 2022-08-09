import React from 'react'

const ListItem = ({newa}) => {
  
  

  return (
    <a href={newa.url}><li>{newa.title}</li></a>
  )
}

export default ListItem