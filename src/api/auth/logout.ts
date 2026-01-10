export async function logoutServer() {
    await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include",
    });
}
