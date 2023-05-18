import logo2 from '../logo2.jpg';
import logo4 from '../logo4.jpg';
import logo5 from '../logo5.jpg';
import logo6 from '../logo6.jpg';
import logo7 from '../logo7.jpg';
import './About.css';


const About = () =>{
    return <div>
        <nav>
          <ul className="lista1">
            <li><a href="#onama">About Us</a></li>
            <li><a href="#galerija">Team Members</a></li>
            <li><a href="#velicine">Tablica velicina</a></li> 
            <li><a href="#kontakt">Kontakt</a></li> 
            
          </ul>    
        </nav> 
    <div> 
        <h1 id="onama">About Us</h1>
        <p className="par1">Welcome to our chat application web page! Our chat application is designed to connect people from all around the world,
         providing a seamless and interactive communication experience.On this web page you are able to engage in real-time conversations with 
         friends, family, and even new acquaintances. Whether you're looking to catch up with loved ones or connect with like-minded individuals, 
         our chat application has got you covered.Join our chat application today and discover a vibrant world of conversation, connection, and community. 
         Experience the joy of real-time communication and create lasting connections with people from all walks of life. Start chatting now and let the conversations unfold!</p>
    </div>
    <br/>
    <hr/>
    <br/>
    <div>
        <h1 id="teammembers">Team Members</h1>
        <br/>
    </div>
    <div>
    <a href="/" target="_blank"><img className="logo1" src={logo2} alt="woman" title="Joe"/></a>
    <a href="/" target="_blank"><img className="logo4" src={logo4} alt="man" title="Marie"/></a>
    <a href="/" target="_blank"><img className="logo5" src={logo5} alt="man2" title="Harry"/></a>
    <a href="/" target="_blank"><img className="logo6" src={logo6} alt="woman2" title="Lizzie"/></a>
    <a href="/" target="_blank"><img className="logo7" src={logo7} alt="man3" title="Darwin"/></a>
    <br/>
    <table className="table2">
        <tr>
            <td className="td1">Joe</td>
            <td className="td2">Marie</td>
            <td className="td3">Harry</td>
            <td className="td4">Lizzie</td>
            <td className="td5">Darwin</td>
        </tr>
    </table>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>    
    <hr/>
    <div>
        <h1 id="kontakt">Kontakt</h1>
           <a href="mailto:moj.email@mojmail.com" target='_blank'>E-mail adresa</a>
           <br/>
           <a href="tel:+385987654321" target='_blank'>Kontakt telefon</a>
    </div>
    <hr/>
    <p>za vise info posjetite sljedece linkove</p>
    <ol className="lista2">
      <li><a href="https://www.algebra.hr">Algebra</a></li>
      <li><a href="https://www.google.com">Google</a></li>     
    </ol>  
    <footer>
        <p>Thank you for using Chat application.</p>
        <p>Chatt Application Shop © 2023</p>
    </footer>
    </div>
}


    


export default About;
