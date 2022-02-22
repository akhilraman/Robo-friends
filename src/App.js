import React ,{Component} from "react";

import CardList from './CardList';

import {robots} from './robots';

import Searchbox from "./Searchbox";

import Scroll from './Scroll';

import ErrorBoundary from './ErrorBoundary';

import './App.css';
class App extends Component{

    constructor(){
        super();

        this.state={
            robots: [],
            searchfield:' '

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
        return  response.json()})
         .then(users=>{
             this.setState({robots:users})
         })

    }

    onSearchchange =(event)=>{

       this.setState({searchfield:event.target.value})


    }

render(){
    const filterRobots=this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })


    if(this.state.robots.length==0){
        return(<h1 className='tc'> LOADING</h1>)
    }
    else{
        return (

            <div className='tc'>
    
            <h1 className='f1'> ROBOT FRIENDS</h1>
            <div>
                <Searchbox searchChange={this.onSearchchange}/>
            </div>
            <Scroll>
                <ErrorBoundary>
                <CardList robots= {filterRobots}/>
                </ErrorBoundary>
            
            </Scroll>
            
    
            </div>
        )
    }

    
}


}

export default App