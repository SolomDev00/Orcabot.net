const ServiceSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-1 px-4 py-3 border border-gray-300 rounded-lg w-32">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-3 w-16 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg w-40">
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-3 w-20 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="grid grid-cols-2 gap-5 mb-5">
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 rounded-full w-32"></div>
              <div className="h-4 bg-gray-300 rounded-full w-20"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded-full mt-4 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full mt-2 w-3/4"></div>
            <div className="mt-4">
              <div className="h-3 bg-gray-300 rounded-full w-20 mb-3"></div>
              <div className="flex gap-2 flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 rounded-full w-16"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-2">
                  <div className="h-3 bg-gray-300 rounded-full w-28 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                </div>
              </div>
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 rounded-full w-32"></div>
              <div className="h-4 bg-gray-300 rounded-full w-20"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded-full mt-4 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full mt-2 w-3/4"></div>
            <div className="mt-4">
              <div className="h-3 bg-gray-300 rounded-full w-20 mb-3"></div>
              <div className="flex gap-2 flex-wrap">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 rounded-full w-16"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-2">
                  <div className="h-3 bg-gray-300 rounded-full w-28 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                </div>
              </div>
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSkeleton;
