import React from "react"
import { Description, Title } from "../Text"
import Img from "gatsby-image"
import Style from "./styles.module.scss"
import Layout from "../Layout"
import { PrimaryButtonLarge } from "../Buttons"

const Gallery = ({ data, title, description, hasButton }) => {
  return (
    <Layout>
      <div className={Style.wrapper}>
        <Title>{title}</Title>
        <Description>{description}</Description>

        {data.nodes.map(image => (
          <div key={image.id} className={Style.wrapperImage}>
            <Img
              className={Style.image}
              fluid={image.childImageSharp.fluid}
              alt="Gallery"
            />
          </div>
        ))}
      </div>
      {hasButton && (
        <div className={Style.wrapperButton}>
          <PrimaryButtonLarge title="Teste Grátis" />
        </div>
      )}
    </Layout>
  )
}

export default Gallery
