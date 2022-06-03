import { IPaginate } from '../types/pagination';

/**
 * @description Class contains info about state pagination
 */
export class StatePagination {
  static DEFAULT_PAGINATE_STATE: IPaginate = {
    docs: [],
    totalDocs: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  };
  static addDataToState = (payload: any, prevPayload: IPaginate): IPaginate => ({
    ...payload,
    docs: [...prevPayload.docs, ...payload.docs],
  });
}
