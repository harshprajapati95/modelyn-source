export default function PageSkeleton() {
  return (
    <div className="container-px mx-auto max-w-7xl pt-32">
      <div className="flex flex-col items-center gap-6 pb-24 text-center">
        <div className="h-6 w-40 animate-pulse rounded-full bg-white/5" />
        <div className="h-12 w-2/3 max-w-xl animate-pulse rounded-2xl bg-white/5" />
        <div className="h-12 w-1/2 max-w-md animate-pulse rounded-2xl bg-white/5" />
        <div className="h-5 w-3/4 max-w-lg animate-pulse rounded-xl bg-white/5" />
        <div className="mt-6 flex gap-4">
          <div className="h-11 w-40 animate-pulse rounded-full bg-white/5" />
          <div className="h-11 w-40 animate-pulse rounded-full bg-white/5" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}
