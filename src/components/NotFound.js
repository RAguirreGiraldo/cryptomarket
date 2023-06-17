import React from 'react'
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <div className="not-found">
      <Helmet>
            <title>CryptoMarket - Page not found</title>
      </Helmet>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  )
}

export default NotFound;