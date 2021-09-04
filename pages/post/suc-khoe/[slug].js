import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <p>This is a post</p>
      <p>{router.query.slug}</p>
    </div>
  );
};

export default Post;
