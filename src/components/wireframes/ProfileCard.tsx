import React from 'react'

export type ProfileCardProps = {}

const ProfileCard = ({}: ProfileCardProps) => {
  return (
    <li data-item-num="3">
      <div className="skeleton__box">
        <header className="skeleton__hd">
          <div className="pr_b"></div>
          <div className="tt"></div>
        </header>
        <section className="skeleton__ct">
          <div className="th"></div>
          <div className="ct"></div>
        </section>
      </div>
    </li>
  )
}

export default ProfileCard
