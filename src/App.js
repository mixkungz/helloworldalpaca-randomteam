import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled , {injectGlobal} from 'styled-components'

const MySpan = styled.span`
  font-size: 50px;
`

const MyFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`

const TwoFlex = MyFlex.extend`
  color : ${props=> props.color}
`


injectGlobal`
  .tae {
    font-size: 90px;
  }
`


class App extends Component {
  
  state = {
    a : 's',
    color : 'black',
    check : true
  }

  random = () =>{
   console.log('www') 
  }

  changeColor = () => {
    if(this.state.check) {
      this.setState({
        color : 'red',

      })
    } else {
        this.setState({
          color : 'black',
        })
    }

    this.setState({
      check: !this.state.check
    })
  }

  render() {
    return (
      <div>
        <TwoFlex color={this.state.color} className="App">
          <button onClick={()=>this.changeColor()}> Change Color </button>

          <MySpan className="tae"> {this.state.a} </MySpan>

          <span style={{ fontSize : '50px'}}> 
            {this.state.a}
          </span>

        </TwoFlex>

      </div>
    );
  }
}

export default App;
