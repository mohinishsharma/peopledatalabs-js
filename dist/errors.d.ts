import { AxiosError } from 'axios';
import { ErrorEndpoint } from './types/error-types';
declare const check: (params: unknown, basePath: string, apiKey: string, type: string | null, endpoint: ErrorEndpoint) => Promise<void>;
declare const errorHandler: (error: AxiosError) => {
    status: number;
    message: string;
};
export { check, errorHandler };
//# sourceMappingURL=errors.d.ts.map