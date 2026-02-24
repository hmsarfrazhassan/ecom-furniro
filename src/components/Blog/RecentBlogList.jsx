import React from "react";
import blog1 from "@/assets/images/blog-sm1.png";
import blog2 from "@/assets/images/blog-sm2.png";
import blog3 from "@/assets/images/blog-sm3.png";
import blog4 from "@/assets/images/blog-sm4.png";
import blog5 from "@/assets/images/blog-sm5.png";
import RecentBlogCard from "./RecentBlogCard";
const data = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    postedOn: "24 Feb 2026",
    imageUrl: blog1,
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    postedOn: "24 Feb 2026",
    imageUrl: blog2,
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    postedOn: "24 Feb 2026",
    imageUrl: blog3,
  },
  {
    id: 4,
    title: "Modern home in Milan",
    postedOn: "24 Feb 2026",
    imageUrl: blog4,
  },
  {
    id: 5,
    title: "Colorful office redesign",
    postedOn: "24 Feb 2026",
    imageUrl: blog5,
  },
];

const RecentBlogList = () => {
  return (
    <div>
      <h3 className="font-medium text-2xl text-black mb-6">Recent Posts</h3>
      {data.map((item) => (
        <RecentBlogCard
          key={item.id}
          title={item.title}
          imgUrl={item.imageUrl}
          postedOn={item.postedOn}
        />
      ))}
    </div>
  );
};

export default RecentBlogList;
