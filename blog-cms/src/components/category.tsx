import React from "react";

interface ICategory {
  title: string;
  category: string;
}

export default function Category({ title, category }: ICategory) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h1>{`${title}`}</h1>
      </div>
      <div className="flex">
        <h2>
          Category : <span className="text-blue-500 font-semibold">{`${category}`}</span>
        </h2>
      </div>
    </div>
  );
}
