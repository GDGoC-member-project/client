export function splitTokens(raw: string, separator = ","): string[] {
    const pattern =
        separator === "," ? /[,\n;]+/g : new RegExp(`[${escapeRegExp(separator)}\n;]+`, "g");

    return raw
        .split(pattern)
        .map((s) => s.trim())
        .filter(Boolean);
}

export function escapeRegExp(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function normalizeTokens(
    tokens: string[],
    {
        maxItemLength,
        preventDuplicates = true,
        normalize = (v: string) => v,
        existing = [],
        maxItems,
    }: {
        existing?: string[];
        maxItemLength?: number;
        preventDuplicates?: boolean;
        normalize?: (v: string) => string;
        maxItems?: number;
    }
) {
    let next = [...existing];

    for (const raw of tokens) {
        if (maxItems != null && next.length >= maxItems) break;

        let t = normalize(raw).trim();
        if (!t) continue;

        if (maxItemLength) t = t.slice(0, maxItemLength);
        if (preventDuplicates && next.includes(t)) continue;

        next.push(t);
    }

    return next;
}
