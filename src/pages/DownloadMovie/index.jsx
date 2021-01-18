import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Style from "./styles.module.scss"
import { DescriptionSecundary, TitleSecundary } from "../../components/Text"

const DownloadMovie = () => {
  const { desktopImage, mobileImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "LionKing_Mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "LionKing_Desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Layout>
      <div className={Style.wrapperImage}>
        <div className={Style.wrapperText}>
          <TitleSecundary>Baixe filmes e séries</TitleSecundary>
          <DescriptionSecundary>
            Baixe e assista quando e onde quiser. Assim, seus favoritos estão
            sempre com você, até mesmo sem internet.
          </DescriptionSecundary>
        </div>
        <Img fluid={sources} />
      </div>
    </Layout>
  )
}

export default DownloadMovie
