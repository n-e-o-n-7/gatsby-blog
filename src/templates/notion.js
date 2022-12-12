import * as React from "react"
// import { graphql } from "gatsby"

export default function Notion(){
  // <div
  // className="prose prose-purple self-center px-5"
  // dangerouslySetInnerHTML={{ __html: page.html }}
  // />
  return <div/>
}


export const Head = ({pageContext}) => {
  const slug = pageContext.slug

  return <meta httpEquiv="refresh" content={"0; url=https://notion.aethers.space/"+slug}></meta>
}

// export const query = graphql`
//   query PageContents($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         slug
//       }
//       html
//     }
//   }
// `