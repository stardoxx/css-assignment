import React from 'react'

export default function ProductImage(props) {
    return (
        <div className = "brandImg">
          <img className = "image-setup" src = {props.src} alt = {props.name} />
        </div>
    )
}
