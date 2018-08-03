import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {  addGun, removeGun,changeData } from './redux/redux'
// const mapStatetoProps=(state)=>{
//   return {myObject:state}
// };
// const actionCreators = {  addGun, removeGun,changeData };
// App = connect(mapStatetoProps,actionCreators)(App)
// @connect(mapStatetoProps,actionCreators)

@connect(
  state=>({myObject:state}),
  { addGun, removeGun,changeData }
)
class App extends Component {
  render() {
    // 未使用react-redux代码
    // const store = this.props.store;
    // const myObject= store.getState();
      {/* <input type="button" onClick={()=>store.dispatch(this.props.changeData())} value="增加"/>
        <input type="button" onClick={()=>store.dispatch(this.props.removeGun())} value="减少"/> */}
    return (
      <div className="App">
     
        <div>{this.props.myObject.num}</div>
        <input type="button" onClick={this.props.changeData} value="增加"/>
        <input type="button" onClick={this.props.removeGun} value="减少"/>
      </div>
    );
  }
}


export default App;
