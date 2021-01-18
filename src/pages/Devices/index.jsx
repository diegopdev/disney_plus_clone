import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Style from "./styles.module.scss"
import { DescriptionSecundary, TitleSecundary } from "../../components/Text"


const Devices = (props, ref) => {
  const { desktopImage, mobileImage } = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "screenMobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "screenDesktop.png" }
    ) {
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
      <section ref={ref} id="devices" className={Style.wrapper}>

        <div className={Style.wrapperInfos}>
          <TitleSecundary>Assista do seu jeito</TitleSecundary>
          <DescriptionSecundary>
            Aproveite a tela grande da TV ou assista no tablet, laptop, celular
            e outros aparelhos. Nossa seleção de títulos em 4K não para de
            crescer. Além disso, para a felicidade de todos, é possível assistir
            em até 4 telas ao mesmo tempo.
          </DescriptionSecundary>
        </div>
        <div className={Style.wrapperImage}>
          <Img fluid={sources} />
        </div>
      </section>
    </Layout>
  )
}

export default React.forwardRef(Devices) 