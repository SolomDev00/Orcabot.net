import { FC, useEffect, useState } from "react";
import { SoArrowLeft, SoArrowRight } from "solom-icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visiblePages, setVisiblePages] = useState(5);

  useEffect(() => {
    const updateVisiblePages = () => {
      if (window.innerWidth <= 640) {
        setVisiblePages(3);
      } else {
        setVisiblePages(5);
      }
    };

    window.addEventListener("resize", updateVisiblePages);

    updateVisiblePages();

    return () => window.removeEventListener("resize", updateVisiblePages);
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsis = (
      <span key="ellipsis" className="px-2">
        ...
      </span>
    );

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`py-2 px-4 rounded-full ${
            currentPage === i
              ? "gradientBg text-white"
              : "bg-transparent text-[#515B6F]"
          }`}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(showEllipsis);
      pageNumbers.unshift(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`py-2 px-4 rounded-full ${
            currentPage === 1
              ? "gradientBg text-white"
              : "bg-transparent text-[#515B6F]"
          }`}
        >
          1
        </button>
      );
    }
    if (endPage < totalPages) {
      pageNumbers.push(showEllipsis);
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`py-2 px-4 rounded-full ${
            currentPage === totalPages
              ? "gradientBg text-white"
              : "bg-transparent text-[#515B6F]"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center gap-2 mt-4 max-sm:gap-0" dir="ltr">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`p-2 rounded-full bg-transparent ${
          currentPage === 1 ? "text-[#D1D5DB]" : "text-[#25324B]"
        }`}
        disabled={currentPage === 1}
      >
        <SoArrowLeft className="w-5 h-5" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`p-2 rounded-full bg-transparent ${
          currentPage === totalPages ? "text-[#D1D5DB]" : "text-[#25324B]"
        }`}
        disabled={currentPage === totalPages}
      >
        <SoArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
