import React from 'react'
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {Card} from "@mui/material"
import {Content, ButtonWrapper} from "./style"
import Link from "react-router-dom"
import { Button } from '../../common/Button';
import posts from "../../content/Post.json"
import Post from "../../components/Post/Post"
import { Buffer } from 'buffer';
let url = document.location.pathname
let path = url.substring(6,url.length)
console.log(path)
const SingleBlog = () => {

  return (
    <Container>
      <Card sx={{ m:5 , p:3}} >
      <Post path={path} />
    </Card>
    </Container>
  )
}

export default SingleBlog;
