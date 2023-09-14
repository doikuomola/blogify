import React from 'react';
import { SideBarCard } from '.';

export default function EditorsPick() {
  return (
    <div className="shadow">
      <div className="pl-2">
        <p className="text-xs md:text-base text-slate-800 dark:text-slate-200">
          Chosen by the Editor
        </p>
        <h2 className="font-bold">{"Editor's Pick"}</h2>
      </div>
      <div className="pt-4 flex flex-col gap-1 md:grid grid-cols-2">
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
