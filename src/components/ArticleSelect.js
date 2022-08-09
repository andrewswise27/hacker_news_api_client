import React from 'react'
import ListItem from './ListItem'

const ArticleSelect = ({news}) => {

  const newsNodes = news.map((newa, index) => {
    return <ListItem key={index} newa={newa}/>
})
  
  return (
    <ul>
      {newsNodes}
    </ul>
  )
}

export default ArticleSelect