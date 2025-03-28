import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';

const Statistics = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [ stat, setStat ] = useState({});

  const onChange = (e) => {

    setStat( () => {

      return {
        ...stat,
        [e.target.name] : e.target.value
      }

    } )

  }

  const submitStat = () => {

    data.statistics = stat;
    updateData();

  }

  useEffect(() => {
  
      setData(inData);
      setStat(inData.statistics);
  
    }, [inData]);

    console.log(data.stat)

  const updateData = () => {

    setIsLoading(true);

    updateAdminData(data._id, data)
    .then(e => {
      setTimeout(() => {

        setIsLoading(false);
        setMessage(e.message);

        setTimeout(() => {

          setMessage("")
          
        }, 3000);
        
      }, 1000);

    })
    .catch(err => console.log(err));

  }
console.log(stat)

  return (

    <div className="cantact__body">

      {
        isLoading ? <div className="loading"> <Loader/> </div> : null
      }

      {
        
        message !== "" ? <div className="messageAlert"> 

          <div className="photoIcon"> 
            <img src={check} alt="check icon for success" /> 
          </div> 
          
          {message} 
          
          </div> 
          
          : null

      }

      <div className="titleAdmin flex">

        <p> Landing Page Statistics </p>

        <div className="actionBtn" onClick={ () => submitStat() } >Save Changes</div>

      </div>
      
      <form>

          <div className="form__child">

            <label htmlFor="name"> Budget Size </label>
            <input type="text" name = "budgetSize" placeholder='Enter Budget Size' value={stat?.budgetSize} onChange={ (e) => onChange(e) } />

          </div>

          <div className="form__child">

            <label htmlFor="name"> Recurrent Expenditure </label>
            <input type="text" name = "expenditure" placeholder='Enter Recurrent Expenditure' value={stat?.expenditure} onChange={ (e) => onChange(e) } />

          </div>

          <div className="form__child">

            <label htmlFor="name"> Capital Expenditure </label>
            <input type="text" name = "capex" placeholder='Enter Capital Expenditure' value={stat?.capex} onChange={ (e) => onChange(e) } />

          </div>

          <div className="form__child">

            <label htmlFor="name"> IGR </label>
            <input type="text" name = "igr" placeholder='Enter IGR' value={stat?.igr} onChange={ (e) => onChange(e) } />

          </div>

      </form>

    </div>

  )

}

export default Statistics

