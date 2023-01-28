import React from 'react'
import Card from '@mui/material/Card';
import { SvgIcon } from "../../common/SvgIcon";
import {Button} from "../../common/Button"
import {Link} from "react-router-dom"
import {
    Content ,
    ButtonWrapper
} from "./style"
type Props = {
    id: Number,
    title : string,
    src: string ,
    content : string
}
export const Post = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 325  , m:2 , p:2}} >
    <title>{props.title}</title>
      <SvgIcon src={props.src} width="auto" height="auto" />
      <Content>
        {props.content}
    </Content>
      <ButtonWrapper>
        <Button 
        key={1}
        color="white"
        fixedWidth={true}
        onClick={() => {
            return console.log(props.id)
        }}
        >
        <Link to={{pathname: `/blog/${props.id}`}}>
        Read Blog </Link>
        </Button>
      </ButtonWrapper>
    </Card>
  )
}