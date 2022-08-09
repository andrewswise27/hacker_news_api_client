import React, { useState, useEffect} from 'react';
import ArticleSelect from '../components/ArticleSelect';
import ArticleDetail from '../components/ArticleDetail';
import ListItem from '../components/ListItem';

const MainContainer = () => {
    
    const [news, setNews] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
       getStories()
    }, [])


    const getStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const top20 = data.slice(0, 20)
            const stories = top20.map((storyID) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
                .then(res => res.json())
            })
            Promise.all(stories).then((stories) => {
                setNews(stories)
            }
            )
        })
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = news.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(news)
        }

        console.log(searchValue)
    }

    return (
    <div>
        <div>
            <h1>Hacker News</h1>
            <input icon='search'
                placeholder='Search...'
                onChange={(event) => searchItems(event.target.value)}
            />
            <ArticleSelect news={news} />
        </div>
    </div>
  )
}

export default MainContainer;