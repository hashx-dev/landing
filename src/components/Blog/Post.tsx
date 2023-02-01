import React from 'react'
import Card from '@mui/material/Card';
import { SvgIcon } from "../../common/SvgIcon";
import {Button} from "../../common/Button"
import {Link} from "react-router-dom"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Content ,
    ButtonWrapper
} from "./style"
import ButtonLink from '../../common/ButtonLink';
type Props = {
    id: Number,
    title : string,
    src: string ,
    content : string
    filename: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '300px',
      minHeight: '300px',
    },
    button: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
export const Post = (props: Props) => {
  const classes = useStyles(); 
  return (
    <Card sx={{ maxWidth: 325  , m:2 , p:2}} className={classes.card} >
    <title>{props.title}</title>
      <SvgIcon src={props.src} width="auto" height="auto" />
      <Content>
        {props.content}
    </Content>
      <ButtonWrapper>
          <ButtonLink to={`/blog/${props.filename}`}  text={"Read More"} className={classes.button}/>
      </ButtonWrapper>
    </Card>
  )
}