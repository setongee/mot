import React from 'react'
import { truncateText } from '../../middleware/middleware';

export default function ServiceItem({data}) {

  return (

    <div className="item" onClick = { () => window.open(data.url) } >

        <div className="item__icon"><img src="https://res.cloudinary.com/dirmxkznt/image/upload/v1730076603/Transportation.svg" alt="https://res.cloudinary.com/dirmxkznt/image/upload/v1730076603/Transportation.svg" /></div>

        <div className="item__name">
            {data.name}
        </div>

        <div className="item__short"> { truncateText(data.short, 50) } </div>

    </div>

  )

}
