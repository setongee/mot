import Reac, {useState, useEffect} from 'react'
import './services.scss'
import Container from '../../components/container/Container'
import { getAllServicesCategory } from '../../api/core/services.req';
import ServiceItem from './ServiceItem';
import Loader from '../../components/loader/loader';
import Footer from '../../components/footer/footerArea';

export const ServicesPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        
        return () => {

            getAllServicesCategory("transportation")
            .then( e => setData(e.data) )
            
        };

    }, [data]);


if(!data.length) return <Loader/>

  return (
    
    <div className="servicesPage">

        <Container>

            <div className="services__title">

                <h1>Explore Lagos State Ministry of Transportation : <span> Browse all Services in One Place </span> </h1>

                <p>Discover and Access All Transportation Services in Lagos State with Ease</p>

            </div>

            <div className="services__card">
                
                {
                    data.length ? data.map( res => <ServiceItem data = {res} /> ) : null
                }

            </div>

        </Container>

        <Footer/>

    </div>

  )

}
