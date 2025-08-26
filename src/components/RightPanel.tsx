import { ClipboardCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";

const RightPanel = () => {
  const tags = ["Project", "SpaceX", "Launch", "Falcon", "Multiplanetary"];

  return (
    <div className=" w-[25%]  p-5 mt-14 border-l-2 border-neutral-300">
      <div className=" flex justify-between items-center font-medium">
        <div className=" ">Project Details</div>
        <div className="flex items-center text-sm gap-1 text-[#5a61b5]">
          <ClipboardCheck className=" w-4 h-4" />
          Copy link
        </div>
      </div>
      <div className="relative w-full mt-4 aspect-[16/7]">
        <Image
          src="/balloon.avif"
          alt=" "
          fill
          className="rounded-md object-cover"
        />
      </div>
      <p className=" font-medium text-neutral-600 my-3 text-sm">Description</p>
      <p className=" font-medium text-neutral-700 my-3 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
        maiores sunt tempore ad quis consequuntur{" "}
      </p>
      <p className=" font-medium text-neutral-600 my-3 text-sm">Tags</p>
      <div className=" flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="  py-1 px-2 text-xs font-medium text-neutral-600 border-2 border-neutral-300 rounded-md"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className=" font-medium text-neutral-600 my-3 text-sm">Timeline</p>
      <Timeline />
    </div>
  );
};

export default RightPanel;
