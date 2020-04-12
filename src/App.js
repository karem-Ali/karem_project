import React,{Component} from 'react';
import Card from './components/Card'
import Search from './components/search'
import Scroll from'./components/scroll'
class  App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }
  componentDidMount(){
    console.log('ok')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>{this.setState({robots:users}) })
  }
  onsearchChange=(e)=>{
    this.setState({
      searchfield:e.target.value
    })
  
  }
  render(){
    const filterRobot= this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
 const card= filterRobot.map(robot=> <Card key={robot.id}id={robot.id} name={robot.name} email={robot.email}/>)
 if (this.state.robots.length ===0) {
   return (
    <h1>LOADING</h1>
   )
 }else{
  return(
    <div className=" tc">
    <h1>roboto friends</h1>
    <Search search={this.onsearchChange} />
    <Scroll>
      {card}

    </Scroll>
    </div>
  )
 }
 
  
  }
  
}

export default App;
