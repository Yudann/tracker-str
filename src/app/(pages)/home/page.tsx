"use client";

import Activities from "./components/Activities";
import RecommendationActivity from "./components/Recommendation";
import UserProfile from "./components/UserProfile";

export default function Homepage() {
  return (
    <div className="w-auto h-fit flex flex-col items-center mb-20 ">
      <UserProfile />
      <RecommendationActivity />
      <Activities />
    </div>
  );
}
