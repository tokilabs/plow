/**
 *  Encapsulates options for paging results.
 *
 * @class PagingOptions
 */
export class PagingOptions {

  private _pageSize: number;

  /**
   * Gets or sets the size of the page.
   * @type {number}
   */
  public get pageSize(): number {
    return this._pageSize;
  }

  public set pageSize(size: number) {
    if ( size < 1) throw new Error('pageSize must be greater than 0');
    this._pageSize = size;
  }

  /**
   * Gets or sets the page.
   * @type {number}
   */
  public page: number;

  /**
   * Gets or sets the total.
   * @type {number}
   */
  public total: number;

  /**
   * Gets the page count.
   * @readonly
   * @type {number}
   */
  public get pageCount(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  constructor(total: number, pageSize: number, currPage: number) {
    this.total = total;
    this.pageSize = pageSize;
    this.page = currPage;
  }

  /**
   * Returns the starting page number to show on pagination components
   *
   * Based on the amount of numbers displayed on the pagination component, this method will return the
   * starting number so the selected page is in middle, if possible.
   *
   * @param {number} amountOfNumbers How many numbers will be displayed on the component
   * @returns {number} The first page number
   */
  public getStartPageNumber(amountOfNumbers: number): number {
    const odd = amountOfNumbers % 2;
    const half = (amountOfNumbers / 2);

    if (this.pageCount < amountOfNumbers || this.page <= half + odd)
      return 1;

    //  we are over (or at) the middle of the list
    let last = this.page + half + odd;

    if (last > this.pageCount + 1) {
        last = this.pageCount + 1;
    }

    return last - amountOfNumbers > 1 ? last - amountOfNumbers : 1;
  }
}
