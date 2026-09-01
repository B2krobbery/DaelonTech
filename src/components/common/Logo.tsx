import { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function Logo({ size = 32, ...props }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="DaelonTech Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
      {...props as any}
    />
  )
}
