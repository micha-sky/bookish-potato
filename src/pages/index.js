import React from "react"
import Link from "gatsby-link"

export default function Home() {
  return (
    <div>
      <h1 className="text-fuchsia-200">Hello world!</h1>
      <Link to="products">Products</Link>
    </div>
  )
}
