import { groq } from "next-sanity";

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"]{
    _id,
    title,
    slug
  }
`;

export const allTopicsQuery = groq`
  *[_type == "projectTopic"]{
    _id,
    title,
    slug
  }
`;

export const PROJECT_TOPICS_QUERY = `
*[_type == "projectTopic"]{
  _id,
  title,
  category,
  slug
}
`;

const query = `
*[_type=="projectTopic" && slug.current==$slug][0]
`;