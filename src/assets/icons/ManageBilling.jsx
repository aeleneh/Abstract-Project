import React from 'react'

const ManageBilling = ({width = 24, height = 24}) => {
    return (
        <svg width="110" height="100" viewBox="0 0 110 80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="52" cy="52" rx="36" ry="11" fill="#C49018" stroke="#9A6C08" stroke-width="1.5"/>
        <rect x="16" y="30" width="72" height="22" fill="#D4A820"/>
        <ellipse cx="52" cy="30" rx="36" ry="11" fill="#EEC040" stroke="#C49018" stroke-width="1.5"/>
        <ellipse cx="52" cy="40" rx="36" ry="11" fill="#B88010" stroke="#9A6C08" stroke-width="1.5"/>
        <rect x="16" y="18" width="72" height="22" fill="#DDB030"/>
        <ellipse cx="52" cy="18" rx="36" ry="11" fill="#F2C840" stroke="#C49018" stroke-width="1.5"/>
        <ellipse cx="52" cy="28" rx="36" ry="11" fill="#B08010" stroke="#9A6C08" stroke-width="1.5"/>
        <rect x="16" y="6" width="72" height="22" fill="#E8BE38"/>
        <ellipse cx="52" cy="6" rx="36" ry="11" fill="#FAD84A" stroke="#C49018" stroke-width="2"/>
        <text x="52" y="10" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="700" fill="#8B6000" font-family="Georgia,serif">$</text>
        <ellipse cx="40" cy="3" rx="10" ry="3.5" fill="white" opacity="0.25"/>
      </svg>
    )
  }

export default ManageBilling