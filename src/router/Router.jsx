import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/home';
import News from '../pages/newsroom/news';
import ViewNews from '../components/newsroom/view_news';
import Vision from '../pages/about/vision';
import Responsibilities from '../pages/about/responsibilities';
import People from '../pages/about/people';
import Agencies from '../pages/about/agencies';
import News_Events from '../pages/news_events/News_Events';
import News_view from '../pages/news_events/news_view';
import Connect from '../pages/connect/connect';
import Authy from '../admin/authy';
import NotFound from '../components/notFound/notFound';
import { ServicesPage } from '../pages/services/ServicesPage';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <NotFound/>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          children: [
            {
              path: "vision",
              element : <Vision/>
            },
            {
              path: "responsibilities",
              element : <Responsibilities/>
            },
            {
              path: "people",
              element : <People/>
            },
            {
              path: "agencies_directorates_units",
              element : <Agencies/>
            }
          ]
        },
        {
          path: "newsroom",
          children : [
            {
              path : ":page",
              element : <News_Events/>
            },
            {
              path : "view/:id",
              element : <News_view/>
            }
          ]
        },
        {
          path : "admin",
          children : [
            {
              path : "",
              element : <Authy/>
            },
            {
              path : ":page",
              element : <Authy/>
            }
          ]
        },
        {
          path: "contact",
          element: <Connect/>
        },
        {
          path: "services",
          element: <ServicesPage/>
        },
      ]
    }
  ]);

  export default router;
  
