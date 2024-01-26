import React from 'react'

export default function Alert(props) {
  return (
    <>
    {props.msg &&
      <div className="alert alert-primary" role="alert">
        {props.msg}
      </div>}
    </>
  )
}
