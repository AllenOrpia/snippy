import {
  SignedOut,
  SignUpButton,
  SignedIn,
  SignOutButton,
  UserButton
} from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";

export default function Home() {
  console.log("Hey from");
  return (
    <div className="">
      Home Page
      <SignedOut>
        <SignUpButton />
      </SignedOut>
    </div>
  );
}
