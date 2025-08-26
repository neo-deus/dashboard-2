import React from "react";
import { TodoGroup } from "./MainPanel";
import { Calendar, Copy, Ellipsis, UsersRound } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const PanelCard = ({ icon: Icon, title, subtodos }: TodoGroup) => {
  return (
    <div className=" p-6 rounded-lg bg-white shadow ">
      <div className=" flex items-center justify-between text-sm font-medium">
        <div className=" flex items-center gap-3">
          <Icon />
          {title}
        </div>
        <div className=" flex items-center gap-3 text-neutral-600">
          <Calendar />
          <Ellipsis />
        </div>
      </div>
      <div className="h-0.5 w-full  my-6  bg-gray-300 rounded-full" />
      {subtodos.map((subtodo, index) => (
        <div key={index} className=" flex items-center justify-between my-3">
          <div className=" flex items-center gap-3">
            <Checkbox
              className=" w-5 h-5 rounded-full border-2 border-dashed border-neutral-500 data-[state=checked]:bg-violet-500 data-[state=checked]:border-none"
              defaultChecked={subtodo.status}
            />
            <p className=" font-medium text-neutral-900">{subtodo.title}</p>
          </div>
          <div className=" flex items-center gap-3 font-medium">
            {subtodo.tags.map((tag, index) => (
              <div
                key={index}
                className=" p-1 text-yellow-600 text-xs  bg-yellow-200 rounded"
              >
                {tag}
              </div>
            ))}
            <Checkbox
              className={` w-5 h-5 rounded-full border-2 border-dashed border-neutral-500 ${
                Number(subtodo.progress) > 70
                  ? "data-[state=checked]:bg-green-400"
                  : "data-[state=checked]:bg-red-400"
              } data-[state=checked]:border-none`}
              defaultChecked
            />
            <div className=" w-8 -ml-2 text-neutral-500 text-sm">
              {subtodo.progress}
              {"%"}
            </div>
            <Copy className=" text-neutral-500" />
            <div className=" w-5 -ml-2 text-neutral-500 text-sm">
              {subtodo.copy}
            </div>
            <UsersRound className=" text-neutral-500" />
            <div className=" w-8 -ml-2 text-neutral-500 text-sm">
              {subtodo.copy}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PanelCard;
