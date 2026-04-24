'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const unblockAudio = () =>{
      hoverSound.play().catch(() =>{})
      hoverSound.pause()
      hoverSound.currentTime = 0
      clickSound.play().catch(() => {})
      clickSound.pause()
      clickSound.currentTime = 0
    }
    window.addEventListener('click', unblockAudio, {once : true})
    const hoverSound = new Audio('/ah.mp3')
    const clickSound = new Audio('/nih.mp3')

    hoverSound.volume = 0.08
    clickSound.volume = 0.2

    const handleHover = () => {
      hoverSound.currentTime = 0
      hoverSound.play().catch(() => {})
    }

    const handleClick = () => {
      clickSound.currentTime = 0
      clickSound.play().catch(() => {})
    }

    const elements = document.querySelectorAll('button, a')

    elements.forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('click', handleClick)
    })

    const cursor = document.getElementById('cursor') as HTMLElement | null
    const cursorDot = document.getElementById('cursorDot') as HTMLElement | null

    const moveCursor = (e: globalThis.MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    window.addEventListener('mousemove', moveCursor)

    // non magnetic effect, yes i spent hours of my precious life building this (completely no need and wasted like 3 hrs watching a tutorial and i barely even understand it btw)
    elements.forEach(el => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        el.animate(
          { transform: `translate(${x * 0.2}px, ${y * 0.2}px)` },
          { duration: 150, fill: 'forwards' }
        )
      }

      const leave = () => {
        el.animate(
          { transform: 'translate(0px, 0px)' },
          { duration: 150, fill: 'forwards' }
        )
      }

      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('click', handleClick)
      })
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative cursor-none">
      {/* yes i spent time from my pathetic life buiding a specific cursor, i regret it */}
      <div
        id="cursor"
        className="fixed w-8 h-8 border border-primary rounded-full pointer-events-none z-50 transition-transform duration-75"
      />
      <div
        id="cursorDot"
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
      />

      {/* splittin the bg into cool squares to look extra cool */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow boobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-accent/30 blur-[120px] rounded-full" />

      {/* that bar thingy i think it was called hotbar or navbar, so funny */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <h1 className="text-2xl font-bold tracking-widest text-primary text-glow">OUTCODE</h1>
        <button className="btn glow">Join</button>
      </nav>

      {/* some section ig */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-glow"
        >
          OutCode
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl mt-6 max-w-xl text-muted-foreground"
        >
          A next-gen programming territory. <br/> Compete, Solve, Rank and prove to everyone that you can
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <button className="btn glow text-xl">Start some shit</button>
          <button className="btn text-xl">Leaderboard</button>
        </motion.div>
      </section>

       {/* i think this is called futures */}
      <section className="grid md:grid-cols-3 gap-6 px-8 mt-40 relative z-10">
        {[
          {
            title: 'Real Problems',
            dsc: 'Interview-level challenges curated for real growth.'
          },
          {
            title: 'Live Battles',
            dsc: 'Compete in real time and climb the leaderboard.'
          },
          {
            title: 'please kamohelo.',
            dsc: 'may the big lord kamo build this and add another feature cus i am outa ideas'
          }
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-xl hover:border-primary transition"
          >
            <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
            <p className="text-muted-foreground mt-3">{f.dsc}</p>
          </motion.div>
        ))}
      </section>

      {/* giving this crazy code look as if i actually did something 😁 */}
      <section className="mt-40 px-8 relative z-10">
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-card border border-border font-mono text-sm">
          <p className="text-green-400">&gt; initializing outcode...</p>
          <p className="text-green-400">&gt; loading challenges...</p>
          <p className="text-green-400">&gt; connecting players...</p>
          <p className="text-primary">&gt; ready.</p>
        </div>
      </section>

      {/* some styles i had to add and google suggested this */}
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
        }
      `}</style>
{/* yk they say no footer no winner, they never said this */}
      <footer className="text-center py-10 mt-40 text-muted-foreground text-sm relative z-10">
        © {new Date().getFullYear()} OutCode. Built for coders.
      </footer>
    </main>
  )
}
