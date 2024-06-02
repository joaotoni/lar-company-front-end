export type ApiResponseType<T> = {
    ok: boolean;
    data: T;
    message?: string;
    errors?: Record<string, unknown> | [Record<string, unknown>];
};