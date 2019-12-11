import React from 'react'

class ArticleSquare extends React.Component{

    render(){
        return(
            <div className="article-square glow-on-hover">
            <div>
                <h2>{this.props.square.title}</h2>
                <p>{this.props.square.game}</p>
            </div>   
            <div className="author-square-data">
                <p>{this.props.square.author}</p>
                <p>{this.props.square.date}</p>
            </div> 
        </div>
        )
    }
}

export default ArticleSquare