import { Plus } from "lucide-react";

export default function AddCardButton({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <div className="w-full flex justify-center">
            <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-grey-900 pl-4 pr-5 py-2.5 font-body02-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:bg-grey-800 transition-colors"
                {...props}
            >
                <Plus size={20} />
                <span>파트 추가</span>
            </button>
        </div>
    );
}
