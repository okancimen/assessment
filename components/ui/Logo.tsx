import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { img: 22, text: 'text-base' },
  md: { img: 28, text: 'text-xl'  },
  lg: { img: 36, text: 'text-2xl' },
}

export default function Logo({ href = '/', size = 'md', className = '' }: LogoProps) {
  const { img, text } = sizes[size]
  const inner = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="Eduentry logo"
        width={img}
        height={img}
        className="object-contain"
        priority
      />
      <span className={`font-bold text-indigo-600 tracking-tight ${text}`}>Eduentry</span>
    </span>
  )
  return href ? <Link href={href}>{inner}</Link> : inner
}
