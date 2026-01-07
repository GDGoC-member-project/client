import type { Editor } from "@tiptap/react";

export type ContentToolbarProps = {
    editor: Editor;
    onImageUpload?: (file: File) => Promise<string>;
};
