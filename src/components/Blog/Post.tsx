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
      right: theme.spacing(1),
      left : theme.spacing(5),
      width : "100%"
    },
    div :{
      margin : '20px'
    }
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
    <div className={classes.div}>
      <ButtonWrapper className={classes.button}>
          <ButtonLink to={`/blog/${props.filename}`}  text={"Read More"} className={classes.button}/>
      </ButtonWrapper>
      </div>
    </Card>
  )
}