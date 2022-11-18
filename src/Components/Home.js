import React, { useState, useEffect } from 'react'
import Header from './Header'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Chapter from './Chapter';
import '../Styles/Home.css'
import Banner from '../media/quotes-bg.png';

const languages = [
  { value: '', text: "Options" },
  { value: 'en', text: "English" },
  { value: 'hi', text: "Hindi" },
  { value: 'bn', text: "Bengali" }
]



const Home = (props) => {




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

  async function getChpter() {

    Axios.request(option).then(function (response) {
      console.log(response.data);
      setdata(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    getChpter();

  }, [])


  return (
    <>
      <Header />
      <div className="banner mt-4">
        <img src={Banner} className="banner" />
        <div className="heading d-flex flex-column">
          <h2 className="heading1">
            To Know More About Gita
          </h2>
          <h2 className="heading2">
            Anywhere, AnyTime
          </h2>
          <a className="readmore">
            Read More
          </a>
        </div>
      </div>


      <div className="mantra"><h2> ||ॐ नमो भगवते वासुदेवाय नमः ||</h2></div>
      <div className="container d-flex flex-row flex-wrap">
        {
          data.map((e) => {
            return (
              <div className="home">
                <div className="base">
                  <div className="card">
                    <div className="card-header align-content-lg-start">
                      <div className="text-black ">Chapter :{e.chapter_number}
                      </div>
                      <div className="chapterName w-100">
                        {e.name_translated}
                      </div>
                    </div>
                    <div class="card-body text-black w-100 mb-4 pb-5 h-50">
                      {e.chapter_summary}

                    </div>
                    <div class="card-footer">
                      <div className="bottom d-flex justify-content-between">
                        <div className="shloknumber text-danger">
                          Verses {e.verses_count}

                        </div>
                        <div key={e.id}>
                          <Link className="link_chapter" to={`/Chapter/${e.chapter_number}`}>
                            <button className="btn-primary">Read more</button>
                          </Link>
                        </div>



                      </div>

                    </div>
                  </div>
                </div>


              </div>
            )
          })

        }
      </div>


    </>
  )
}

export default Home
