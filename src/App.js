import React, { Component } from 'react';
import Parallax from  'parallax-js';
import styled , {injectGlobal} from 'styled-components'
import mountainElement from './static/img/mountain.png';

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
const Footer = styled.div`
  position:absolute;
  bottom:0;
  max-width:100%;
  left:0;
`
const Container = styled.div`
  display:flex;
  position:absolute;
  min-width:100vw;
  min-height:100vh;
  top:0;
  left:0;
`
const Mountain = styled.div`
  background: url(${mountainElement});
  max-width:15%;
  min-width:100vw;
  min-height:10vh;
`
injectGlobal`
  body{
    background:#e8f8fd;
  }
  img{
    max-width:100%;
  }
  .alpaca{
    max-width:20%;
  }
`
class App extends Component {
  
  componentWillUnmount() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.2, 0.2);
    
  }
  componentDidMount() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.2, 0.2);
  }

  state = {
  }


  random = () =>{
  }


  render() {
    return (
      <div data-relative-input="true" id="scene">
        <Container data-relative-input="true" id="scene">
          <Footer data-depth="0.6">
            <img className="alpaca" data-depth="0.2" src={ require('./static/img/alpacamood-01.png') } />
            <img className="alpaca" data-depth="0.2" src={ require('./static/img/alpacamood-05.png') } />
            <img className="alpaca" data-depth="0.2" src={ require('./static/img/alpacamood-07.png') } />
            <img className="alpaca" data-depth="0.2" src={ require('./static/img/alpacamood-04.png') } />
            <Mountain/>
            {/* <img src={`${mountainElement}`} alt=""/> */}
          </Footer>
        </Container>
      </div>
    );
  }


}

export default App;
