import React from 'react';
import './App.css';
import Counter from './components/Counter'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        {/* 1st way - as render prop*/}
        {/* <Counter 
          render={(count,incrementCount)=> (
            <ClickCounter count={count} incrementCount={incrementCount}/>
          )}
          /> */}
         {/* <Counter 
          render={(count,incrementCount)=>(
            <HoverCounter count={count} incrementCount={incrementCount}/>
          )}
          />     */}
        {/* 2nd way - as children prop */}
         <Counter>
         {(count,incrementCount)=> (
            <ClickCounter count={count} incrementCount={incrementCount}/>
          )}
         </Counter>

         <Counter>
         {(count,incrementCount)=>(
            <HoverCounter count={count} incrementCount={incrementCount}/>
          )}
         </Counter>
       
      </div>
    )
  }
}

export default App;
