'use client'
import dynamic from 'next/dynamic'

export const LazyTestimonialsCarousel = dynamic(() => import('./TestimonialsCarousel'), { ssr: false })
export const LazyTestimonialsCarouselTR = dynamic(() => import('./TestimonialsCarouselTR'), { ssr: false })
export const LazyTestimonialsCarouselRU = dynamic(() => import('./TestimonialsCarouselRU'), { ssr: false })
export const LazyTestimonialsCarouselES = dynamic(() => import('./TestimonialsCarouselES'), { ssr: false })
export const LazyTestimonialsCarouselZH = dynamic(() => import('./TestimonialsCarouselZH'), { ssr: false })
