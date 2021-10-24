import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div className="loader">
      <Spinner animation="border" />
    </div>
  )
}

export default Loader
