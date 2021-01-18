import React from "react"
import Style from "./styles.module.scss"

import SEO from "../seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="Disney+ | O melhor da Disney, Marvel, Pixar, Star Wars e National Geographic em um só lugar." />
      <div className={Style.background}>
        <div className={Style.layout}>{children}</div>
      </div>
    </>
  )
}

export default Layout
