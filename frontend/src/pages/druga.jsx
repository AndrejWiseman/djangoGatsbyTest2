import React, { useState, useEffect } from 'react'

import axios from "axios"

import '../assets/css/main.scss'
import DugmeBox from "../components/DugmeBox";

import API from '../components/API'



const Druga = () => {

    const [filmovi , setFilmovi] = useState([])

    const [loading, setLoading] = useState(true);


    useEffect(() => {
      getFilm()
        } ,[])


        // djangoReact6
      const getFilm = () => {
        API.get("/")
          .then((res) => {
            setFilmovi(res.data);
            // setName(res[0].name)
            // setGenre(res[0].genre)
            // setStarring(res[0].starring)
            // setMovieId(res[0].id)
          })
          .catch(console.error);
      };


    // function getFilm() {
    //   axios({
    //       method: "GET",
    //       url:"https://django-gatsby-test2.vercel.app/backend/filmovi",
    //     }).then((response)=>{
    //       // const data = response.data
    //       const data = response.data.results
    //       setFilmovi(data)
    //       setLoading(false);
    //     }).catch((error) => {
    //       if (error.response) {
    //         console.log(error.response);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //         }
    //     })}



    return(
        <main>
        <div className="tekst">
            <h1>Druga strana</h1>

            <div className="dugmebox">
                <DugmeBox />
            </div>

            {/*<ul>*/}


                {/* { filmovi && filmovi.map(film => {*/}

                {/*    return(*/}
                {/*        <li>{film.ime} - {film.godina}</li>*/}
                {/*    )*/}

                {/*    }*/}
                {/*)}*/}


                { loading ? <p>Ucitava se...</p> : <ul>

                    { filmovi && filmovi.map((film, index) => {

                        return(
                            <li key={film.index}>{film.ime} - {film.godina}</li>
                        )

                        }
                    )}
                </ul>
                }

            {/*</ul>*/}

        </div>

      </main>
    )
}
export default Druga
