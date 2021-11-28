import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './homepage/Homepage';




class App extends React.Component{

constructor(props){
  super(props);

  this.state={
  
  }
}



render(){
  return(


    <div className="app">
         <Navbar />
         <Homepage />
    </div>


  )
}



}


export default App;