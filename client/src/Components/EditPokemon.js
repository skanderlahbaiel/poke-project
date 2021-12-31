import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class EditPokemon extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            Number: "",
            Name: "",
            Type: "",
            imgUrl: "",
  
  
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
  
    numberhandler = (event) => {
        this.setState({
            Number: event.target.value
        })
    }
    namehandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
   typehandler = (event) => {
        this.setState({
            Type: event.target.value
        })
    }
  
    imgurlhandler = (event) => {
        this.setState({
            imgUrl: event.target.value
        })
    }
  
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Edited Successfully !!!!`)
        console.log(this.state);
        this.setState({
            Number: "",
            Name: "",
            Type: '',
            imgUrl: "",
        })
     event.preventDefault()
        
    }
  
  
  
  
    render() {
        return (
            <div>
  
  <form onSubmit={this.handleSubmit}>
                    <h1>Edit your Pokemon!</h1>
                    <label>Number :</label> <input type="text" value={this.state.Number} onChange={this.numberhandler} placeholder="Number..." /><br />
                    <label>Name :</label> <input type="text" value={this.state.Name} onChange={this.namehandler} placeholder="Name..." /><br />
                    <label>Type :</label> <input type="text" value={this.state.Type} onChange={this.typehandler} placeholder="Type..." /><br />
                    <label>imgUrl :</label> <input type="text" value={this.state.imgUrl} onChange={this.imgurlhandler} placeholder="imgUrl..." /><br />
                    <input type="submit" value="Submit" />
                </form>
                <Link  to="/">Home</Link>
            </div>
            
        )
    }
  }
  
  export default EditPokemon