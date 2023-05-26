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
            <li><a href="#teammembers">Team Members</a></li>
            <li><a href="#contact">Contact Information</a></li> 
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
    <table className="table2">
      <tr>
          <td></td>
          <td></td>

      </tr>
      <tr>
        <td><a href="/" target="_blank"><img className="logo1" src={logo2} alt="woman" title="Joe"/></a></td>
        <td><a href="/" target="_blank"><img className="logo4" src={logo4} alt="man" title="Marie"/></a></td>
        <td><a href="/" target="_blank"><img className="logo5" src={logo5} alt="man2" title="Harry"/></a></td>
        <td><a href="/" target="_blank"><img className="logo6" src={logo6} alt="woman2" title="Lizzie"/></a></td>
        <td><a href="/" target="_blank"><img className="logo7" src={logo7} alt="man3" title="Darwin"/></a></td>  
      </tr> 
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
    <hr/>
    <div className="kontaktd">
        <h1 id="contact">Contact Information</h1>
        <p className="para123">For more information about our Chat Application, including its features, 
            functionality, and how it can cater to your communication needs, please don't 
            hesitate to reach out to us. We're here to address any queries or concerns you may have.</p>
            <br/>
        <p className="para123">You can contact us by sending an email or call our support for more information. 
            Our dedicated support team is eager to assist you and provide further information 
            to ensure your experience with our Chat Application is nothing short of exceptional.</p>
            <br/>
        <p className="para123">Join our thriving community of users and experience the joy of effortless communication. 
            We look forward to hearing from you and being a part of your communication journey.</p>
            <br/>
            <br/>
            <br/>
          </div>
          <br/>
          <br/>
          <br/>
          <div>  
        <table className="tablica-kontakt">
            <tr>
           <td className="td12"><a href="mailto:moj.email@mojmail.com" target='_blank'>E-mail adresa</a></td>
           <td className="td12"><a href="tel:+385987654321" target='_blank'>Phone Number</a></td>
           </tr>
         </table>  
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <div>
      <form></form>
    </div>
    <footer>
        <p className="thankyou">Thank you for using Chat application.</p>
        <p className="copyright">Chat Application © 2023</p>
    </footer>
    </div>
}


    


export default About;
