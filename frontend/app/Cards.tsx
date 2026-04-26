'use client'
import React from 'react'
import { useRef } from 'react'
// yes i did a whole other tsx file just for cards to look FLAMBOYANT
const Cards = ({ f, i}: any) => {
    const ref = useRef<HTMLDivElement>(null)
    const handleMove = (e: React.MouseEvent) => {
        const card = ref.current
        if(!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = -(y-centerY) / 10
        const rotateY = (x-centerX) / 10
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
        card.style.setProperty('--x', `${x}px`)
        card.style.setProperty('--y', `${y}px`)
    }
    const handleLeave = () => {
        const card = ref.current
        if (!card) return
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    }
  return (
    <div
     ref={ref}
     onMouseMove={handleMove}
     onMouseLeave={handleLeave}
     className='cards'
     >
        <h3 className='text-lg font-semibold text-primary'>{f.title}</h3>
        <p className='text-muted-foreground mt-3'> {f.dsc}</p>
      
    </div>
  )
}

export default Cards
