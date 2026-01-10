import { EditorContent, useEditor } from "@tiptap/react";
import type { ContentViewerProps } from "./types";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";

export default function ContentViewer({ content, className }: ContentViewerProps) {
    const editor = useEditor({
        editable: false,
        editorProps: {
            attributes: {
                class: "w-full max-w-none min-h-100 text-white font-pretendard-variable prose prose-invert focus:outline-none focus:ring-0 outline-none",
            },
        },
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
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
        content: content || "",
    });

    if (!editor) return null;

    return (
        <div className={`${className} w-full max-w-6xl px-4`}>
            <EditorContent editor={editor} />
        </div>
    );
}
