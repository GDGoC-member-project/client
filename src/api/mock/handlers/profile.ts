import { http, HttpResponse } from "msw";

export const profileHandlers = [
    http.get("/api/v1/profiles", () => {
        return HttpResponse.json({
            status: "SUCCESS",
            data: {
                user_id: "3f5c2e91-8d4e-4a6b-9c7a-1c9f2a7e6d41",
                name: "김구글",
                generation: 5,
                part: "AI",
                role: "MEMBER",
                department: "인공지능응용학과",
                bio: "안녕하세용",
                mbti_info: "ENTJ",
                profile_image_url: null,
                tech_stacks: ["Computer Vision", "Self-Supervised Learning", "Next.js"],
                social_links: [
                    {
                        type: "GITHUB",
                        url: "https://github.com",
                    },
                ],
            },
            error: null,
        });
    }),
];
