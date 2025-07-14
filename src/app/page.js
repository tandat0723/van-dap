import SearchToggle from "@/components/SearchToggle/SearchToggle";

export default function Home() {
  return (
    <div className="relative w-full sm:w-4/5 lg:w-3/5 m-auto h-full">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <SearchToggle />
      </div>
    </div>
  );
}
