import React from "react";

interface ICategory {
  title: string;
  category: string;
}

export default function Category({ title, category }: ICategory) {
  return (
    <div className="flex flex-col bg-slate-50 w-[200px] h-auto rounded-lg">
      <div>
        <h1>{`${title}`}</h1>
      </div>
      <div>
        <h2>
          {`${category}`}
        </h2>
      </div>
    </div>
  );
}
