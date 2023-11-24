import React from 'react'
import { graphql } from 'gatsby'

import '../assets/css/main.scss'
import DugmeBox from "../components/DugmeBox";



const Druga = ({data}) => {
    return(
        <main>
        <div className="tekst">
            <h1>Druga strana</h1>

            <div className="dugmebox">
                <DugmeBox />
            </div>

            <ul>
                {
                    data.django.allFilms.map(node => (
                      <li key={node.ime}>
                        {node.ime} - {node.godina}
                      </li>
                    ))
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