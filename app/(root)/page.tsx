import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import Header from "./_components/Header";
import EditorPanel from "./_components/EditorPanel";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  console.log("Hey from");
  return (
    <main className="min-h-screen">
      <section className="max-w-[1800px] mx-auto pp-4">
   
        <Header />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      
        <EditorPanel />
        <OutputPanel />
      </section>
    </main>
  );
}


{/* <SignedOut>
  <SignUpButton />
</SignedOut>
<SignedIn>
  <SignOutButton />
</SignedIn> */}