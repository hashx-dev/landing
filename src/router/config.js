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
		path: ["/blog/:title", "/Blog/:id"],
		exact: true,
		component: "SingleBlog",
	},
];
export default routes;
