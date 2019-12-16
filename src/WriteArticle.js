import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import {createArticle} from './Store/Actions/articleActions'
import {connect} from 'react-redux'

const style={
    padding: '0px',
    margin: '0px'
}

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color:'white'
    },
    input: {color: 'white'},
    errorInput:{color: 'red'},
    underline: {
        borderBottom: '1px solid white',
        '&:after': {borderBottom: '2px solid white'},
        '&:hover':{borderBottom: '2px solid white'},
        '&:before':{borderBottom: '2px solid white'}
    },
    errorUnderline:{
        borderBottom: '1px solid red',
        '&:after': {borderBottom: '2px solid red'},
        '&:hover':{borderBottom: '2px solid red'},
        '&:before':{borderBottom: '2px solid red'}
    },
});

 

class WriteArticle extends React.Component{

    state={
        aticle:"",title:"",game:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        this.props.createArticle(this.state)
    }

    render(){

        const {classes} = this.props

        return(
            <div>
                <NavBar></NavBar>         
                <div className="home-page">
                    <Container float="center">
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Your New Article</h2>
                                        <div>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Social Media</h2>
                                        <div>
                                            <div>
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="title" label="Title" onChange={this.handleChange}/>
                                            </div>
                                            <div>
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="game" label="Game" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <button className="login-btn glow-on-hover-btn" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="article-form">
                                        <FormControl fullWidth className={classes.margin} variant="outlined">
                                            <InputLabel htmlFor="article">Article</InputLabel>
                                            <OutlinedInput InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="game" label="Game" onChange={this.handleChange} multiline={true} rows={10} rowsMax={10}/>
                                        </FormControl>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </div>
            </div>
        )       
    }
}

const mapDispathchToProps=(dispatch)=>{
    return{
        createArticle:(article)=>dispatch(createArticle(article))
    }
}

export default connect(null, mapDispathchToProps)(withStyles(styles)(WriteArticle))
