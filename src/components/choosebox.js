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
        team : ["Front-End","Design","Game","Infra"],
        canSelect: true,
        name: ''
    }

    async componentWillMount() {
        // let random = Math.floor(Math.random() * 10)

        let data = await fetch(`//localhost:3003/api/v1/all`)
            .then(resp => resp.json())
            .then(data => data) 
        console.log(data)
        // this.setState({ ip: data.ip })

        // document.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        //     console.log(JSON.stringify(data, null, 2))
        // })
    }
    randomTeam = () =>{
        return Math.floor((Math.random()*10)+1);
    }
    onClickBtn = async (team) =>{
        let teams = this.state.team
        let url = '//localhost:3003/api/v1/random/'
        let check = this.state.canSelect
        let name = this.state.name
        if(name.length < 3) {
            alert('please insert name more than 3 character!')
        }else if(check) {
            alert(this.randomTeam());
            switch(team){
                case teams[0]:
                    url += `${teams[0]}/${name}`
                    break
                case teams[1]:
                    url += `${teams[1]}/${name}`            
                    break
                case teams[2]:
                    url += `${teams[2]}/${name}`                
                    break
                case teams[3]:
                    url += `${teams[3]}/${name}`                
                    break 
            }
            let data = await fetch(url)
                .then(resp => resp.json())
                .then(data => data) 
            if(data.status){
                alert(`น้อง ${name} ได้อยู่ทีมพี่ ${data.team}`)
                check = false
                this.setState({ canSelect: false })
            }else{
                alert(data.message)
            }
        } else {
            alert(`can't select team`)
        }
    }
    render(){
        return(
            <div>
                <Box>
                    <input style={{ marginBottom: '10px' }} type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                    {
                        this.state.team.map(team => (
                            <button key={team} className="btn btn-outline-dark btn-block" onClick={()=>this.onClickBtn(team)}>{team}</button>
                        ))
                    }
                    {
                        this.state.ip
                    }
                    
                </Box>
            </div>
        );
    }
}

export default ChooseBox