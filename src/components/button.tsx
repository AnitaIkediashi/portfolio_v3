import type React from "react"
import { Link } from "react-router"

type ButtonProps = {
    label: string
    className: string
    href?: string
    icon?: React.ReactNode
    disabled?: boolean
    target?: string
}

export const Button = ({ label, href, icon, className, target }: ButtonProps) => {
  if (href) {
    return (
      <Link to={href} className={`${className} cursor-pointer`} target={target}>
        {icon && <span>{icon}</span>}
        {label}
      </Link>
    );
  } else {
    return (
      <button type="button" className={`${className} cursor-pointer`}>
        {icon && <span>{icon}</span>}
        {label}
      </button>
    );
  }
};
