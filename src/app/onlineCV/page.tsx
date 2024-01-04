"use client"

import BackgroundComp from "@/components/MiscComps/BackgroundComp"

export default function Home() {
  return (
    <>
      <div className="flex w-screen min-h-screen">
        <BackgroundComp useImage={true} bgURL={"https://i.imgur.com/yMPmdyO.jpg"}/>
      </div>
    </>
  )
}
