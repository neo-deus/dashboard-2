import { cn } from "@/lib/utils";
import React from "react";

const Dashboard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("  ", className)}>
      {children}
    </div>
  );
};

export default Dashboard;
