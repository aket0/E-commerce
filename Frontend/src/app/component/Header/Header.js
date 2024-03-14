
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"


function Header({onCartToggle, totalProduct, onLogginToggle }) {

   

return(
    <div>
    <nav className='DesktopNav'>
        <div className="navLogo">
            <h1>My Little Jungle</h1> 
        </div>
        <div className="navLink">
            <button onClick={onCartToggle}>
                <FontAwesomeIcon icon={faCartShopping}  />
               <span className="counter">{totalProduct}</span>
            </button>
            <button onClick={onLogginToggle}>  
                <FontAwesomeIcon  icon={faUser} />
            </button> 
        </div>
     </nav>
     <nav className='mobileNavbar'>
     <div className="navLogo">
            <h1>My Little Jungle</h1> 
        </div>
        <div className="navLink">
            <button onClick={onCartToggle}>
                <span className="counter">{totalProduct}</span>
                <FontAwesomeIcon icon={faCartShopping} className='fa-xs'  />
                
            </button>
            <button>
                <FontAwesomeIcon icon={faSearch} className='fa-xs'/>
            </button>
            <button onClick={onLogginToggle}>  
                <FontAwesomeIcon  icon={faUser} className='fa-xs' />
            </button> 
        </div>
     

     </nav>
     </div>
       
        
    
)

}
export default Header;

