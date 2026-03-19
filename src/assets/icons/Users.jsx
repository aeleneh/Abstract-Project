import React from 'react'

const Users = ({width = 24, height = 24}) => {
    return (
        <svg width="120" height="110" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 20 L90 20 L90 36 Q102 36 102 46 Q102 56 90 56 L90 80 L30 80 L30 64 Q18 64 18 54 Q18 44 30 44 Z" fill="#9080D8" stroke="#5040A8" stroke-width="2"/>
        <path d="M90 56 L90 80 L96 86 L96 62 Z" fill="#6050A0" stroke-width="1"/>
        <path d="M30 80 L90 80 L96 86 L36 86 Z" fill="#7060B0" stroke-width="1"/>
        <path d="M30 44 Q18 44 18 54 Q18 64 30 64" fill="none" stroke="#B0A0E8" stroke-width="1.5" opacity="0.6"/>
        <ellipse cx="55" cy="38" rx="12" ry="6" fill="#C0B0F0" opacity="0.35" transform="rotate(-10 55 38)"/>
      </svg>
    )
  }
export default Users

