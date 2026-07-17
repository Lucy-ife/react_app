import React from 'react'

const ColorText = ({ text, color }) => {
  return (
    <div style={{ color: color }}>{text}</div>  // ✅
  )
}

export default ColorText