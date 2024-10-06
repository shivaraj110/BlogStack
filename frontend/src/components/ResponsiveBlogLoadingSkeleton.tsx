export default function ResponsiveBlogLoadingSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16 ml-20 p-4 sm:p-6 lg:p-8 space-y-8">
      {[...Array(1)].map((_, index) => (
        <div key={index} className="space-y-4 ">
          <div className="flex items-center space-x-4 pt-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-200 animate-pulse rounded-full" />
          </div>
        </div>
      ))}

      <div className="hidden sm:block">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="space-y-4 mt-8">
            <div className="h-6 sm:h-8 w-full sm:w-3/4 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full sm:w-2/3 bg-gray-200 animate-pulse rounded" />
            <div className="flex items-center space-x-4 pt-4">
              <div className="space-y-2"></div>
            </div>
          </div>
        ))}
      </div>
      {[...Array(1)].map((_, index) => (
        <div key={index} className="space-y-4 ">
          <div className="flex items-center space-x-4 pt-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-200 animate-pulse rounded-full" />
          </div>
        </div>
      ))}

      <div className="hidden sm:block">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="space-y-4 mt-8">
            <div className="h-6 sm:h-8 w-full sm:w-3/4 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full sm:w-2/3 bg-gray-200 animate-pulse rounded" />
            <div className="flex items-center space-x-4 pt-4">
              <div className="space-y-2"></div>
            </div>
          </div>
        ))}
      </div>

      {[...Array(1)].map((_, index) => (
        <div key={index} className="space-y-4 ">
          <div className="flex items-center space-x-4 pt-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-200 animate-pulse rounded-full" />
          </div>
        </div>
      ))}

      <div className="hidden sm:block">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="space-y-4 mt-8">
            <div className="h-6 sm:h-8 w-full sm:w-3/4 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-full sm:w-2/3 bg-gray-200 animate-pulse rounded" />
            <div className="flex items-center space-x-4 pt-4">
              <div className="space-y-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
