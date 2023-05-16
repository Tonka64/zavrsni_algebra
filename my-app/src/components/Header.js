const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
        <h1 className="nazivSobe">{props.username}'s Chat Room</h1>
        <div className="logout-btn"> 
        <button className="logout-btn2" onClick={props.handleLogout}>Logout</button>
        </div>
      </div>}

      {!isLoggedIn &&  <div /*className="App-header"*/>
        <div></div>
        <h1 className="header2">Chat Application</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>}
      </>
    )
}
export default Header;