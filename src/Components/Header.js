import React,{useState , useEffect} from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import mainlogo from '../media/mainlogo2.png';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [userData, setUserData] = useState({})
  const [show, setShow] = useState(false)
  const homePage = async ()=>{
      try {
          const res = await fetch("/getdata",{
              method:"GET",
              credentials:"include",
              headers:{
                  "Content-Type":"application/json"
                },
          })
          const data = await res.json()
          setUserData(data)
          console.log(userData);
          

      } 
      catch (error) {
          console.log(error)
          
         
      }
  }

  useEffect(()=>{
      homePage();
  },[])

    return (
        <div>
       

{/* <nav class="navbar navbar-expand-lg">
 
  <div class="container-fluid justify-content-between">
   
    <Link to={"/"} class="navbar-brand"  >
    <img className="logo" src={mainlogo} height="90px"  width="120px"
        />
    </Link>  


    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

      <ul class="navbar-nav ms-5  d-flex flex-row  mt-lg-0">
        
        <li class="nav-item text-center mx-4 mx-lg-1">
        
        <Link to={"/"} class="nav-link mx-4">            
            HOME
          </Link>        
         
        </li>
        <li class="nav-item text-center mx-4 mx-lg-1">
        <Link to={"/about"} class="nav-link mx-4">            
            ABOUT GITA
          </Link>
        </li>
        
        <li class="nav-item text-center mx-4 mx-lg-1">
          <Link to={"/search"} class="nav-link mx-4">            
            SEARCH
          </Link>
        </li>
      </ul>
      

    
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
  
      
    

        <li class="nav-item text-center mx-2 me-5 mx-lg-1">
          <Link to={'/login'} class="nav-link login-nav ">            
            { userData ? "LOGOUT": "LOGIN/REGISTER"}
          </Link>
        </li>        
      </ul>
      
      

    
      
    </div>
    
  </div>
 
</nav> */}
     

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">
    <Link to="/">
      <img  className="logo
      " src={mainlogo}/> </Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mt-4">
          <a class="nav-link active" aria-current="page">
          <Link  className="nh" to="/">Home
          </Link>
          </a>
        </li>
        <li class="nav-item mt-4 ">
          <a class="nav-link" >
          <Link className="nh" to="/about">About Gita</Link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <p className="chh">Chapters</p>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/1`}> Chapter - 1</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/2`}> Chapter - 2</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/3`}> Chapter - 3</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/4`}> Chapter - 4</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/5`}> Chapter - 5</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/6`}> Chapter - 6</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/7`}> Chapter - 7</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/8`}> Chapter - 8</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/9`}> Chapter - 9</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/10`}> Chapter - 10</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/11`}> Chapter - 11</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/12`}> Chapter - 12</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/13`}> Chapter - 13</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/14`}> Chapter - 14</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/15`}> Chapter - 15</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/16`}> Chapter - 16</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/17`}> Chapter - 17</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">
            <Link className="linkch" to={`/Chapter/18`}> Chapter - 18</Link>
            </a></li>
            <li><hr class="dropdown-divider" /></li>
            
            
          </ul>
        </li>
        </ul>
      <form class="d-flex">
        
        <button class="btn btn-outline-success" type="submit">
        <Link to="/Search" className="searchbtn">Search</Link>
         </button>
      </form>
    </div>
  </div>
</nav>
        

        
            
        </div>
    )
}

export default Header
