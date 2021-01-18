import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "../../components/Gallery"

const Original = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        filter: {
          extension: { eq: "jpg" }
          name: { regex: "/original/" }
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
      hasButton
      data={gallery}
      title="Originais Disney+ exclusivos"
      description="ó no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos inéditos."
    />
  )
}

export default Original
