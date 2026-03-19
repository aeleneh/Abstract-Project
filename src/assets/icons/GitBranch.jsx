import React from 'react'

const GitBranch = ({width = 24, height = 24}) => {
    return (
        <svg width="120" height="130" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="16" x2="40" y2="110" stroke="#7A8CC4" stroke-width="4" stroke-linecap="round"/>
        <path d="M40 50 Q40 72 68 72 L68 100" fill="none" stroke="#E8C040" stroke-width="4" stroke-linecap="round"/>
        <circle cx="40" cy="16" r="10" fill="#9AAAD8" stroke="#5A6AAA" stroke-width="2.5"/>
        <circle cx="40" cy="16" r="4" fill="white"/>
        <circle cx="40" cy="50" r="10" fill="#9AAAD8" stroke="#5A6AAA" stroke-width="2.5"/>
        <circle cx="40" cy="50" r="4" fill="white"/>
        <circle cx="40" cy="110" r="10" fill="#9AAAD8" stroke="#5A6AAA" stroke-width="2.5"/>
        <circle cx="40" cy="110" r="4" fill="white"/>
        <circle cx="68" cy="72" r="10" fill="#F5D060" stroke="#C49A10" stroke-width="2.5"/>
        <circle cx="68" cy="72" r="4" fill="white"/>
        <circle cx="68" cy="100" r="10" fill="#F5D060" stroke="#C49A10" stroke-width="2.5"/>
        <circle cx="68" cy="100" r="4" fill="white"/>
        </svg>
    )
  }

export default GitBranch