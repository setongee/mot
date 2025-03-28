import React from 'react'
import './achievements.scss'

import met1 from '../../assets/metrics/1.svg'
import met2 from '../../assets/metrics/2.svg'
import met3 from '../../assets/metrics/3.svg'
import met4 from '../../assets/metrics/4.svg'
import met5 from '../../assets/metrics/5.svg'
import met6 from '../../assets/metrics/6.svg'
import Container from '../container/Container'

export default function Achievements() {

    const metrics = [met1, met2, met3, met4, met5, met6]

  return (

    <Container>

        <div className="achievements" id='achievements'>

            <div className="metrics__title">
                Driving Progress : <span>Key Achievements of the Lagos Ministry of Transport</span>
            </div>

            <div className="metrics">

                {
                    metrics.map( (met, index) => <div className="metric"><img key = {index} src={met} alt="Lagos Minitry of Transpoortaion Achievements" /></div> )
                }

            </div>

        </div>

    </Container>

  )

}
