import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import Footer from '../../components/footer/footerArea'
import '../../styles/gallery.scss'

import { getAdminData } from '../../api/core/admin'
import { convertToTitleCase } from '../../middleware/middleware'

export default function People() {

    const[data, setData] = useState({})
    
      useEffect(() => {
    
        getAdminData("mot").then( res => {
            setData(res[0]);
        } )
    
    }, []); 

  return (
    <div className="about__sections">

        <Container>

            <div className="title">

                <h1>Meet the Team: Passionate People Driving Success and Innovation Forward</h1>

                <span>Bringing Innovation, Dedication, and Excellence Together for Lasting Impact and Success</span>

            </div>

            <div className="gallery__mda gallx">

                <section>

                    {
                        data.people?.length ? data.people.map( (res, index) => (

                            <a className="pic" key = {index} >

                                <div className="pic__holder">
                                    <img src={res.photo} alt= { `${res.name}_${res.role}` } />
                                </div>

                                <div className="name__card">
                                    <span> {res.role} </span>
                                    <p> { convertToTitleCase( res.name ) } </p>
                                </div>

                            </a>

                        ) ) : null
                    }

                </section>

            </div>

        </Container>

        <Footer/>
    </div>
  )

}
