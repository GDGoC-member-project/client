import { useCallback, useEffect, useRef } from "react";
import { useField } from "formik";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Highlight from "@tiptap/extension-highlight";
import { ContentToolbar } from "./components/Toolbar";

type Props = {
    name: string;
    placeholder?: string;
    editable?: boolean;
    className?: string;
    onImageUpload?: (file: File) => Promise<string>;
};

export default function ContentField({
    name,
    placeholder = "내용을 입력해 주세요",
    editable = true,
    className,
    onImageUpload,
}: Props) {
    const [field, meta, helpers] = useField<any>(name);
    const initial = useRef(field.value ?? { type: "doc", content: [] });

    const editor = useEditor({
        editable,
        editorProps: {
            attributes: {
                class: "w-full max-w-none min-h-100 text-white font-pretendard-variable prose prose-invert focus:outline-none focus:ring-0 outline-none",
            },
        },
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            Placeholder.configure({ placeholder }),
            Typography,
            Underline,
            Highlight,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                linkOnPaste: true,
                HTMLAttributes: { rel: "noopener noreferrer nofollow" },
            }),
            Image.configure({ inline: false }),
            TaskList,
            TaskItem.configure({ nested: true }),
        ],
        content: initial.current,
        onUpdate: ({ editor }) => {
            helpers.setValue(editor.getJSON());
            if (!meta.touched) helpers.setTouched(true, false);
        },
    });

    useEffect(() => {
        if (!editor) return;
        const next = field.value ?? { type: "doc", content: [] };
        const current = editor.getJSON();
        if (JSON.stringify(current) !== JSON.stringify(next)) {
            editor.commands.setContent(next);
        }
    }, [field.value, editor]);

    const error = meta.touched ? (meta.error as string | undefined) : undefined;

    const handlePaste = useCallback(
        async (e: React.ClipboardEvent) => {
            if (!editor || !onImageUpload) return;

            const items = e.clipboardData?.items;
            if (!items) return;

            const fileItem = Array.from(items).find((it) => it.type.startsWith("image/"));
            if (!fileItem) return;

            e.preventDefault();
            const file = fileItem.getAsFile();
            if (!file) return;

            const url = await onImageUpload(file);
            editor.chain().focus().setImage({ src: url }).run();
        },
        [editor, onImageUpload]
    );

    if (!editor) return null;

    return (
        <div className={className}>
            <ContentToolbar editor={editor} onImageUpload={onImageUpload} />

            <EditorContent
                onPaste={handlePaste}
                editor={editor}
                className="p-4 border-b border-white"
            />

            {error && <p className="font-body04-regular text-warning-yellow mt-1.5">{error}</p>}
        </div>
    );
}
