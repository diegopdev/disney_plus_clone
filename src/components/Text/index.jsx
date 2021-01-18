import React from 'react';
import Style from './styles.module.scss'

export const Title = ({children, ...props}) => {
  return <h3 {...props} className={Style.title}>{children}</h3>;
}

export const Description = ({children, ...props}) => {
    return <p {...props} className={Style.description}>{children}</p>;
}

export const TitleSecundary = ({children, ...props}) => {
  return <h3 {...props} className={[Style.title, Style.titleSecundary].join(' ')}>{children}</h3>;
}

export const DescriptionSecundary = ({children, ...props}) => {
    return <p {...props} className={[Style.description, Style.descriptionSecundary].join(' ')}>{children}</p>;
}

