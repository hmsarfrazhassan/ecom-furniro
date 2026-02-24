import React from "react";

const data = [
  { id: 1, count: 2, categoryName: "Crafts" },
  { id: 2, count: 2, categoryName: "Design" },
  { id: 3, count: 3, categoryName: "Homemade" },
  { id: 4, count: 4, categoryName: "Interior" },
  { id: 5, count: 7, categoryName: "Wood" },
];

const categories = () => {
  return (
    <div>
      <h3 className="font-medium capitalize text-2xl mb-6">categories</h3>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-6 text-[#9F9F9F] "
        >
          <p>{item.categoryName}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default categories;
