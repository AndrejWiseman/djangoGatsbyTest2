import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import axios from "axios"

import '../assets/css/main.scss'
import DugmeBox from "../components/DugmeBox";



const Druga = () => {

    const [filmovi , setFilmovi] = useState(null)

    const [loading, setLoading] = useState(true);


    useEffect(() => {
      getFilm()
        } ,[])


    function getFilm() {
      axios({
          method: "GET",
          url:"https://django-gatsby-test2.vercel.app/backend/filmovi",
        }).then((response)=>{
          const data = response.data
          setFilmovi(data)
          setLoading(false);
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}



    return(
        <main>
        <div className="tekst">
            <h1>Druga strana</h1>

            <div className="dugmebox">
                <DugmeBox />
            </div>

            <ul>

                { loading ? <p>Ucitava se...</p> : <ul>

                    { filmovi && filmovi.map(film => {

                        return(
                            <li>{film.ime} - {film.godina}</li>
                        )

                        }
                    )}
                </ul>

                }

            </ul>

        </div>

      </main>
    )
}
export default Druga


export const query = graphql`
  query {
    django {
      allFilms {
        ime
        godina
      }
    }
  }
`