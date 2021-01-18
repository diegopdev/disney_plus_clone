import React from "react"
import Layout from "../../components/Layout"
import Style from "./styles.module.scss"

import Logo from '../../images/logo.svg'




const Footer = () => {
  return (
    <Layout>
      <footer>
        <div className={Style.wrapperImage}>
          <img src={Logo}/>
        </div>
        <div className={Style.wrapperLinks}>
          <a href="">Português</a>

          <a href="">Contrato de Assinatura</a>

          <a href="">Política de privacidade</a>

          <a href="">Proteção de Dados no Brasil</a>

          <a href="">Anúncios personalizados</a>

          <a href="">Dispositivos compatíveis</a>

          <a href="">Ajuda</a>

          <a href="">Sobre o Disney+</a>
        </div>
        <p className={Style.infos}>
          © 2020 Disney e seu grupo de empresas afiliadas. Todos os direitos
          reservados.
        </p>
        <p className={Style.footerInfos}>
          Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e
          condições. O serviço Disney+ é comercializado por The Walt Disney
          Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
          12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil
          e CNPJ/M 73.042.962/0004-20
        </p>
      </footer>
    </Layout>
  )
}

export default Footer
