'use client'

import { useEffect } from 'react'

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Confetti() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    Object.assign(canvas.style, {
      position: 'fixed', top: '0', left: '0',
      width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '9999',
    })
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')!

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f472b6']
    const particles = Array.from({ length: 160 }, () => ({
      x: rand(0, canvas.width),
      y: rand(-120, -10),
      vx: rand(-2, 2),
      vy: rand(3, 7),
      color: colors[Math.floor(Math.random() * colors.length)],
      w: rand(8, 14),
      h: rand(4, 7),
      rot: rand(0, Math.PI * 2),
      rotV: rand(-0.12, 0.12),
    }))

    const START = Date.now()
    const DURATION = 3500
    let raf: number

    function frame() {
      const elapsed = Date.now() - START
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const alpha = elapsed > DURATION - 800 ? 1 - (elapsed - (DURATION - 800)) / 800 : 1

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rot += p.rotV
        ctx.save()
        ctx.globalAlpha = Math.max(0, alpha)
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      }

      if (elapsed < DURATION) raf = requestAnimationFrame(frame)
      else canvas.remove()
    }

    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); canvas.remove() }
  }, [])

  return null
}
