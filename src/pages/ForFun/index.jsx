import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "../../components/Gallery"

const ForFun = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        filter: {
          name: { regex: "/forfun/" }
          absolutePath: { regex: "/images/" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)


  return (
    <Gallery
      data={gallery}
      title="Diversão sem limites"
      description="Descubra as melhores histórias da Disney, Pixar, Marvel, Star Wars e National Geographic em um só lugar. De sucessos de bilheteria até clássicos e novidades originais, temos opções para todos os gostos."
    />
  )
}

export default ForFun
