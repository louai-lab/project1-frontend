import React from 'react'

export default function Money(props) {
    const color = props.color || "#111111"

    const svgfill ={
      fill: `${color}`,
    }
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512" style={svgfill}><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
    </div>
  )
}
