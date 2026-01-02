import { createContext, useContext } from "react";

type Ctx = {
    te: (name: string) => string | undefined;
    v: (name: string) => any;
    list: (name: string) => any[];
};

export const FormSectionContext = createContext<Ctx | null>(null);

export const useSection = () => {
    const ctx = useContext(FormSectionContext);
    if (!ctx) throw new Error("ctx not found: useSection must be used inside FormSection");
    return ctx;
};
