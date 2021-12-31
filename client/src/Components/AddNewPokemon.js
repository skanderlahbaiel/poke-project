import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class AddNewPokemon extends Component {
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

  Numberhandler = (event) => {
      this.setState({
          Number: event.target.value
      })
  }
  Namehandler = (event) => {
      this.setState({
          Name: event.target.value
      })
  }
  Typehandler = (event) => {
      this.setState({
          Type: event.target.value
      })
  }

  imgUrlhandler = (event) => {
      this.setState({
          imgUrl: event.target.value
      })
  }

  handleSubmit = (event) => {
      alert(`${this.state.firstName} ${this.state.lastName}  Added Successfully !!!!`)
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
                  <h1>Add your Pokemon!</h1>
                  <label>Number :</label> <input type="text" value={this.state.Number} onChange={this.Numberhandler} placeholder="Number..." /><br />
                  <label>Name :</label> <input type="text" value={this.state.Name} onChange={this.Namehandler} placeholder="Name..." /><br />
                  <label>Type :</label> <input type="text" value={this.state.Type} onChange={this.Typehandler} placeholder="Type..." /><br />
                  <label>imgUrl :</label> <input type="text" value={this.state.imgUrl} onChange={this.imgUrlhandler} placeholder="imgUrl..." /><br />
                  <input type="submit" value="Submit" />
              </form>
              <Link  to="/">Home</Link>
          </div>
          
      )
  }
}

export default AddNewPokemon




