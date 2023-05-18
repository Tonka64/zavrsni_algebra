import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false,
        }
        this.ToggleSidebar = this.ToggleSidebar.bind(this);
    }
    ToggleSidebar(){
        const {isOpen}=this.state;
        this.setState({isOpen: !isOpen});
    }

    
    render() {
        const {isOpen} = this.state;
        return(
            <div className="container-fluid mt-3">
                <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
                    <div className="sd-header">
                        <h4 className="sidebarh1">Sidebar </h4>
                        <div className="btn btn-primary" onClick={this.ToggleSidebar}>Close</div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <li><Link to="/zavrsni_algebra/" className="sd-link">Chat</Link></li>
                            <li><Link to="/zavrsni_algebra/about" className="sd-link">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen ===true?"active": ""}`} onClick={this.ToggleSidebar}></div>
            </div>
        )
    }
}

export default Sidebar;