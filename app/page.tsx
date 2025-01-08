import { SignedIn, SignedOut, SignIn, SignOutButton, SignUpButton } from "@clerk/nextjs";



export default function Home() {
  console.log("Hey from");
  return (
    <div className="">
      Home Page
      <SignedOut>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
