import React from "react";
import Header from "../components/common/Header";
import OurPride from "../components/common/OurPride";
import TopBlog from "../components/Blog/TopBlog";
import blog1 from "@/assets/images/blog1.png";
import blog2 from "@/assets/images/blog2.png";
import blog3 from "@/assets/images/blog3.png";
import Pagination from "../components/common/Pagination";
import Categories from "../components/Blog/Categories";
import RecentBlogList from "../components/Blog/RecentBlogList";

const mainBlogs = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    postedBy: "Admin",
    postedOn: "12 Oct 2022",
    category: "Homemade",
    imageUrl: blog1,
  },

  {
    id: 2,
    title: "Exploring new ways of decorating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    postedBy: "Admin",
    postedOn: "13 Oct 2022",
    category: "Homemade",
    imageUrl: blog2,
  },

  {
    id: 3,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    postedBy: "Admin",
    postedOn: "14 Oct 2022",
    category: "Homemade",
    imageUrl: blog3,
  },
];

function Blog() {
  return (
    <div>
      <Header title={"blog"} />
      <div className="w-11/12 md:w-10/12 lg:w-9/12 py-10 mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col gap-6">
          {mainBlogs.map((blog) => (
            <TopBlog
              key={blog.id}
              title={blog.title}
              imgUrl={blog.imageUrl}
              description={blog.description}
              date={blog.postedOn}
              postedBy={blog.postedBy}
              category={blog.category}
            />
          ))}
          <Pagination />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 w-8/12 mx-auto">
          <Categories />
          <RecentBlogList />
        </div>
      </div>
      <OurPride />
    </div>
  );
}

export default Blog;
