import { BaseResponse } from './api-types';
import { CompanyResponse, PersonResponse } from './common-types';
export interface BaseSearchParams {
    searchQuery?: string | object;
    size?: number;
    from?: number;
    scroll_token?: string;
    dataset?: string;
    titlecase?: boolean;
    pretty?: boolean;
    sandbox?: boolean;
}
export interface BaseSearchResponse<T> extends BaseResponse {
    scroll_token: string;
    data: Array<T>;
    total: number;
}
export declare type SearchType = 'sql' | 'elastic';
export interface PersonSearchParams extends BaseSearchParams {
}
export interface PersonSearchResponse extends BaseSearchResponse<PersonResponse> {
}
export interface CompanySearchParams extends BaseSearchParams {
}
export interface CompanySearchResponse extends BaseSearchResponse<CompanyResponse> {
}
//# sourceMappingURL=search-types.d.ts.map