export function HeroSkeleton() {
  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center animate-pulse">
      {/* Left Column */}
      <div className="lg:col-span-7 space-y-8">
        {/* Status Badge */}
        <div className="h-9 w-64 bg-slate-200 dark:bg-slate-800/80 rounded-full" />

        {/* Headline */}
        <div className="space-y-3">
          <div className="h-12 sm:h-14 w-full sm:w-3/4 bg-slate-200 dark:bg-slate-800/80 rounded-xl" />
          <div className="h-8 sm:h-10 w-1/2 bg-slate-200 dark:bg-slate-800/80 rounded-lg" />
        </div>

        {/* Paragraph */}
        <div className="space-y-2.5 max-w-2xl">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-800/80 rounded" />
          <div className="h-4 w-11/12 bg-slate-200 dark:bg-slate-800/80 rounded" />
          <div className="h-4 w-4/5 bg-slate-200 dark:bg-slate-800/80 rounded" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="h-12 w-44 bg-slate-200 dark:bg-slate-800/80 rounded-xl" />
          <div className="h-12 w-44 bg-slate-200 dark:bg-slate-800/80 rounded-xl" />
        </div>
      </div>

      {/* Right Column (Code Preview) */}
      <div className="lg:col-span-5 h-80 sm:h-96 w-full bg-slate-200 dark:bg-slate-800/80 rounded-2xl border border-slate-300 dark:border-slate-700/50" />
    </div>
  );
}

export function TechStackSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800/80 rounded mx-auto" />
        <div className="h-8 w-72 sm:w-96 bg-slate-200 dark:bg-slate-800/80 rounded-xl mx-auto" />
      </div>

      {/* 4 Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-slate-200/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3 h-52"
          >
            <div className="h-12 w-12 bg-slate-300 dark:bg-slate-700/80 rounded-xl" />
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700/80 rounded-lg" />
            <div className="space-y-2 pt-1">
              <div className="h-3.5 w-full bg-slate-300 dark:bg-slate-700/80 rounded" />
              <div className="h-3.5 w-4/5 bg-slate-300 dark:bg-slate-700/80 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkflowSkeleton() {
  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-slate-200/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-8 animate-pulse">
      <div className="max-w-2xl space-y-3">
        <div className="h-4 w-36 bg-slate-300 dark:bg-slate-800/80 rounded" />
        <div className="h-8 w-80 bg-slate-300 dark:bg-slate-800/80 rounded-xl" />
        <div className="h-4 w-full bg-slate-300 dark:bg-slate-800/80 rounded" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 h-44"
          >
            <div className="h-6 w-28 bg-slate-300 dark:bg-slate-800/80 rounded" />
            <div className="h-5 w-36 bg-slate-300 dark:bg-slate-800/80 rounded-lg" />
            <div className="space-y-2 pt-1">
              <div className="h-3.5 w-full bg-slate-300 dark:bg-slate-800/80 rounded" />
              <div className="h-3.5 w-5/6 bg-slate-300 dark:bg-slate-800/80 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800/80 rounded" />
          <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800/80 rounded-xl" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-slate-200/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700/80 rounded-full" />
              <div className="h-4 w-24 bg-slate-300 dark:bg-slate-700/80 rounded" />
            </div>
            <div className="h-7 w-3/4 bg-slate-300 dark:bg-slate-700/80 rounded-lg" />
            <div className="space-y-2">
              <div className="h-3.5 w-full bg-slate-300 dark:bg-slate-700/80 rounded" />
              <div className="h-3.5 w-5/6 bg-slate-300 dark:bg-slate-700/80 rounded" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-3.5 w-full bg-slate-300 dark:bg-slate-700/80 rounded" />
              <div className="h-3.5 w-full bg-slate-300 dark:bg-slate-700/80 rounded" />
              <div className="h-3.5 w-4/5 bg-slate-300 dark:bg-slate-700/80 rounded" />
            </div>
            <div className="flex gap-2 pt-3 border-t border-slate-300/50 dark:border-slate-700/50">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="h-6 w-16 bg-slate-300 dark:bg-slate-700/80 rounded"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 gap-8 animate-pulse">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-slate-200/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4 h-64"
        >
          <div className="h-6 w-44 bg-slate-300 dark:bg-slate-700/80 rounded-lg" />
          <div className="space-y-3 pt-2">
            <div className="h-4 w-full bg-slate-300 dark:bg-slate-700/80 rounded" />
            <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700/80 rounded" />
            <div className="h-4 w-5/6 bg-slate-300 dark:bg-slate-700/80 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
