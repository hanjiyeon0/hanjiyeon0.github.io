import React from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";
import media from "components/Common/media";

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: "2020.01.29.",
  categories: ["Web", "Frontend", "Testing"],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!",
  thumbnail:
    "<https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp>",
  link: "<https://www.google.co.kr/>",
};

const PostList = (): JSX.Element => (
  <PostListWrapper>
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
    <PostItem {...POST_ITEM_DATA} />
  </PostListWrapper>
);

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  ${media.mobile} {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

export default PostList;
