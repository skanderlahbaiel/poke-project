import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class AddNewPokemon extends Component {
  constructor(props) {
      super(props)

      this.state = {
          Number: "",
         

      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  Numberhandler = (event) => {
      this.setState({
          Number: event.target.value
      })
  }
  
 

 
  handleSubmit = (event) => {
      alert(`${this.state.firstName} ${this.state.lastName}  Added Successfully !!!!`)
      console.log(this.state);
      this.setState({
          Number: "",
         
      })
   event.preventDefault()
      
  }




  render() {
      return (
          <div>

              <form onSubmit={this.handleSubmit}>
                  <h1>Add your Pokemon!</h1>
                  <label>Number to delete :</label> <input type="text" value={this.state.Number} onChange={this.Numberhandler} placeholder="Number of the Pokemon" /><br />
                 
                  <input type="submit" value="Delete" />
              </form>
              <Link  to="/">Home</Link>
          </div>
          
      )
  }
}

export default AddNewPokemon
