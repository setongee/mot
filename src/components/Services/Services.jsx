import React from 'react'
import './services.scss'

import roadW from '../../assets/services/road.jpg'
import lagride from '../../assets/services/tms.jpeg'
import plate from '../../assets/services/bm.jpg'
import drivers from '../../assets/services/drivers.jpg'
import { ArrowUpRight } from 'iconoir-react'
import { truncateText } from '../../middleware/middleware'

export default function Services() {

  return (

    <div className="mot__services flex">

        <div className="motServices__cards index__card">

            <div className="card__title"> Check out our <span>citizens</span> services</div>
            <div className="ref"><a href="/services"> View All services (22) </a></div>

            <div className="arrowOut">
                <ArrowUpRight/>
            </div>

        </div>

        <div className="motServices__cards">

            <div className="photoScale"><img src={roadW} alt="" /></div>

            <div className="card__info">

                <div className="info__topic"> Road Worthiness Certificate </div>

                <p className='desk'> Online payment of RWC, Renewal insurance of referral certificate; Printing of Proof of Ownership Certificate </p>
                <p className='mob'> {truncateText("Online payment of RWC, Renewal insurance of referral certificate; Printing of Proof of Ownership Certificate", 60)} </p>

                <a target = "_blank" href="https://selfservice.lagroute.org/"> Get Started Now </a>

            </div>

        </div>

        <div className="motServices__cards">

            <div className="photoScale"><img src={drivers} alt="" /></div>
            <div className="card__info">
                <div className="info__topic"> Lagos State Drivers' Institute (LASDRI) </div>

                <p className='desk'> To facilitate the training and re-training of motor vehicle drivers and certifying them for safety in Lagos State </p>
                
                <p className='mob'>{truncateText("To facilitate the training and re-training of motor vehicle drivers and certifying them for safety in Lagos State", 60)}</p>

                <a target = "_blank" href="https://selfservice.lagroute.org/">Apply Now </a>
            </div>

        </div>

        <div className="motServices__cards">

            <div className="photoScale"><img src={plate} alt="" /></div>
            <div className="card__info">

                <div className="info__topic">PlateDetect by Vehicle Inspection Services (VIS) </div>

                <p className='desk'> PlateDetect is a Traffic analytics and access control application developed for Lagos State’s Vehicle Inspection Service to track, monitor and book traffic offenders. </p>

                <p className='mob'> {truncateText("PlateDetect is a Traffic analytics and access control application developed for Lagos State’s Vehicle Inspection Service to track, monitor and book traffic offenders.",60)} </p>

                <a target = "_blank" href="https://payvis.ng/"> Pay Fine / Learn More </a>
            </div>

        </div>

        <div className="motServices__cards">

            <div className="photoScale"><img src={lagride} alt="" /></div>
            <div className="card__info">

                <div className="info__topic lastie"> ⁠Lagos State Traffic Management System (LASG-TMS) by LASTMA </div>

                <p className='desk'> TMS provides State appointed traffic officers with a platform to carry out their duties of maintaining compliance to and the enforcement of traffic laws in a professional and courteous manner. </p>

                <p className='mob'> {truncateText("TMS provides State appointed traffic officers with a platform to carry out their duties of maintaining compliance to and the enforcement of traffic laws in a professional and courteous manner.", 60)  } </p>

                <a target = "_blank" href="https://selfservice.lagroute.org/"> Get Started Now </a>
            </div>

        </div>

    </div>

  )

}
