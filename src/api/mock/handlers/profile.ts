import { http, HttpResponse } from "msw";

const PARTS = ["APP", "FRONTEND", "BACKEND", "AI", "DESIGN"] as const;
const ROLES = ["LEAD", "CORE", "MEMBER"] as const;
const STACKS = [
    "React",
    "Next.js",
    "Spring",
    "Node.js",
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Swift",
];

function makeProfile(i: number) {
    return {
        user_id: crypto.randomUUID(),
        name: `멤버${i + 1}`,
        generation: 5,
        part: PARTS[i % PARTS.length],
        role: ROLES[i % ROLES.length],
        department: "컴퓨터공학과",
        bio: "안녕하세요",
        mbti_info: ["INTP", "ENTJ", "INFP", "ENFP"][i % 4],
        profile_image_url: null,
        tech_stacks: [STACKS[i % STACKS.length], STACKS[(i + 3) % STACKS.length]],
        social_links: [
            {
                type: "GITHUB",
                url: "https://github.com",
            },
        ],
    };
}

export const profileHandlers = [
    http.get("/api/v1/profiles", () => {
        const data = Array.from({ length: 30 }, (_, i) => makeProfile(i));

        return HttpResponse.json({
            status: "SUCCESS",
            data,
            error: null,
        });
    }),
];
