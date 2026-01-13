declare global {
    var route: (
        name: string,
        params?: Record<string, unknown> | number | string | Array<number | string>,
        absolute?: boolean
    ) => string;
}

export {};
