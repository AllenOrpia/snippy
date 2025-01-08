
'use client'

import { SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";

const HeaderProfileBtn = () => {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<FaUserCircle />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default HeaderProfileBtn;
