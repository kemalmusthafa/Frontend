import React from "react";

interface ICategory {
  title: string;
  category: string;
}

export default function Category({ title, category }: ICategory) {
  return (
    <div className="flex flex-col bg-slate-50 w-[200px] h-auto rounded-lg gap-10 p-5">
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
