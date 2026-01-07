export type UUID = string;

export const isUUID = (value: string): value is UUID =>
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

export const asUUID = (value: string): UUID => value as UUID;
