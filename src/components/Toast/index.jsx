import React from 'react';
import {PrimaryButtonSmall} from '../Buttons'
import Style from './styles.module.scss'

const Toast = ({active}) => {
  return (
       <div className={[Style.container, active ? Style.active: ''].join(' ')}>
           <PrimaryButtonSmall title="Teste Grátis"/>
       </div>
  )
}

export default Toast;