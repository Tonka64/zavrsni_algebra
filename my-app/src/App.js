import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "./App.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={username: ""};
  }
  
  handleLogin = (username) =>{
    this.setState({username})
  }
  
  toggleSidebar = () =>{
    this.sidebar.ToggleSidebar();
  }

  handleLogout =() =>{
    this.setState({username: ""});
  }

  render(){
    return   ( 
       <div className="App">  
         <Header toggleSidebar={this.toggleSidebar} username={this.state.username} handleLogout={this.handleLogout} /> 
         <Sidebar ref={(reference)=> this.sidebar = reference}/> 
          <Routes>
              <Route path="/zavrsni_algebra/" 
              element={ this.state.username ? <Chat username={this.state.username}/> : <Navigate to="/zavrsni_algebra/login" />} />
              <Route path="/zavrsni_algebra/login" element={<Login onLogin={this.handleLogin} username={this.state.username}/>} />
              <Route path="/zavrsni_algebra/about" element={this.state.username ? <About />: <Navigate to="/zavrsni_algebra/login" /> } />
            </Routes>
    </div>
    )
  }
}

export default App;