import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PrimaryButton } from "../../components/Buttons"
import logo from "../../images/logo.svg"
import arrow from "../../images/arrow-down.svg"
import Style from "./style.module.scss"

const Home = () => {
  const { catalog } = useStaticQuery(graphql`
    query {
      catalog: file(relativePath: { eq: "catalog.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={Style.wrapperBackground}>
      <div className={Style.heroContent}>
        <div className={Style.meta}>
        <picture className={Style.logo}>
          <img  src={logo} alt="Logo" />
        </picture>
        <h1>As melhores histórias em um só lugar.</h1>
        <div className={Style.wrapperInfo}>
          <div className={Style.wrapperInfoMonth}>
            <h3>
              R$ 27,90<span>/mês*</span>
            </h3>
            <p>Inclui teste grátis de 7 dias.</p>
            <PrimaryButton title="Teste Grátis" />
          </div>
          <div className={Style.separator}/>
          <div className={Style.wrapperInfoYear}>
            <h3>
              De R$ 334 por R$ 279,90<span>/ano*</span>
            </h3>
            <p>Inclui teste grátis de 7 dias.</p>
            <PrimaryButton title="Teste Grátis" />
          </div>
          </div>
          
        </div>
        <div>
            <p className={Style.note}>
              *Preço mensal: BRL 27,90. Preço anual: BRL 279,90 à vista.
              Encargos e impostos podem ser aplicáveis.
            </p>
          </div>

        <div id="teste" className={Style.wrapperCatalog}>
          <div>
            <Img
              className={Style.imgCatalog}
              fluid={catalog.childImageSharp.fixed}
              alt="catalog"
            />
          </div>
          <a href="#devices" >
            <img src={arrow} className={Style.arrowSvg}/>
          </a>
        </div>

        <div className={Style.backgroundLarger}>
          <div className={Style.backgroundLargerWrapper} />
          <div className={Style.backgroundSmallWrapper} />
        </div>
      </div>
    </section>
  )
}

export default Home
