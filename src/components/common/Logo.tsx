import { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function Logo({ size = 32, ...props }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Clean Isometric Cube Fallback */}
      <polygon points="50,10 85,30 50,50 15,30" fill="currentColor" opacity="0.8" />
      <polygon points="15,30 50,50 50,90 15,70" fill="currentColor" />
      <polygon points="85,30 85,70 50,90 50,50" fill="var(--accent)" />
    </svg>
  )
}
