import { Expression, IEnumerable, OrderDirection, makeCompareFn, isBlank } from '@cashfarm/lang';

//// DEV NOTE
//// Having two interfaces for ordering is a way to make clear
//// to the developer that subsequent calls to `orderBy`

export interface IOrderableResult<T> {
  /* @todo: readonly*/ count: number;
  orderBy(selector: Expression<T, number | string>): IOrderedResult<T>;
  toArray(): Array<T>;
  toArray(limit: number): Array<T>;
  toArray(limit: number, offset: number): Array<T>;
}

export interface IOrderedResult<T> {
  thenBy(selector: Expression<T, number | string>): IOrderedResult<T>;
  toArray(): Array<T>;
  toArray(limit: number): Array<T>;
  toArray(limit: number, offset: number): Array<T>;
}

export class OrderableResult<T> implements IOrderableResult<T>, IOrderedResult<T>, Iterable<T> {

    protected items: IEnumerable<T>;

    get count(): number {
        return this.items.length;
    }

    constructor (items: IEnumerable<T>) {
        this.items = items;
    }

    public orderBy(selector: Expression<T, number | string>): OrderableResult<T>;
    public orderBy(selector: Expression<T, number | string>, order: OrderDirection): OrderableResult<T>;
    public orderBy(selector: Expression<T, number | string>, order?: OrderDirection): OrderableResult<T> {
        if (isBlank(order))
          order = OrderDirection.Asc;

        const result: IEnumerable<T> = this.items.sort(makeCompareFn(selector, order));
        return new OrderableResult<T>(result);
    }

    public orderByDescending(selector: Expression<T, number | string>): OrderableResult<T> {
      return this.orderBy(selector, OrderDirection.Desc);
    }

    public thenBy(selector: Expression<T, number | string>): OrderableResult<T>;
    public thenBy(selector: Expression<T, number | string>, order?: OrderDirection): OrderableResult<T> {
        return this.orderBy(selector, isBlank(order) ? OrderDirection.Asc : order);
    }

    public toArray(): Array<T>;
    public toArray(limit: number): Array<T>;
    public toArray(limit = 0, offset = 0): Array<T> {
        return this.items.slice(offset, offset + limit);
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
