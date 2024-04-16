import { signOut } from "next-auth/react";
import React from "react";
import { GiExitDoor } from "react-icons/gi";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex rounded-md">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
          <img
            src="/images/default-avatar.png"
            alt=""
            className="w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div className="flex items-center justify-center" onClick={() => signOut()}>
          <GiExitDoor className="w-4 h-4 ml-2 mr-2 border-3 text-white transition" />
          <div
            className="px-0 text-center text-white text-sm hover:underline flex flex-row group/item items-center"
          >
            Sign out of caianflix
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
