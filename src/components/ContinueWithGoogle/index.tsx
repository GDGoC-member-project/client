import { openGoogleLoginPopup } from "@/api/auth/login";
import GoogleCtnDark from "@/assets/icons/google_ctn_dark.svg?react";

export default function ContinueWithGoogle() {
    const handleGoogleLogin = () => {
        openGoogleLoginPopup();
    };

    return (
        <button
            type="button"
            onClick={handleGoogleLogin}
            className="cursor-pointer rounded-full hover:bg-grey-900 border border-transparent hover:border-grey-800 transition-colors"
        >
            <GoogleCtnDark />
        </button>
    );
}
