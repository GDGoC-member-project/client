import type { Profile } from "@/types/profile";

export const MOCK_PROFILE: Profile = {
    id: "1",
    name: "김구글",
    aboutMe: "안녕하세요 어쩌고 지치고 어쩌고 저리고 어리고 지치고 어지고 지내고",
    position: "App Developer",
    generation: "5기",
    role: "Core Member",
    skills: ["Swift", "Flutter", "React"],
    mbti: "ENTJ",
    links: [
        {
            id: "1",
            type: "github",
            url: "https://github.com/",
        },
        {
            id: "2",
            type: "email",
            url: "mailto:example@example.com",
        },
        {
            id: "3",
            type: "instagram",
            url: "https://instagram.com/",
        },
    ],
    cards: [],
};


