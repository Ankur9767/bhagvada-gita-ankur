import React,{ useEffect, useState } from 'react';
import Axios  from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../Styles/verse.css';
import { useSpeechSynthesis } from "react-speech-kit";


const Verses = () => {
      
    const { chapter } =useParams();
    const { speak } = useSpeechSynthesis();

   
    const [user, setUser] = useState([])
    console.log(chapter);
    var option = {
        method: 'GET',
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`,
        // params:'18' ,
        headers: {
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          'x-rapidapi-key': 'ebeff21c32msh98bcf38878851b5p18ac95jsn01f308b87628'
        },
      };
  
      async function getChpter(){
    
        Axios.request(option).then(function (response) {
           
            console.log(response.data);
            setUser(response.data);
            

        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getChpter();
        
       
        
        
    }, [])
    
    
    return (
        <div>
        <Header />
        <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
                 
         <div className='chapter'>
        { user.map((use)=>{
        return(
        <div>
        {
           <div key={use.id} className="border-0 d-flex flex-column me-1 ms-1"> 
           <div className="container d-flex flex-column">
           <h3 className="top">{use.slug}</h3>          
             
            <div className="summary">
            <p className="translation">{use["translations"]["0"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["0"]["author_name"]}</p>
             <p className="translation">{use["translations"]["1"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["2"]["author_name"]}</p>
            
             <p className="translation">{use["translations"]["2"]["description"]}</p>
            <p className="author"> Written by:{use["translations"]["2"]["author_name"]}</p>
    
            </div>
            <div className="group">
                         <button className="btn btn-danger" onClick={() => speak({ text:use["translations"]["1"]["description"]})}>Listen</button>
            </div>
            
            </div>
            
            

            </div>
            

        
        
        }
       
        </div>
        )
        })
        }

        </div>
        </div>
        
        
        
            
        
    )
         
}

export default Verses