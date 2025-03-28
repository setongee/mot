import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import landingAsset from '../../assets/landing/landing.png'

import { getAdminData } from '../../api/core/admin'

import { ArrowUpRight } from 'iconoir-react'

// services photos
import Services from '../../components/Services/Services'
import Achievements from '../../components/Achievements/Achievements'
import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'

export default function Home() {

    const[data, setData] = useState({})
    
      useEffect(() => {
    
        getAdminData("mot").then( res => {
            setData(res[0]);
        } )
    
    }, []); 

  return (
    <div className="home">

        <div className="tippytoe">

            <Container>

                <div className="landing__area">

                    <div className="text__part">

                        <h1>Building a <span>Safe, Efficient & Integrated</span> Transport System for Lagos State </h1>
                        
                        <p>Empowering mobility with sustainable infrastructure, seamless multi-modal transport, and sectoral growth for a thriving Lagos State.</p>

                        <div className="quick__summary flex">

                            <a href='/about/vision' className="qLink flex color__success__text mb"> Find Out more <ArrowUpRight/> </a>
                            <div className="line_q"></div>
                            <a href="#achievements" className="qLink freem"> See our achievements </a>

                        </div>

                    </div>

                    <div className="landingAsset">
                        <img src={landingAsset} alt="Ministry of Transportation Landing Page Asset" />
                    </div>

                </div>

            </Container>

        </div>

        {/* Quick Services for Transportation */}

        <Services/>

        {/* Achievements */}

        <Achievements/>

        <Footer/>

    </div>
  )
}
