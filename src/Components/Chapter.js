import React,{ useEffect, useState } from 'react';
import Axios  from 'axios';
import Header from './Header';
import '../Styles/Chapter.css';
import { useParams ,Link } from 'react-router-dom';

import { useSpeechSynthesis } from "react-speech-kit";
import bgm from '../media/bgm.mp3'


const Chapter = () => {
    const { chapter } = useParams();
    console.log("this chapter is ",chapter);
    const { speak } = useSpeechSynthesis();
    const [audio, SetAudio] = useState("");

    const Playit = () => {
      audio.play();
    };
    const Stopit = () => {
      
      audio.pause();
    };
    
    
    const [data, setdata] = useState([]);
    var option = {
        method: 'GET',
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
        // params:'18' ,
        headers: {
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          'x-rapidapi-key': 'ebeff21c32msh98bcf38878851b5p18ac95jsn01f308b87628'
        },
      };




//       Speech.init({
//         'volume': 1,
//          'lang': 'hi-IN',
//          'rate': 1,
//          'pitch': 1,
//          'voice':'Google UK English Male',
//          'splitSentences': true,
//          'listeners': {
//              'onvoiceschanged': (voices) => {
//                  console.log("Event voiceschanged", voices)
//              }
//          }
//  })

  


  
  
      async function getChpter(){
    
        Axios.request(option).then(function (response) {
            // console.log(response.data);
            setdata(response.data);
            

        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getChpter();
        SetAudio(bgm);
        
       
        
        
    }, [])
    
    
    return (
        <div className="main">
        <Header />
       
        <div className="chapters">
        <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
       
        {
            data.map((chap)=>{
                return(
                     <div  key={chap.id}>
                    {
                    chap.chapter_number== chapter &&    
                    <div className="container-sm mt-4 d-flex flex-column">
                    <div className="chapter_head card-header">
                    <p className="chapter_name">{chap.chapter_number} :{chap.name}</p>
                    <p className="Chap_heading">{chap.slug}</p>
                    <p className="total_verses">Number of verses :{chap.verses_count}</p>
                    </div>
                        
                        <p className="chap_summary  container-sm ">{chap.chapter_summary}  <br /><br />
                        {chap.chapter_summary_hindi}
                        <div className="container d-flex flex-row justify-content-between flex-row-reverse">
                     <Link classname="lch" to={`/verse/${chap.chapter_number}`}
                     
                     
                     
                     
                     
                     
                     
                     
                      >
                      <p className="knowmore">Go to verses</p>
                    </Link>
                    <div className="group">
                         <button className="btn btn-danger" onClick={() => speak({ text:chap.chapter_summary  })}>Listen</button>
                     </div>
                     
                     
                     </div>
                        </p>
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

export default Chapter
