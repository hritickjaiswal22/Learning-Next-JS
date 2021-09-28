import React from "react";

function Post({ post }) {
  return (
    <>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export default Post;
