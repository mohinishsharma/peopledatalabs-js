import { PersonEnrichmentParams, CompanyEnrichmentParams, EnrichmentType, PersonEnrichmentResponse, CompanyEnrichmentResponse } from '../../types/enrichment-types';
declare const _default: <T extends PersonEnrichmentParams | CompanyEnrichmentParams, K extends PersonEnrichmentResponse | CompanyEnrichmentResponse>(basePath: string, sandboxBasePath: string, apiKey: string, params: T, type: EnrichmentType) => Promise<K>;
export default _default;
//# sourceMappingURL=index.d.ts.map