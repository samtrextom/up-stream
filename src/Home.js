import React from 'react'
import ArticleSquare from './ArticleSquare.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import tempData from './tempArticleData'
import NavBar from './NavBarComponents/NavBar'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'

const style={
    padding: '0px',
    margin: '0px'
}

const squares = tempData.map(square=> <ArticleSquare key = {square.id} square ={square}/>)

class Home extends React.Component{

    render(){

        return(
            <div>
                <NavBar></NavBar>         
                <div className="home-page">
                    <Container float="center">
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[0].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[1].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[2].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[3].props.square}></ArticleSquare>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[4].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[5].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[6].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[7].props.square}></ArticleSquare>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[8].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[9].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[10].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[11].props.square}></ArticleSquare>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[12].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[13].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[14].props.square}></ArticleSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <ArticleSquare square={squares[15].props.square}></ArticleSquare>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )       
    }
}

const mapStateToProps=(state)=>{

    console.log(state)
    return {
        articles: state.firestore.ordered.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(Home)


