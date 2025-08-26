import { Server } from "lucide-react";

const timelineData = [
  {
    date: "1 week ago",
    title: "Prepare for launch",
    color: "bg-green-400",
  },
  {
    date: "1 week ago",
    title: "Make the final tests",
    color: "bg-red-400",
  },
  {
    date: "1 week ago",
    title: "Prepare the documentation",
    color: "bg-green-400",
  },
  {
    date: "1 week ago",
    title: "Build the new website",
    color: "bg-yellow-400",
  },
  {
    date: "1 week ago",
    title: "Create the design system",
    color: "bg-green-400",
  },
];

const lastData = {
  title: "The project was created",
  date: "1 week ago",
};

export const Timeline = () => {
  return (
    <div className=" pb-10">
      <div className="relative text-neutral-700">
        <div className="h-full absolute w-0.5  left-[2.5%] top-4  bg-gray-300 rounded-full" />
        {timelineData.map((entry, index) => (
          <div key={index} className="relative mb-1 pl-8">
            <div className="bg-green-500 absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
            <h4 className="rounded-xl pt-2 text-sm font-medium tracking-tight ">
              {entry.title}
            </h4>

            <h5 className="text-xs tracking-tight">{entry.date}</h5>
          </div>
        ))}
      </div>
      <div className="relative  pl-8 text-neutral-700 ">
        <div className=" absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full">
          {" "}
          <Server />
        </div>

        <h4 className="rounded-xl pt-2 text-sm font-medium tracking-tight ">
          {lastData.title}
        </h4>

        <h5 className="text-xs tracking-tight ">
          {lastData.date}
        </h5>
      </div>
    </div>
  );
};
