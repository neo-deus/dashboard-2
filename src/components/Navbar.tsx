import React from "react";
import { Button } from "./ui/button";
import { Bell, ChevronDown, Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className=" h-[9%] z-5 fixed w-[84%] bg-white flex justify-between items-center py-4 px-6 border-b-2 border-neutral-300 shadow">
      <div className=" flex gap-2 items-center">
        <Button className=" h-9 w-9 bg-[#FEDCEB] text-[#d979a7] hover:bg-[#e370a0] hover:text-[#FEDCEB]">
          C
        </Button>
        <Button className=" h-9 w-9  bg-[#E0E2F4] text-[#8188c7] hover:bg-[#8188c7] hover:text-[#E0E2F4]">
          D
        </Button>
        <Button className=" h-9 w-9  bg-[#FDE9CE] text-[#cf9c5a] hover:bg-[#cf9c5a] hover:text-[#FDE9CE]">
          A
        </Button>
        <Button className=" h-9 w-9 text-black bg-white border border-neutral-300 hover:bg-neutral-200">
          <Plus />
        </Button>
      </div>
      <div className=" flex items-center gap-2">
        <div className="relative w-full text-neutral-500">
          <Search className="absolute left-3 top-[30%] h-4 w-4 " />
          <Input
            type="text"
            placeholder="Search"
            className="pl-9 rounded bg-white border border-none shadow-none"
          />
        </div>
        <Bell className=" text-neutral-500 mr-5 h-10 w-10" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className=" border border-none "
          >
            <Button variant="outline" className=" shadow-none">
              Tahlia <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" -ml-7" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
