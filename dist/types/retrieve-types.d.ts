import { BaseResponse } from './api-types';
import { PersonResponse } from './common-types';
export declare type RetrieveParams = {
    id: string;
} & {
    pretty?: boolean;
};
export interface RetrieveResponse extends BaseResponse {
    data: PersonResponse;
}
//# sourceMappingURL=retrieve-types.d.ts.map