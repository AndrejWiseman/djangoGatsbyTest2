import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/dugme-box.scss'


const DugmeBox = () => {
    return(
        <div className='dugme-box'>
            <Link to='/' activeClassName='aktivno' ><button>Prva strana</button></Link>
            <Link to='/druga' activeClassName='aktivno'><button>Druga strana</button></Link>
            <Link to='/treca' activeClassName='aktivno'><button>Treca strana</button></Link>
        </div>
    )
}
export default DugmeBox