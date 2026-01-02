import type { SubmitButtonProps } from "./types";

export default function SubmitButton({ label = "등록하기", isSubmitting }: SubmitButtonProps) {
    return (
        <div className="w-full mx-auto px-4 flex justify-center">
            <button
                className="flex items-center justify-center max-w-md w-full py-4 bg-[#f6f6f6]/3 rounded-2xl border-[0.5px] border-[#444444] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                type="submit"
                disabled={isSubmitting}
            >
                <p className="font-body02-medium">{label}</p>
            </button>
        </div>
    );
}
