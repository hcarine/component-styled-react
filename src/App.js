import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  color: red;
`;

const Button = styled.button`
  background: ${ props => props.theme.background}
`

const ButtonToggle = styled.div`
  background-color: ${props => props.theme.background}
`;

const inativeTheme = {
  background: 'orange'
};
const activeTheme = {
  background:'green'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isActive: true,
      theme2: inativeTheme,
      theme: activeTheme,
      btnText: 'submit'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    const isActive = !this.state.isActive;
    this.setState({
      isActive: isActive,
      theme: isActive ? activeTheme : inativeTheme,
      btnText: isActive ? 'submit': 'submitted'
    })
    event.preventDefault()
  }

  handleClick2(){
    const isActive = !this.state.isActive;

    this.setState({
      isActive: isActive,
      theme2: isActive ? inativeTheme : activeTheme,
      btnText: isActive ? 'submit': 'submitted'
    })
  }


  render() {
    return (
      <div> 
        <ThemeProvider theme = {this.state.theme2} className="App">
          <ButtonToggle onClick={() => this.handleClick2()}>
            {this.state.btnText}
          </ButtonToggle>
        </ThemeProvider>

        <ThemeProvider theme = {this.state.theme}>
          <Button onClick={this.handleClick}>
             {this.state.btnText}
          </Button>
          
        </ThemeProvider>


      </div>
    );
  }
}

export default App;