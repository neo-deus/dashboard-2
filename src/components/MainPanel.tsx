"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  ClipboardList,
  PenLine,
  Sparkles,
  SquarePlus,
  UsersRound,
} from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import PanelCard from "./PanelCard";

export type SubTodo = {
  status: boolean;
  title: string;
  tags: string[];
  progress: string;
  copy: number;
  people: number;
};

export type TodoGroup = {
  icon: React.ComponentType;
  title: string;
  subtodos: SubTodo[];
};

export const MainPanel = () => {
  const [selectedTab, setSelectedTab] = useState("View all");

  const tabs = ["View all", "Most recent", "Popular"];

  const todos:TodoGroup[] = [
    {
      icon: ClipboardList,
      title: "New tasks",
      subtodos: [
        {
          status: false,
          title: "Get another day full of work done!",
          tags: ["Important"],
          progress: "74",
          copy: 18,
          people: 7,
        },
        {
          status: true,
          title: "Keep my mentality healthy",
          tags: [],
          progress: "38",
          copy: 18,
          people: 7,
        },
      ],
    },
    {
      icon: Sparkles,
      title: "Do today",
      subtodos: [
        {
          status: true,
          title: "Figure out how to use Clever!",
          tags: [],
          progress: "10",
          copy: 18,
          people: 7,
        },
        {
          status: false,
          title: "Build some new components in Figma",
          tags: ["New product"],
          progress: "83",
          copy: 18,
          people: 7,
        },
        {
          status: true,
          title: "Create wireframes dashboard",
          tags: [],
          progress: "4",
          copy: 18,
          people: 7,
        },
      ],
    },
    {
      icon: PenLine,
      title: "In progress",
      subtodos: [
        {
          status: false,
          title: "Figure out how to use Clever from the help center!",
          tags: [],
          progress: "10",
          copy: 18,
          people: 7,
        },
        {
          status: false,
          title: "Build some new components in Figma",
          tags: ["Delayed"],
          progress: "83",
          copy: 18,
          people: 7,
        },
        {
          status: true,
          title: "Create the new dashboard",
          tags: [],
          progress: "4",
          copy: 18,
          people: 7,
        },
        {
          status: false,
          title: "Get another day full of work done!",
          tags: [],
          progress: "74",
          copy: 18,
          people: 7,
        },
        {
          status: false,
          title: "Take walks outside",
          tags: [],
          progress: "38",
          copy: 18,
          people: 7,
        },
      ],
    },
  ];

  return (
    <div className=" flex-1 mt-14 p-6 bg-[#F5F9FC]">
      <div className=" flex justify-between items-center">
        <div className=" text-3xl font-semibold">
          Launch Clever dashboard theme
        </div>
        <div className=" flex gap-2 items-center">
          <Button className="flex items-center bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-100">
            <UsersRound />
            Share
          </Button>
          <Button className="flex items-center bg-[#5C60F5] hover:bg-[#3539bd]">
            <SquarePlus />
            Create
          </Button>
        </div>
      </div>
      <div className=" flex items-center font-medium text-sm text-neutral-600 gap-6 mt-5">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelectedTab(tab)}
            className={`${
              selectedTab === tab
                ? "text-violet-600 border-b-2 border-violet-600"
                : ""
            } cursor-pointer pb-4`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="h-0.5 -mt-0.5  mb-5 bg-gray-300 rounded-full" />
      <div className=" flex flex-col gap-4 px-4">
        {todos.map((todo, index) => (
          <PanelCard key={index} {...todo} />
        ))}
      </div>

      
    </div>
  );
};


