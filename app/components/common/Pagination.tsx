import { handleAndPreventDefault } from "@/lib/util";
import _ from "lodash";

const ACTIVE_PAGE_ITEM = "page-item active";
const PAGE_ITEM = "page-item";

interface PaginationProps {
  pagesCount: number;
  currenPage: number;

  setPage(it: number): void;
}

interface PageSelectorProps {
  pageNumber: number;
  isSelected: boolean;

  setPage(it: number): void;
}

function PageSelector({ pageNumber, isSelected, setPage }: PageSelectorProps) {
  const pageClass = isSelected ? ACTIVE_PAGE_ITEM : PAGE_ITEM;

  return (
    <li className={pageClass}>
      <a
        className="page-link"
        href=""
        onClick={handleAndPreventDefault(
          () => !isSelected && setPage(pageNumber)
        )}
      >
        {pageNumber}
      </a>
    </li>
  );
}

export default function Pagination({
  pagesCount,
  currenPage,
  setPage,
}: PaginationProps) {
  if (pagesCount < 2) return <></>;
  else
    return (
      <ul className="pagination">
        {_.range(1, pagesCount + 1).map((it) => (
          <PageSelector
            key={it}
            pageNumber={it}
            isSelected={currenPage === it}
            setPage={setPage}
          />
        ))}
      </ul>
    );
}
