import React,{useState, useEffect} from 'react'
import './about.scss'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/footerArea'

//bidget images

import one from '../../assets/mepb/Intersection -1.png'
import two from '../../assets/mepb/Intersection 4.png'
import three from '../../assets/mepb/Intersection 5.png'
import four from '../../assets/mepb/Intersection 6.png'
import five from '../../assets/mepb/Intersection 7.png'
import { getAdminData } from '../../api/core/admin'

export default function Vision() {

  const[data, setData] = useState({})

  useEffect(() => {

    getAdminData("mot").then( res => {
        setData(res[0]);
    } )

}, []); 

  return (
    <div className="about">

      <Container>

        <div className="title plaq" style={{border : 'none'}}>

            <h1>Vision, Mission, and Goals: Defining Purpose, Direction, and Key Objectives</h1>

            <span>Aligning Identity, Purpose, Direction, and Objectives for Sustainable Growth and Success</span>

        </div>

      </Container>

       <div className="more__about">

          <Container>

            <div className="areas flex">

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Vision</div>
                    <div className="tag text__trend font__12">Who we are</div>
                    <div className="sub__text"> {data?.vision} </div>

                  </div>

              </div>

              <div className="lineform"></div>

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Mission</div>
                    <div className="tag text__trend font__12">What we do</div>
                    <div className="sub__text"> {data?.mission} </div>

                  </div>

              </div>

            </div>

          </Container>

       </div>

        <div className="floating__pictures flex">

            <div className="photo__float">
              <img src={five} alt="" />
            </div>

            <div className="photo__float">
              <img src={two} alt="" />
            </div>

            <div className="photo__float">
              <img src={three} alt="" />
            </div>

            <div className="photo__float">
              <img src={four} alt="" />
            </div>

            <div className="photo__float">
              <img src={one} alt="" />
            </div>

        </div>

        <Container>

            <div className="about__details">

            Lagos State Ministry of Transportation is charged with the core responsibility of the development of effective transport infrastructure and integration of multi-modal transport system to enhance safety of lives and property of the communal public and ensure free flow of traffic and sectoral support for investment growth across the State.

                {<br></br>}{<br></br>}


            </div>

        </Container>

        <Footer/>

    </div>
  )
}
