import { PersonEnrichmentParams, PersonEnrichmentResponse } from './enrichment-types';
import { RateLimit } from './api-types';
export interface BulkPersonEnrichmentRequest {
    params: PersonEnrichmentParams;
    metadata?: unknown;
}
export interface BulkPersonEnrichmentParams {
    requests: Array<BulkPersonEnrichmentRequest>;
}
export interface BulkPersonEnrichmentResponseItem extends PersonEnrichmentResponse {
    metadata?: unknown;
}
export declare type BulkPersonEnrichmentResponse = {
    items: Array<BulkPersonEnrichmentResponseItem>;
    rateLimit: RateLimit;
};
//# sourceMappingURL=bulk-types.d.ts.map