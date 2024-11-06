const base_url = process.env.CONTENTFUL_BASE_URL;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

import resolveResponse from "contentful-resolve-response"

export const getBlogs = async () => {
  const res = await fetch(
    `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog`,{next: {revalidate: 60}}
  );
  
  const data = await res.json();
  console.log(data);
  const result = resolveResponse(data)
  return result;
};
