export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="w-full h-64 sm:h-80 md:h-96 bg-muted" />

      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-5 flex gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1.5">
              <div className="h-2.5 w-12 bg-muted rounded" />
              <div className="h-4 w-28 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-border bg-background-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-3 flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-6 w-20 bg-muted rounded" />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 flex gap-12">
        <div className="hidden lg:flex flex-col gap-2 w-44 flex-shrink-0">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-8 bg-muted rounded" />
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 space-y-12">
          <div className="h-28 bg-muted rounded" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-40 bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-5/6 bg-muted rounded" />
              <div className="h-4 w-4/6 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
