"use client";

import { useSearchParams } from "next/navigation";
import Activities from "./components/Activities";
import RecommendationActivity from "./components/Recommendation";
import UserProfile from "./components/UserProfile";

export default function Homepage() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "User";
  return (
    <div className="w-auto h-fit flex flex-col items-center mb-20 ">
      <UserProfile username={username} />
      <RecommendationActivity />
      <Activities />
    </div>
  );
}
