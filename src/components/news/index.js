import React, { Component } from 'react'
import newsList from './news-list'

class News extends Component {
  
  render() {
      return (
        <div className="App__news">
          <h1 className="App__title">News today</h1>
          {
            newsList.map((news) => 
              <div key={news.id}>
                <h3 className="App__news-title">{news.title}</h3>
                <p className="App__news-text">{news.text}</p>
              </div>
            )
          }
        </div>
      );
  }
}

export default News;