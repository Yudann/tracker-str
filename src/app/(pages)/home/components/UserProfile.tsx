import { FaBell, FaUserCircle } from "react-icons/fa";

type UserProfileProps = {
  username: string;
};

export default function UserProfile({ username }: UserProfileProps) {
  return (
    <div className="w-full px-5">
      <div className="w-full mt-20 py-6 px-5 flex flex-col items-center bg-purple-300/70 rounded-lg shadow-md">
        {/* User Profile Section */}
        <div className="flex items-center justify-between w-full">
          {/* Avatar dan Info User */}
          <div className="flex items-center gap-4">
            <FaUserCircle size={40} className="text-black" />
            <div>
              <h1 className="text-base font-bold text-gray-800">
                Good Morning, {username}!
              </h1>
              <p className="text-sm text-gray-600">How are you today?</p>
            </div>
          </div>
          <FaBell size={25} />
        </div>
      </div>
    </div>
  );
}
