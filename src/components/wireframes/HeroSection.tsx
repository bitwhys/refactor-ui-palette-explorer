import React from 'react'

export type HeroSectionProps = {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <li>
      <div className="skeleton__box">
        <header className="skeleton__hd">
          <div className="pr"></div>
          <div className="sp"></div>
        </header>
        <section className="skeleton__ct">
          <div className="bn"></div>
        </section>
      </div>
    </li>
  )
}

export default HeroSection
