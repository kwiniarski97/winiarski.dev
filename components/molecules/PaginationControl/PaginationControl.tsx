import { Button, ButtonTheme } from 'components/atoms/Button/Button';

interface PaginationControlProps {
  page: number;
  totalPages: number;
  onNextPageClick?: () => void;
  onPreviousPageClick?: () => void;
}

export function PaginationControl({
  onPreviousPageClick,
  onNextPageClick,
  page,
  totalPages,
}: PaginationControlProps) {
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;
  return (
    <div className="px-3 grid grid-cols-2">
      {!isFirstPage && (
        <Button
          theme={ButtonTheme.Primary}
          onClick={onPreviousPageClick}
          className="justify-self-start"
        >
          Previous
        </Button>
      )}
      {!isLastPage && (
        <Button
          theme={ButtonTheme.Primary}
          onClick={onNextPageClick}
          className="justify-self-end"
        >
          Next
        </Button>
      )}
    </div>
  );
}
