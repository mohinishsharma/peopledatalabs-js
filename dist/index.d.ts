import { AutoCompleteParams, AutoCompleteResponse } from './types/autocomplete-types';
import { CompanyCleanerParams, CompanyCleanerResponse, LocationCleanerParams, LocationCleanerResponse, SchoolCleanerParams, SchoolCleanerResponse } from './types/cleaner-types';
import { CompanyEnrichmentParams, CompanyEnrichmentResponse, PersonEnrichmentParams, PersonEnrichmentResponse } from './types/enrichment-types';
import { BulkPersonEnrichmentParams, BulkPersonEnrichmentResponse } from './types/bulk-types';
import { CompanySearchParams, CompanySearchResponse, PersonSearchParams, PersonSearchResponse } from './types/search-types';
import { IdentifyParams, IdentifyResponse } from './types/identify-types';
import { APISettings } from './types/api-types';
import { RetrieveParams, RetrieveResponse } from './types/retrieve-types';
import { JobTitleParams, JobTitleResponse } from './types/jobTitle-types';
import { SkillParams, SkillResponse } from './types/skill-types';
declare class PDLJS {
    private readonly apiKey;
    private readonly basePath;
    private readonly sandboxBasePath;
    person: {
        enrichment: (params: PersonEnrichmentParams) => Promise<PersonEnrichmentResponse>;
        search: {
            elastic: (params: PersonSearchParams) => Promise<PersonSearchResponse>;
            sql: (params: PersonSearchParams) => Promise<PersonSearchResponse>;
        };
        identify: (params: IdentifyParams) => Promise<IdentifyResponse>;
        retrieve: (params: RetrieveParams) => Promise<RetrieveResponse>;
        bulk: (records: BulkPersonEnrichmentParams) => Promise<BulkPersonEnrichmentResponse>;
    };
    company: {
        enrichment: (params: CompanyEnrichmentParams) => Promise<CompanyEnrichmentResponse>;
        search: {
            elastic: (params: CompanySearchParams) => Promise<CompanySearchResponse>;
            sql: (params: CompanySearchParams) => Promise<CompanySearchResponse>;
        };
        cleaner: (params: CompanyCleanerParams) => Promise<CompanyCleanerResponse>;
    };
    school: {
        cleaner: (params: SchoolCleanerParams) => Promise<SchoolCleanerResponse>;
    };
    location: {
        cleaner: (params: LocationCleanerParams) => Promise<LocationCleanerResponse>;
    };
    autocomplete: (params: AutoCompleteParams) => Promise<AutoCompleteResponse>;
    skill: (params: SkillParams) => Promise<SkillResponse>;
    jobTitle: (params: JobTitleParams) => Promise<JobTitleResponse>;
    constructor({ apiKey, basePath, sandboxBasePath, version, }: APISettings);
}
export default PDLJS;
//# sourceMappingURL=index.d.ts.map