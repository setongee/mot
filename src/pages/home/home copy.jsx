import React from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import stat from '../../assets/landing/stats.png'

import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'

export default function Home() {
  return (
    <div className="home">

        <div className="tippytoe">

            <div className="lines line_a"></div>
            <div className="lines line_b"></div>
            <div className="lines line_c"></div>
            <div className="lines line_d"></div>
            <div className="lines line_e"></div>
            <div className="lines line_f"></div>

            <Container>

                <div className="landing__area">

                    <div className="text__part">

                        <span>Ministry of Economic,Planning and Budget</span>

                        <h1>Building a Resilient Lagos through Data-Driven Planning and Effective Budgeting</h1>
                        
                        <p>Empowering Lagos with strategic insights and responsible budgeting to ensure sustainable growth and economic resilience.</p>

                    </div>

                </div>

                <div className="budgetting">

                    <div className="budget__card">
                        
                    </div>

                </div>

            </Container>

        </div>

        <div className="news-flat">
            <Container>
                <Newsroom/>
            </Container>
        </div>

        {/* <Footer/> */}

    </div>
  )
}
