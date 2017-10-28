import { OrderableResult, IOrderableResult } from './orderableResult';
import { PagingOptions } from './pagingOptions';

export interface IPageableResult<T> extends IOrderableResult<T> {
  page(page: number, pageSize: number): IOrderableResult<T>;
}

/**
 * Represents a group of items which can be paged.
 * @export
 * @class PageableResult
 * @extends OrderableResult<T>
 * @implements IPageableResult<T>
 * @template T
 */
export class PageableResult<T> extends OrderableResult<T> implements IPageableResult<T> {

  private pagingOptions: PagingOptions;

  constructor(items: ArrayLike<T>, pageSize = 20, currPage = 1) {
    super(items);
    this.pagingOptions = new PagingOptions(items.length, pageSize, currPage);
  }

  public page(page: number, pageSize: number): IOrderableResult<T> {
    const start = (page - 1) * pageSize;

    return new OrderableResult<T>(Array.from(this.items).slice(start, start + pageSize));
  }
}
