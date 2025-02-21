const CategoriesSkeleton = () => {
  return (
    <>
      <li className="flex justify-between items-center p-3 rounded-lg cursor-pointer animate-pulse">
        <div className="h-3 w-24 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-200 rounded-md"></div>
      </li>
      {[...Array(5)].map((_, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-3 rounded-lg cursor-pointer"
        >
          <div className="h-3 w-32 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-12 bg-gray-200 rounded-md"></div>
        </li>
      ))}
    </>
  );
};

export default CategoriesSkeleton;
