import clsx from 'clsx';
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
    <div className="px-3 flex justify-between">
      <Button
        theme={ButtonTheme.Primary}
        onClick={onPreviousPageClick}
        className={clsx(isFirstPage && 'invisible')}
      >
        Previous
      </Button>
      <Button
        theme={ButtonTheme.Primary}
        onClick={onNextPageClick}
        className={clsx(isLastPage && 'invisible')}
      >
        Next
      </Button>
    </div>
  );
}
