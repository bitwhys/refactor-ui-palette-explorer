import React from 'react'

export type SearchResultsProps = {}

const SearchResults = ({}: SearchResultsProps) => {
  return (
    <li data-item-num="4">
      <div className="skeleton__box">
        <header className="skeleton__hd">
          <div className="pr_s"></div>
          <div className="tt"></div>
        </header>
        <section className="skeleton__ct">
          <div className="cd"></div>
          <div className="cd"></div>
          <div className="cd"></div>
        </section>
      </div>
    </li>
  )
}

export default SearchResults
