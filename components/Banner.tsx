import Image from 'next/image'
import React from 'react'

interface Props {
    // any props that come into the component
    title:string,
    subtitle:string,
    imgURL?:string
}

const Banner: React.FunctionComponent<Props> = ({title,subtitle,imgURL}) => {
    // const {title,subtitle,imgURL} = props
    const handleOnPlay = ()=>{
        console.log("You clicked the play button")
    }
  return (
    <div>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
        <button onClick={handleOnPlay}>Play</button>
        {/* <div className={`bg-[url(${imgURL})] w-full h-full absolute bg-cover bg-center`}></div> */}
        {/* <Image 
        src = {`${imgURL}`}
        layout="fill"
        objectFit="cover"
        alt='Banner image'
        /> */}
    </div>
  )
}

export default Banner