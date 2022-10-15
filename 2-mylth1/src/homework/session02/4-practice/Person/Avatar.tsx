import React from 'react'
import "../Person/style.css";

interface AvatarProps  {
    imageLink ?: string;
}

function Avatar(props: AvatarProps) {
  return (
    <><div className="avatar">
    <img src={props.imageLink} alt="" />
  </div></>
  )
}

export default Avatar