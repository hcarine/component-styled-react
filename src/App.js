import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  color: red;
`;

const Button = styled.button`
  background: ${props=> props.theme ? 'orange': 'green'}
`

const Button2 = styled.button`
  background-color: ${props=> props.theme2.skyTest}
`
const Sky = styled.div`
  background-color: ${props => props.theme.skyTest}
`;


const inativeTheme = {
  skyTest: "#37d8e6"
};
const activeTheme = {
  skyTest:'green'
 }


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      //theme: true,
      isDay: true,
      theme2: inativeTheme,
      btnText: 'submit'
    }

    //this.handleClick = this.handleClick.bind(this)
    //this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick(event){
    this.btn ='submitted'
    this.setState({theme : false})
    event.preventDefault()
  }

  handleClick2(){
    const isDay = !this.state.isDay;

    this.setState({
      isDay: isDay,
      theme2: isDay ? inativeTheme : activeTheme,
      btnText: 'submitted'
    })
    //event.preventDefault()
  }


  render() {
    console.log(this.state.theme)
    return (
  
     
      <ThemeProvider theme = {this.state.theme2} className="App">
  
      <Sky onClick={() => this.handleClick2()}>
        {this.state.btnText}
        </Sky>

      </ThemeProvider>
    );
  }
}
/* <ThemeProvider theme = {this.state.theme2} className="App">
          <Button2 type="Submit"  onClick={() =>this.handleClick2()} >
            ooiiiii
          </Button2>
         
      </ThemeProvider>*/

export default App;

/*

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Welcome to React :p
          </Title>
        </header>
        <form>
        <label>
          Nome
          <input/>
        </label>
        <Button type="Submit" theme={this.state.theme} onClick={this.handleClick} >
          {this.btn}
        </Button>

        <ThemeProvider theme={this.state.theme2}>
          <Button type="Submit"  onClick={() =>this.handleClick2()} >
            ooiiiii
          </Button>
        </ThemeProvider>


        <button>teste</button>

        </form>

      </div>



*/