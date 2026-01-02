import { getIn, useFormikContext } from "formik";
import type { FormSectionProps } from "./types";
import { FormSectionContext } from "./hooks";

export * from "./hooks";

export default function FormSection<T>({ title, children }: FormSectionProps) {
    const { touched, errors } = useFormikContext<T>();

    const te = (name: string) => (getIn(touched, name) ? getIn(errors, name) : undefined);

    return (
        <FormSectionContext.Provider value={{ te }}>
            <section className="flex flex-col gap-6">
                <p className="font-head02-medium">{title}</p>
                {children}
            </section>
        </FormSectionContext.Provider>
    );
}
