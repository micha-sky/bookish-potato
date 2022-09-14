import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const ProductsPage = ({}) => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            featuredImage {
              src
            }
            shopifyId
            description
            handle
            priceRangeV2 {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="p-8 grid gap-x-8 gap-y-4 grid-cols-3">
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div key={node.shopifyId} className="flex">
            <h3>
              <Link to={`/products/${node.handle}`}>{node.title}</Link>
              {" - "}${node.priceRangeV2.minVariantPrice.amount}
            </h3>
            <p>{node.description}</p>
            <img src={node.featuredImage.src} alt={node.title}></img>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProductsPage
