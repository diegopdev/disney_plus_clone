import React, { useRef, useEffect, useState } from "react"
import "./styles.scss"

import Header from "../components/Header"
import Home from "./Home"
import Devices from "./Devices"
import Original from "./Original"
import ForFun from "./ForFun"
import DownloadMovie from "./DownloadMovie"
import DeviceGroup from "./DeviceGroup"
import Footer from "./Footer"
import Toast from "../components/Toast"

const IndexPage = () => {
  const [active, setActive] = useState(false)
  const devicesRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(devicesRef?.current?.offsetTop)
      console.log(window.pageYOffset + (window.innerHeight * 3) / 4)

      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4
      if (windowTop > devicesRef?.current?.offsetTop + 300) {
        console.log("entro no if")
        setActive(true)
      } else {
        setActive(false)
        console.log("entro no else")
      }
    })
  }, [])

  return (
    <>
      <Header active={active} />
      <Home />
      <Devices ref={devicesRef} />
      <Original />
      <DownloadMovie />
      <ForFun />
      <DeviceGroup />
      <Footer />
      <Toast active={active} />
    </>
  )
}

export default IndexPage
