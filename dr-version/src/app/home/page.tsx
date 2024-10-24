"use client"
import ActivityContainer from "@/components/child/activity_container";
import { DrBento } from "@/components/child/dr-bento";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row h-full">
      <div className="bg-red-400 h-full w-full p-6">
        <DrBento/>
      </div>
      <div className="bg-blue-400 h-full w-full p-1">
        <ActivityContainer/>
      </div>
    </div>
  );
}
