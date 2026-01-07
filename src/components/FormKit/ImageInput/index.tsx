import { useRef, useState } from "react";
import type { ImageInputProps } from "./types";
import { useField } from "formik";
import { Asterisk, Image as ImageIcon, X, Loader2 } from "lucide-react";
import { cn } from "@/utils/classname";

export default function ImageInput({
    className,
    label,
    error,
    required,
    onUpload,
    maxSizeMB = 10,
    allowedMimeTypes = ["image/png", "image/jpeg", "image/webp", "image/gif"],
    previewClickable = true,
    ...props
}: ImageInputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [field, , helpers] = useField<string | undefined>(props.name!);

    const [localPreview, setLocalPreview] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [localError, setLocalError] = useState<string | null>(null);

    const url = field.value;
    const showClear = Boolean(url) || Boolean(localPreview);

    const pick = () => inputRef.current?.click();

    const clear = () => {
        helpers.setValue(undefined);
        helpers.setTouched(true);
        setLocalError(null);

        if (localPreview) {
            URL.revokeObjectURL(localPreview);
            setLocalPreview(null);
        }
        if (inputRef.current) inputRef.current.value = "";
    };

    const validateFile = (file: File) => {
        if (!allowedMimeTypes.includes(file.type)) {
            return `지원하지 않는 이미지 형식입니다. (${allowedMimeTypes.join(", ")})`;
        }
        const maxBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxBytes) {
            return `이미지 용량은 최대 ${maxSizeMB}MB까지 업로드할 수 있습니다.`;
        }
        return null;
    };

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        helpers.setTouched(true);
        setLocalError(null);

        const v = validateFile(file);
        if (v) {
            setLocalError(v);
            e.target.value = "";
            return;
        }

        const preview = URL.createObjectURL(file);
        if (localPreview) URL.revokeObjectURL(localPreview);
        setLocalPreview(preview);

        setIsUploading(true);
        try {
            const uploadedUrl = await onUpload(file);
            helpers.setValue(uploadedUrl);
        } catch {
            setLocalError("이미지 업로드에 실패했습니다. 다시 시도해 주세요.");
        } finally {
            setIsUploading(false);
            e.target.value = "";
        }
    };

    const displayedError = localError ?? error;
    const displayedPreview = url ?? localPreview;

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start gap-0.5">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="font-body03-regular text-grey-300 select-none"
                    >
                        {label}
                    </label>
                )}
                {required && (
                    <Asterisk size={14} strokeWidth={1.5} className="text-warning-yellow" />
                )}
            </div>

            <input
                {...props}
                ref={inputRef}
                type="file"
                accept={allowedMimeTypes.join(",")}
                className="hidden"
                onChange={onFileChange}
            />

            <div className="relative w-full">
                <button
                    type="button"
                    onClick={pick}
                    className={cn(
                        "w-full border-b border-grey-300 py-2 pr-8 transition-all duration-200 outline-none text-left",
                        "focus:border-b-white",
                        displayedError && "border-warning-yellow focus:border-warning-yellow",
                        className
                    )}
                >
                    <div className="flex items-center gap-2">
                        <ImageIcon size={18} strokeWidth={1.8} className="text-grey-300" />

                        <div className="flex-1 min-w-0">
                            {displayedPreview ? (
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cn(
                                            "h-10 w-10 rounded-md overflow-hidden border border-white/10 shrink-0",
                                            previewClickable && "cursor-pointer"
                                        )}
                                        onClick={(e) => {
                                            if (!previewClickable) return;
                                            e.preventDefault();
                                            pick();
                                        }}
                                        role={previewClickable ? "button" : undefined}
                                        aria-label={previewClickable ? "Change image" : undefined}
                                    >
                                        <img
                                            src={displayedPreview}
                                            alt="Selected"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <p className={cn("font-body01-regular truncate", "text-white")}>
                                        {isUploading ? "업로드 중..." : "이미지가 선택되었습니다."}
                                    </p>
                                </div>
                            ) : (
                                <p className="font-body01-regular text-grey-300">
                                    {isUploading ? "업로드 중..." : "이미지를 선택하세요"}
                                </p>
                            )}
                        </div>
                    </div>
                </button>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {isUploading && (
                        <span className="p-1 text-grey-300">
                            <Loader2 size={16} className="animate-spin" />
                        </span>
                    )}

                    {showClear && !isUploading && (
                        <button
                            type="button"
                            aria-label="Clear image"
                            onClick={clear}
                            className="p-1 rounded-md text-grey-300 hover:text-white transition-colors"
                        >
                            <X size={16} strokeWidth={2} />
                        </button>
                    )}
                </div>
            </div>

            {displayedError && (
                <p className="font-body04-regular text-warning-yellow mt-1.5">{displayedError}</p>
            )}
        </div>
    );
}
