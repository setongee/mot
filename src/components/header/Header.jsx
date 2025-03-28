import React, {useEffect, useState} from 'react'
import './header.scss'
import Container from '../container/Container'
import logo from '../../assets/logo/lagos_state_ministry_of_transportation_logo.png'
import Button from '../button/Button'
import { useLocation } from 'react-router-dom'
import dropdownImg from '../../assets/mepb.png'
import { ArrowUpRight, FacebookTag, Instagram, Linkedin, Menu, NavArrowDown, Twitter } from 'iconoir-react'

export default function Header() {

  var location = useLocation().pathname.split('/')[1];
  const [show, setShow] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {

    const nav__lists = document.querySelector('.navigations');
    const active = nav__lists.querySelector('.current');

    if (active !== null){
      active.classList.remove('current');
    }else{
      console.log('sorry this url is not correct!');
    }
    
    const nav = Array.from(document.querySelectorAll('#nav'));
    const getnav = nav.filter((navigation => {
      
      var data = navigation.dataset.navigation;

      return data === location;

    }) )

    if (getnav.length){
      getnav[0].classList.add('current');
    }

    setShow(false);

  }, [location]);

  useEffect(() => {
    
    if (show){
      document.body.parentElement.style.overflow = "hidden"
    } else{
     document.body.parentElement.style.overflow = "visible"
     setIsDropdown(false);
    }
    
  }, [show]);

  return (

    <div className="header header_type_drill flex flex__align__center font__12 text__trend ">

        <Container customClass = 'flex__combo__align__spacebtw'>

            <div className="brand_area flex flex__align__center gap__15" onClick={()=>window.location.href = "/home"}>

              <div className="logo image__logo image__item"> 
                <img src={logo} alt="Lagos State Government Ministry, Department & Agency" /> 
              </div>

              <p className="font__12 text__trend brand__name"> Lagos state Ministry of Transportation </p>

            </div>

            {/* navigations */}

            <div className="navigations flex flex__align__center font__weight__600 desktop">

                <li id='nav' className='flex flex__align__center current' data-navigation = 'home'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/home"> Home </a>
                </li>

                <li id='nav' className='flex flex__align__center pin drop' data-navigation = 'about' >

                  <a className='dark  font__12 text__trend letter__spacing__2'> <div className="main__nav">About</div> <div className="icon"><NavArrowDown/></div> </a>

                  <div className="dropdown flex gap__20">

                    <div className="photo__in"><img src={dropdownImg} alt="" /></div>

                    <div className="ui__list">
                      <a href='/about/vision' className="list"> 
                        <p> Vision, Mission and Structure </p>
                        <span>Get to Know who we are, What we do, our goals and our organizational Structure.</span>
                      </a>

                      <a className="list" href='/about/responsibilities'> 
                        <p> Ministerial Mandates, Responsibilities & Functions </p>
                        <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>
                      </a>

                      <a className="list" href='/about/people'> 
                        <p> Top Management Officials </p>
                        <span>Strategic leaders driving vision, growth, and organizational success.</span>
                      </a>

                      <a className="list" href='/about/agencies_directorates_units'> 
                        <p> Agencies, Directorates & Units </p>
                        <span>Get to Know who we are, What we do and our goals.</span>
                      </a>
                    </div>
                    

                  </div>

                </li>

                <li id='nav' className='flex flex__align__center' data-navigation = 'newsroom'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/newsroom/1"> Newsroom </a>
                </li>


                <li id='nav' className='flex flex__align__center' data-navigation = 'contact'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/contact">Contact</a>
                </li>

                <li id='nav' className='flex flex__align__center special__btn' data-navigation = 'services'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/services">Explore Services <ArrowUpRight/> </a>
                </li>

            </div>



            {/* mobile arena */}

            <div className="burger mobile" onClick={()=>setShow(!show)}> <Menu/> </div>

            {
              
              show ? 

              (<div className="navigations flex flex__align__center gap__40 font__weight__600 mob">

                  <li id='nav' className='flex flex__align__center' data-navigation = 'home'>
                    <a className='dark  font__12 text__trend letter__spacing__2' href="/home"> Home </a>
                  </li>
                  
                  <li id='nav' className='flex flex__align__center dropdown__sm' data-navigation = 'about'>

                    <a className={ `dark  font__12 text__trend letter__spacing__2 ${isDropdown ? "drop__active" : ""}`} onClick={ () => setIsDropdown(!isDropdown) } > About </a>

                    {
                      
                      isDropdown ? 

                      <div className="drop__items">

                        <a className='dark  font__12 text__trend letter__spacing__2' href="/about/vision"> Vision & Mission </a>
                        <a className='dark  font__12 text__trend letter__spacing__2' href="/about/responsibilities"> Ministerial Mandates </a>
                        <a className='dark  font__12 text__trend letter__spacing__2' href="/about/people"> Top Management </a>
                        <a className='dark  font__12 text__trend letter__spacing__2' href="/about/agencies_directorates_units"> Agencies </a>
                      
                      </div> : null

                    }


                  </li>

                  <li id='nav' className='flex flex__align__center' data-navigation = 'services'>
                    <a className='dark  font__12 text__trend letter__spacing__2' href="/services"> Services</a>
                  </li>

                  <li id='nav' className='flex flex__align__center' data-navigation = 'newsroom'>
                    <a className='dark  font__12 text__trend letter__spacing__2' href="/newsroom/1"> Newsroom </a>
                  </li>

                  <li id='nav' className='flex flex__align__center' data-navigation = 'contact'>
                    <a className='dark  font__12 text__trend letter__spacing__2' href="/contact">Contact</a>
                  </li>


              </div> ): null

            }

        </Container>

    </div>

  )
}
