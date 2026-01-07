export type ApiResponse<T> = {
    status: "SUCCESS" | "FAIL";
    data: T;
    error: unknown;
};
