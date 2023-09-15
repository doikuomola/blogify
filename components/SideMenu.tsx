import React from 'react';
import { MostPopular, CategoryList, EditorsPick } from '.';

export default function SideMenu() {
  return (
    <div className="text-sm md:text-base p-2 flex flex-col gap-4 md:py-6 lg:flex-2">
      <MostPopular />
      <div className="">
        <div className="pl-2 md:text-center lg:text-start">
          <p className="text-xs text-slate-800 dark:text-slate-200">
            Discover by Topic
          </p>
          <h2 className="font-bold">Categories</h2>
        </div>
        <div className="pt-4">
          <CategoryList />
        </div>
      </div>
      <EditorsPick />
    </div>
  );
}
