import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div
      className="
      flex
      items-center
      justify-center
      gap-2
      mt-16
      flex-wrap
      "
    >
      {/* Previous */}

      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="
            px-4
            py-2
            rounded-xl
            border
            border-slate-200
            bg-white
            hover:bg-slate-100
            transition
          "
        >
          Previous
        </Link>
      )}

      {/* Pages */}

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-slate-500">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`
              w-10
              h-10
              rounded-xl
              border
              flex
              items-center
              justify-center
              transition
              ${
                currentPage === page
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white border-slate-200 hover:bg-slate-100"
              }
            `}
          >
            {page}
          </Link>
        ),
      )}

      {/* Next */}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="
            px-4
            py-2
            rounded-xl
            border
            border-slate-200
            bg-white
            hover:bg-slate-100
            transition
          "
        >
          Next
        </Link>
      )}
    </div>
  );
}
