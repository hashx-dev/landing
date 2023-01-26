import React from 'react'
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {Card} from "@mui/material"
import {Content, ButtonWrapper} from "./style"
import Link from "react-router-dom"
import { Button } from '../../common/Button';
import posts from "../../content/Post.json"
let url = document.location.pathname
let path = url.charAt(6)
console.log(path)
const SingleBlog = () => {
  return (
    <Container>
      <Card sx={{ m:5 , p:3}} >
      {posts.filter(posts => posts.id === parseInt(path)).map(posts => (
        <div>
          <h3>{posts.title}</h3>
          <SvgIcon src={posts.src} width="auto" height="auto" />
          <Content>
            {posts.content}
          </Content>
    </div>
      ))}
    </Card>
    </Container>
  )
}

export default SingleBlog;
