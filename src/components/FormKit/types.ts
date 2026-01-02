import type { FormikErrors, FormikTouched } from "formik";

export type FormSectionProps<T> = {
    touched: FormikTouched<T>;
    errors: FormikErrors<T>;
};
