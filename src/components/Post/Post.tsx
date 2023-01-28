import React from 'react'
// import {Markdown} from "./Markdown"
import { useState , useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
// import { marked } from 'marked';
import matter from 'gray-matter';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');
// function parseTextFromMarkDown(mdString :string) {
//   const htmlString = marked(mdString);
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, 'text/html');
//   const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT);

//   const textList = [];
//   let currentNode = null
//   currentNode = walker.currentNode;

//   while(currentNode) {
//     textList.push(currentNode.textContent);
//     currentNode = walker.nextNode();
//   }

//   return textList;
// }

type Props = {
  path: string
}
const Post = (props: Props) => {
  const file_name = props.path;
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`../../md/blog/${file_name}`)
      .then(res => {
        let  y = b(post)
        console.log(y)
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  });

 async function b(post : string){
    let x = matter(post ,{ excerpt: true})
    console.log("x" , x)
    return x
  }
  
  // let x  = parseTextFromMarkDown(post)
  // console.log("post",post.split(":"))
  // console.log(x)
  // let l = [];
  // for(let i = 2 ; i<x.length ; i++ ){
  //   l.push(x[i])
  // }
  // console.log("this is l" ,l)
  return (
    <div>
      {/* <h1>{props.path}</h1> */}
       <Markdown >
        {}
        {post}
      </Markdown>
    </div>
  )
}

export default Post






























// export type PostData = {
//   path: string;
//   title: string;
//   subtitle?: string;
//   content: string;
//   description?: string;
//   canonicalUrl?: string;
//   published: boolean;
//   datePublished: number;
//   author?: string;
//   authorPhoto?: string;
//   authorTwitter?: string;
//   tags?: string[];
//   bannerPhoto?: string;
//   thumbnailPhoto?: string;
// };

// type RawFile = { path: string; contents: string };

// export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
//   const mdFile = await import(`../../md/${path}`);
//   return { path, contents: mdFile.default };
// };

// export const mdToPost = (file: RawFile): PostData => {
//   const metadata = matter(file.contents);
//   const path = file.path.replace('.md', '');
//   const post = {
//     path,
//     title: metadata.data.title,
//     subtitle: metadata.data.subtitle || null,
//     published: metadata.data.published || false,
//     datePublished: metadata.data.datePublished || null,
//     tags: metadata.data.tags || null,
//     description: metadata.data.description || null,
//     author: metadata.data.author || null,
//     authorPhoto: metadata.data.authorPhoto || null,
//     authorTwitter: metadata.data.authorTwitter || null,
//     bannerPhoto: metadata.data.bannerPhoto || null,
//     thumbnailPhoto: metadata.data.thumbnailPhoto || null,
//     content: metadata.content,
//   };

//   if (!post.title)
//     throw new Error(`Missing required field: title.`);

//   if (!post.content)
//     throw new Error(`Missing required field: content.`);

//   if (!post.datePublished)
//     throw new Error(`Missing required field: datePublished.`);

//   return post as PostData;
// };

// export const loadPost = async (path: string): Promise<PostData> => {
//   const file = await loadMarkdownFile(path);
//   return mdToPost(file);
// };
