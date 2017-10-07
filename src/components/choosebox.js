import React , { Component } from 'react';
import styled , {injectGlobal} from 'styled-components';

const Box = styled.div`
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:#bfbfe2;
    padding:3em;
    border-radius:15px;
    z-index:10;
`
injectGlobal`
    .btn-outline-purple {
        color: #7b7ba3;
        background-color: transparent;
        background-image: none;
        border-color: #7b7ba3;
    }
    .btn-outline-purple:hover {
        color: #fff;
        background-color: #7b7ba4;
        border-color: #7b7ba4;
    }
`
class ChooseBox extends Component{
    state = {
        team : ["Front-End","Design","Game","Infra"]
    }
    onClickBtn = (team) =>{
        switch(team){

        }
    }
    render(){
        return(
            <div>
                <Box>
                    {
                        this.state.team.map(team => (
                            <button className="btn btn-outline-dark btn-block">{team}</button>
                        ))
                    }
                    
                </Box>
            </div>
        );
    }
}

export default ChooseBox