import { useRef } from "react";
import type { ContentToolbarProps } from "./types";
import {
    Bold,
    Underline,
    Heading2,
    List,
    ListOrdered,
    CheckSquare,
    Link as LinkIcon,
    Image as ImageIcon,
    Undo,
    Redo,
    Heading1,
    Heading3,
} from "lucide-react";

export function ContentToolbar({ editor, onImageUpload }: ContentToolbarProps) {
    const fileRef = useRef<HTMLInputElement | null>(null);

    const pickImage = () => fileRef.current?.click();

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onImageUpload) return;

        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const url = await onImageUpload(file);
            editor.chain().focus().setImage({ src: url }).run();
        } finally {
            e.target.value = "";
        }
    };

    const setLink = () => {
        const prev = editor.getAttributes("link").href as string | undefined;
        const url = window.prompt("URL", prev ?? "");
        if (url === null) return;

        const trimmed = url.trim();
        if (!trimmed) {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({ href: trimmed }).run();
    };

    return (
        <div className="flex flex-wrap items-center gap-3 border-b border-grey-300 px-3 py-1.5">
            <ToolBtn
                icon={<Bold size={16} />}
                active={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
            />
            <ToolBtn
                icon={<Underline size={16} />}
                active={editor.isActive("underline")}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            />

            <Divider />

            <ToolBtn
                icon={<Heading1 size={16} />}
                active={editor.isActive("heading", { level: 1 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            />
            <ToolBtn
                icon={<Heading2 size={16} />}
                active={editor.isActive("heading", { level: 2 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            />
            <ToolBtn
                icon={<Heading3 size={16} />}
                active={editor.isActive("heading", { level: 3 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            />

            <ToolBtn
                icon={<List size={16} />}
                active={editor.isActive("bulletList")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            />
            <ToolBtn
                icon={<ListOrdered size={16} />}
                active={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            />
            <ToolBtn
                icon={<CheckSquare size={16} />}
                active={editor.isActive("taskList")}
                onClick={() => editor.chain().focus().toggleTaskList().run()}
            />

            <Divider />

            <ToolBtn
                icon={<LinkIcon size={16} />}
                active={editor.isActive("link")}
                onClick={setLink}
            />

            <ToolBtn icon={<ImageIcon size={16} />} disabled={!onImageUpload} onClick={pickImage} />

            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
            />

            <Divider />

            <ToolBtn
                icon={<Undo size={16} />}
                disabled={!editor.can().chain().focus().undo().run()}
                onClick={() => editor.chain().focus().undo().run()}
            />
            <ToolBtn
                icon={<Redo size={16} />}
                disabled={!editor.can().chain().focus().redo().run()}
                onClick={() => editor.chain().focus().redo().run()}
            />
        </div>
    );
}

function Divider() {
    return <div className="mx-1 h-5 w-px bg-grey-500" />;
}

function ToolBtn({
    icon,
    onClick,
    active,
    disabled,
}: {
    icon: React.ReactNode;
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={[
                "flex items-center justify-center rounded-lg p-2",
                disabled ? "opacity-40" : "hover:bg-grey-900 cursor-pointer",
                active ? "bg-grey-800" : "",
            ].join(" ")}
        >
            {icon}
        </button>
    );
}
