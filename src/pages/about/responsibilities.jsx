import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import Footer from '../../components/footer/footerArea'

import { getAdminData } from '../../api/core/admin'

export default function Responsibilities() {
    
      useEffect(() => {
    
        getAdminData("mot").then( res => {
            addContent(res[0]?.responsibilities);
        } )
    
    }, []); 

    const addContent = (response) => {
    
        const content = document.getElementById('content');
        content.innerHTML = response;

        console.log(response);
    
    }

  return (
    
        <div className="about__sections">

            <Container>

                 <div className="title">

                    <h1>Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles</h1>

                    <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>

                </div>
                
                <div className="holder">

                    <div className="mda__head">

                        <div className="mda__info">

                            <div className="lead">Responsibilities of the Ministry of Transportation </div>

                        </div>
                    </div>

                    <div className="mda__content" id='content'></div>
                    
                </div>

            </Container>

            <Footer/>
        </div>

  )

}
