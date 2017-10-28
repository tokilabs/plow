import { Expression, OrderDirection, makeCompareFn, isBlank } from '@cashfarm/lang';

//// DEV NOTE
//// Having two interfaces for ordering is a way to make clear
//// to the developer that subsequent calls to `orderBy`

export interface IOrderableResult<T> {
  readonly count: number;
  orderBy(selector: Expression<T, number | string>): IOrderedResult<T>;
  toArray(limit?: number, offset?: number): T[];
}

export interface IOrderedResult<T> {
  thenBy(selector: Expression<T, number | string>): IOrderedResult<T>;
  toArray(limit?: number, offset?: number): T[];
}

export class OrderableResult<T> implements IOrderableResult<T>, IOrderedResult<T>, Iterable<T> {

    protected items: ArrayLike<T>;

    get count(): number {
        return this.items.length;
    }

    constructor (items: ArrayLike<T>) {
        this.items = items;
    }

    public orderBy(selector: Expression<T, number | string>, order?: OrderDirection): OrderableResult<T> {
        if (isBlank(order))
          order = OrderDirection.Asc;

        const result: ArrayLike<T> = Array.from(this.items).sort(makeCompareFn(selector, order));

        return new OrderableResult<T>(result);
    }

    public orderByDescending(selector: Expression<T, number | string>): OrderableResult<T> {
      return this.orderBy(selector, OrderDirection.Desc);
    }

    public thenBy(selector: Expression<T, number | string>): OrderableResult<T>;
    public thenBy(selector: Expression<T, number | string>, order?: OrderDirection): OrderableResult<T> {
        return this.orderBy(selector, isBlank(order) ? OrderDirection.Asc : order);
    }

    public toArray(limit = 0, offset = 0): T[] {
        return Array.from(this.items).slice(offset, offset + limit);
    }

    // Iterable protocol
    public [Symbol.iterator](): Iterator<T> {
      let pointer = 0;
      const items = this.items;

      return {
        next(): IteratorResult<T> {
          if (pointer < items.length) {
            return {
              done: false,
              value: items[pointer += 1]
            };
          }
          else {
            return { done: true, value: undefined };
          }
        }
      };
    }
}
