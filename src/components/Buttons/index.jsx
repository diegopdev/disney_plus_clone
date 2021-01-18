import React from "react"
import Style from "./styles.module.scss"

export const PrimaryButton = ({ title, click, ...props }) => {
  return (
    <button
      className={[Style.button, Style.primary].join(" ")}
      onClick={() => click()}
      {...props}
    >
      {title}
    </button>
  )
}

export const PrimaryButtonSmall = ({ title, click, ...props }) => {
  return (
    <button
      className={[Style.button, Style.primarySmall].join(" ")}
      onClick={() => click()}
      {...props}
    >
      {title}
    </button>
  )
}

export const PrimaryButtonLarge = ({ title, click, ...props }) => {
  return (
    <button
      className={[Style.button, Style.primaryLarge].join(" ")}
      onClick={() => click()}
      {...props}
    >
      {title}
    </button>
  )
}

export const SecundaryButton = ({ title, click, ...props }) => {
  return (
    <button
    
      className={[Style.button, Style.secundary].join(" ")}
      onClick={() => click()}
      {...props}
    >
      {title}
    </button>
  )
}
