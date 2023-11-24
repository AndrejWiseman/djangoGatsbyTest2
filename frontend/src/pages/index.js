import * as React from "react"

import '../assets/css/main.scss'

import DugmeBox from '../components/DugmeBox'


export default function Home() {
  return(
      <main>
        <div className="tekst">
            <h1>Novi Django + Gatsby Tutorial</h1>

            <div className="dugmebox">
                <DugmeBox />
            </div>
        </div>


      </main>
  )
}
