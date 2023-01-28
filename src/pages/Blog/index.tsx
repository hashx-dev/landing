import { lazy } from "react";
import {Post} from "../../components/Blog/Post"
import posts from "../../content/Post.json"
import {Grid} from "@mui/material"
const Container = lazy(() => import("../../common/Container"));

const Blog = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {posts.map((item :any ,j:any )=>{
        return( 
        <Post key={j} id={item.id} content={item.content.substring(0,200)} title={item.title} src={item.src} filename={item.filename}/>
      )})}
       </Grid>
    </Container>
  );
};
export default Blog;
