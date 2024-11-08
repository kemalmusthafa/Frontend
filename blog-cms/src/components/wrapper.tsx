import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-[1200px] w-[100vw] h-[100vh] sm:w-screen  p-5 sm:p-10 md:p-12 lg:p-16">
      {children}
    </div>
  );
}
