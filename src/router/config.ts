const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/blog", "/Blog"],
    exact: true,
    component: "Blog",
  },
  {
    path: ["/blog/:id", "/Blog/:id"],
    exact: false,
    component: "SingleBlog",
  },
];
export default routes;
