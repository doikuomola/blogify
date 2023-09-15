import React from 'react';
import { SideBarCard } from '.';

export default function MostPopular() {
  return (
    <div className="shadow rounded">
      <div className="pl-2">
        <p className="text-xs text-slate-800 dark:text-slate-200">
          {"What's Hot"}
        </p>
        <h2 className="font-bold">Most Popular</h2>
      </div>
      <div className="pt-4 flex flex-col gap-1 md:grid grid-cols-2 lg:flex lg:flex-col lg:gap-4">
        <SideBarCard />
        <SideBarCard />
        <SideBarCard />
        <SideBarCard />
        <SideBarCard />
        <SideBarCard />
      </div>
    </div>
  );
}
