import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import '../../styles/card__ui.scss'
import { ArrowUpRight, Cellar, City, Hospital } from 'iconoir-react'
import { getAdminData } from '../../api/core/admin';

import dept from '../../assets/MDA/department.svg'

export default function Agencies() {

  const [agency, setAgency] = useState({});

useEffect(() => {

    getAdminData("mot")
    .then( res => {
        refixArr(res[0].agencies);
    } )

}, []);  

const refixArr = (q) => {

    const newObj = {};

    q.forEach(e => {
        
        if(!newObj[e.category]){

            newObj[e.category] = { name : e.category, data : [] }

        }

        newObj[e.category].data.push(e)

    });

    setAgency(newObj);

}

  return (
    <div className="about__sections">

        <Container>

            <div className="title">

                <h1>Agencies, Directorates, and Units: Exploring Structure, Roles, and Responsibilities</h1>

                <span>Understanding Organizational Divisions and Their Roles in Effective Operations and Governance</span>

            </div>

            <div id="agency">
            
                {
                    Object.entries(agency).map( (e, index) => (

                        <section id={ e[0] === "department" ? "directorates" : e[0] } className = "multi" key = {index}>

                            <h1> {e[0]} </h1>

                            <div className="mda__card__ui flex gap__20">

                                {
                                    e[1].data.map( (res, index) => (

                                        <div className="mda__card" key = {index}>

                                            <div className="iconHolder">

                                                <div className="card__photo">
                                                    <img src = {dept} />
                                                </div>

                                            </div>

                                            <div className="card__content">

                                            <p>{res.name}</p>
                                            <span> <Cellar/> {e[0]} </span>
                                                
                                            </div>

                                        </div>
                                    ) )
                                }

                            </div>

                        </section>

                    ) )
                }
                
            </div>

        </Container>

    </div>
  )
}
