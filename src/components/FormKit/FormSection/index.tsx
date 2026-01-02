import { getIn, useFormikContext } from "formik";
import type { FormSectionProps } from "./types";
import { FormSectionContext } from "./hooks";

export * from "./hooks";

export default function FormSection<T>({ title, children }: FormSectionProps) {
    const { values, touched, errors } = useFormikContext<T>();

    const te = (name: string) => (getIn(touched, name) ? getIn(errors, name) : undefined);
    const v = (name: string) => getIn(values, name);
    const list = (name: string) => getIn(values, name) ?? [];

    return (
        <FormSectionContext.Provider value={{ te, v, list }}>
            <section className="flex flex-col gap-6">
                <p className="font-head02-medium">{title}</p>
                {children}
            </section>
        </FormSectionContext.Provider>
    );
}
