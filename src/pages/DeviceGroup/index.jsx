import React from "react"
import Style from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout"
import { Title } from "../../components/Text"

const DeviceGroup = () => {
  const { tablet, consoles, computer, tv } = useStaticQuery(graphql`
    query {
      tablet: file(relativePath: { eq: "tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      consoles: file(relativePath: { eq: "consoles.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      computer: file(relativePath: { eq: "computer.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tv: file(relativePath: { eq: "tv.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <Title>Disponível nos seus dispositivos favoritos</Title>
      <section className={Style.wrapper}>
        <div className={Style.item}>
          <div className={Style.wrapperImage}>
            <Img fluid={tv.childImageSharp.fluid} />
          </div>

          <h1>TV</h1>
          <p>Amazon Fire TV</p>
          <p>Android TV</p>
          <p>Apple TV</p>
          <p>Chromecast</p>
          <p>TVs LG</p>
          <p>Roku</p>
          <p>Samsung</p>
        </div>

        <div className={Style.item}>
          <div className={Style.wrapperImage}>
            <Img fluid={computer.childImageSharp.fluid} />
          </div>
          <h1>Computador</h1>
          <p>Chrome OS</p>
          <p>MacOS</p>
          <p>PC Windows</p>
        </div>

        <div className={Style.item}>
          <div className={Style.wrapperImage}>
            <Img fluid={tablet.childImageSharp.fluid} />
          </div>
          <h1>Celulares e tablets</h1>
          <p>Tablets Amazon Fire</p>
          <p>Celulares e tablets Android</p>
          <p>iPhone e iPad</p>
        </div>

        <div className={Style.item}>
          <div className={Style.wrapperImage}>
            <Img fluid={consoles.childImageSharp.fluid} />
          </div>
          <h1>Videogames</h1>
          <p>PS4</p>
          <p>PS5</p>
          <p>Xbox One</p>
          <p>Xbox Series X</p>
          <p>Xbox Series S</p>
        </div>
      </section>
    </Layout>
  )
}

export default DeviceGroup
