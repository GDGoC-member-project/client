import { useRef, useState } from "react";
import { cn } from "@/utils/classname";
import type { ImageInputCircleProps } from "./types";
import { useField } from "formik";
import { Camera, X, Loader2 } from "lucide-react";

export default function ImageInputCircle({
    name,
    size = 200,
    onUpload,
    error,
    disabled,
}: ImageInputCircleProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [field, , helpers] = useField<string | undefined>(name);

    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [localError, setLocalError] = useState<string | null>(null);

    const imageUrl = field.value;
    const displayUrl = imageUrl ?? preview;

    const pick = () => {
        if (!disabled) inputRef.current?.click();
    };

    const clear = () => {
        helpers.setValue(undefined);
        helpers.setTouched(true);
        setLocalError(null);

        if (preview) {
            URL.revokeObjectURL(preview);
            setPreview(null);
        }
        if (inputRef.current) inputRef.current.value = "";
    };

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        helpers.setTouched(true);
        setLocalError(null);

        const local = URL.createObjectURL(file);
        if (preview) URL.revokeObjectURL(preview);
        setPreview(local);

        setLoading(true);
        try {
            const url = await onUpload(file);
            helpers.setValue(url);
        } catch {
            setLocalError("이미지 업로드에 실패했습니다.");
        } finally {
            setLoading(false);
            e.target.value = "";
        }
    };

    const shownError = localError ?? error;

    return (
        <div className="flex flex-col items-center gap-2">
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onChange}
                disabled={disabled}
            />

            <div
                className={cn(
                    "relative rounded-full overflow-hidden group",
                    "border border-white/10 bg-white/5",
                    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                    shownError && "border-warning-yellow"
                )}
                style={{ width: size, height: size }}
                onClick={pick}
                role="button"
                aria-label="Upload profile image"
            >
                {displayUrl ? (
                    <img src={displayUrl} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-grey-300">
                        <Camera size={24} />
                    </div>
                )}

                {!disabled && (
                    <div
                        className={cn(
                            "absolute inset-0 bg-black/50",
                            "opacity-0 group-hover:opacity-100 transition-opacity",
                            "flex items-center justify-center text-white"
                        )}
                    >
                        {loading ? (
                            <Loader2 size={20} className="animate-spin" />
                        ) : (
                            <Camera size={20} />
                        )}
                    </div>
                )}

                {!disabled && displayUrl && !loading && (
                    <button
                        type="button"
                        aria-label="Remove image"
                        onClick={(e) => {
                            e.stopPropagation();
                            clear();
                        }}
                        className="absolute -top-1 -right-1 rounded-full bg-black/70 p-1 text-white hover:bg-black"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            {shownError && (
                <p className="font-body04-regular text-warning-yellow text-center">{shownError}</p>
            )}
        </div>
    );
}
