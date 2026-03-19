import React from 'react'

const ManageOrg = ({width = 24, height = 24}) => {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="62" cy="26" r="18" fill="#A0B4CC" stroke="#6888A8" stroke-width="2"/>
        <path d="M38 78 Q38 58 62 56 Q86 58 86 78 L84 96 L40 96 Z" fill="#A0B4CC" stroke="#6888A8" stroke-width="2"/>
        <circle cx="44" cy="34" r="20" fill="#5577AA" stroke="#334488" stroke-width="2"/>
        <path d="M18 90 Q18 68 44 66 Q70 68 70 90 L68 110 L20 110 Z" fill="#5577AA" stroke="#334488" stroke-width="2"/>
        <ellipse cx="38" cy="30" rx="7" ry="5" fill="#8AABCC" opacity="0.5"/>
      </svg>
    )
  }

export default ManageOrg 


