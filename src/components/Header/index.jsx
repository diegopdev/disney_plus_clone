import React, { useState, useEffect } from "react"
import logo from "../../images/logo.svg"
import { PrimaryButtonSmall, SecundaryButton } from "../Buttons"
import Styles from "./styles.module.scss"

const Header = ({active}) => {

  // const active = false
  console.log(active)

  return (
    <>
      <div className={[Styles.header, active ? Styles.headerActive : ""].join(' ')} >
        <img className={[Styles.logo, active ? Styles.activeLogo : ""].join(' ')}  src={logo} alt="Logo" />

        <div className={Styles.wrapper} >
          <div className={[Styles.wrapprSecundaryButton, active ? Styles.activeButton : ""].join(' ')} >
            <PrimaryButtonSmall
              style={{ marginRight: 20 }}
              title="Teste Grátis"
            />
          </div>

          <SecundaryButton title="Entrar" />
        </div>
      </div>
    </>
  )
}

export default Header
