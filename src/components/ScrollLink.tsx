import type { MouseEvent, ReactNode } from 'react'
import { scrollToSection } from '../utils/scroll'

interface ScrollLinkProps {
  to: string
  className?: string
  children: ReactNode
}

export default function ScrollLink({ to, className, children }: ScrollLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToSection(to)
  }

  return (
    <a href={`#${to}`} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
