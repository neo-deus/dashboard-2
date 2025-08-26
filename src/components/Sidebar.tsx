import * as React from "react";
import {
  BriefcaseBusiness,
  ChevronRight,
  FileSpreadsheet,
  LayoutList,
  Settings,
  Workflow,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";

const data = {
  navMain: [
    {
      title: "Projects",
      url: "#",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Grid View",
          url: "#",
        },
        {
          title: "Table View",
          url: "#",
        },
        {
          title: "Details",
          url: "#",
        },
        {
          title: "Create Project",
          url: "#",
        },
      ],
    },
    {
      title: "Tasks",
      url: "#",
      icon: LayoutList,
      items: [],
    },
    {
      title: "Files",
      url: "#",
      icon: FileSpreadsheet,
      items: [],
    },
    {
      title: "Integrations",
      url: "#",
      icon: Workflow,
      items: [],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className=" flex p-3 items-center gap-3 text-2xl font-semibold text-violet-500">
              <Image
                src="/clever.jpeg"
                alt=""
                width={40}
                height={40}
                className="rounded-md"
              />
              clever
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0 font-medium">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm  "
              >
                <CollapsibleTrigger >
                  <item.icon className=" mr-3" />
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className=" pl-9 text-neutral-600">
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className=" w-full h-14 shadow-lg border-2 bg-violet-500 border-violet-500 p-4 text-black hover:bg-violet-400"
              size="lg"
            >
              <div className=" w-full flex justify-start items-center gap-4 ">
                <Image
                  src="/person.jpg"
                  alt=""
                  width={35}
                  height={35}
                  className=" rounded-full aspect-square"
                />

                <div className=" text-xs font-medium text-left text-white">
                  Tahlia Mooney
                </div>
              </div>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
