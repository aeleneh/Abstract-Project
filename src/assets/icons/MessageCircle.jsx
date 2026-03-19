import React from 'react'

const MessageCircle = ({width = 24, height = 24}) => {
    return (
        <svg width="110" height="120" viewBox="0 0 130 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 86 Q16 96 26 96 L100 96 Q110 96 110 86 L110 34 L106 30 L12 30 L12 82 Z" fill="#0F6E56"/>
        <path d="M110 34 L106 30 L106 82 L110 86 Z" fill="#0F6E56"/>
        <rect x="12" y="12" width="98" height="74" rx="14" fill="#1D9E75" stroke="#0F6E56" stroke-width="2"/>
        <ellipse cx="46" cy="22" rx="22" ry="6" fill="#5DCAA5" opacity="0.45"/>
        <path d="M30 88 L22 110 L48 90" fill="#0F6E56"/>
        <path d="M28 86 L20 108 L46 88" fill="#1D9E75" stroke="#0F6E56" stroke-width="1.5" stroke-linejoin="round"/>
        <circle cx="37" cy="50" r="7" fill="white"/>
        <circle cx="61" cy="50" r="7" fill="white"/>
        <circle cx="85" cy="50" r="7" fill="white"/>
        <circle cx="34" cy="47" r="2.5" fill="white" opacity="0.5"/>
      </svg>
    )
  }

export default MessageCircle