import { useState } from "react";
import { Link } from "react-router-dom";
import { MOCK_PROFILE } from "../mock";
import type { ProfileLink } from "@/types/profile";
import UploadIcon from "@/assets/icons/upload.svg?react";

export default function ProfileEdit() {
    const [formData, setFormData] = useState({
        name: MOCK_PROFILE.name,
        aboutMe: MOCK_PROFILE.aboutMe,
        position: MOCK_PROFILE.position,
        skills: MOCK_PROFILE.skills,
        mbti: MOCK_PROFILE.mbti || "",
        links:
            MOCK_PROFILE.links.length > 0
                ? MOCK_PROFILE.links
                : [
                      { id: crypto.randomUUID(), type: "github" as const, url: "" },
                      { id: crypto.randomUUID(), type: "github" as const, url: "" },
                  ],
        cards:
            MOCK_PROFILE.cards.length > 0
                ? MOCK_PROFILE.cards
                : [
                      { id: crypto.randomUUID(), title: "", description: "", url: "" },
                      { id: crypto.randomUUID(), title: "", description: "", url: "" },
                      { id: crypto.randomUUID(), title: "", description: "", url: "" },
                  ],
    });
    const [currentLinkTab, setCurrentLinkTab] = useState(0);
    const [currentCardTab, setCurrentCardTab] = useState(0);
    const [newSkill, setNewSkill] = useState("");
    const [selectedLinkIcon, setSelectedLinkIcon] = useState(0);

    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-4 mb-12">
                    <h1 className="font-title03-medium">프로필 수정</h1>
                    <p className="font-body03-regular text-grey-300">어쩌고어머어머어쩌고</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                    <div className="size-50 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="size-37.5 bg-grey-800 rounded-full" />
                    </div>

                    <div className="flex-1 flex flex-col gap-6 max-w-md">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-body03-medium">이름</label>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                {formData.name && (
                                    <button
                                        onClick={() => setFormData({ ...formData, name: "" })}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-body03-medium">About Me</label>
                            <div className="flex items-center gap-2 w-full">
                                <textarea
                                    value={formData.aboutMe}
                                    onChange={(e) =>
                                        setFormData({ ...formData, aboutMe: e.target.value })
                                    }
                                    maxLength={30}
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700 min-h-20"
                                />
                                {formData.aboutMe && (
                                    <button
                                        onClick={() => setFormData({ ...formData, aboutMe: "" })}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <p className="font-body04-regular text-grey-300">
                                최대 글자 수는 30자입니다.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-body03-medium">Position</label>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    value={formData.position}
                                    onChange={(e) =>
                                        setFormData({ ...formData, position: e.target.value })
                                    }
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                {formData.position && (
                                    <button
                                        onClick={() => setFormData({ ...formData, position: "" })}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-body03-medium">Skills</label>
                            <div className="flex flex-wrap gap-2 mb-2 w-full">
                                {formData.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-1 bg-grey-900 rounded-full"
                                    >
                                        <span className="font-body04-regular">{skill}</span>
                                        <button
                                            onClick={() => {
                                                setFormData({
                                                    ...formData,
                                                    skills: formData.skills.filter(
                                                        (_, i) => i !== idx
                                                    ),
                                                });
                                            }}
                                            className="font-body04-regular text-grey-300 hover:text-white"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newSkill.trim()) {
                                            setFormData({
                                                ...formData,
                                                skills: [...formData.skills, newSkill.trim()],
                                            });
                                            setNewSkill("");
                                        }
                                    }}
                                    placeholder="스킬을 입력하고 Enter를 누르세요"
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-body03-medium">MBTI</label>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    value={formData.mbti}
                                    onChange={(e) =>
                                        setFormData({ ...formData, mbti: e.target.value })
                                    }
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                {formData.mbti && (
                                    <button
                                        onClick={() => setFormData({ ...formData, mbti: "" })}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-4 w-full">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setCurrentLinkTab(0)}
                                    className={`font-body03-medium ${
                                        currentLinkTab === 0 ? "underline" : "text-grey-300"
                                    }`}
                                >
                                    링크 1
                                </button>
                                <button
                                    onClick={() => setCurrentLinkTab(1)}
                                    className={`font-body03-medium ${
                                        currentLinkTab === 1 ? "underline" : "text-grey-300"
                                    }`}
                                >
                                    링크 2
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        const newLinks: ProfileLink[] = [...formData.links];
                                        newLinks.push({
                                            id: crypto.randomUUID(),
                                            type: "other" as const,
                                            url: "",
                                        });
                                        setFormData({ ...formData, links: newLinks });
                                        setCurrentLinkTab(newLinks.length - 1);
                                    }}
                                    className="font-body03-medium text-grey-300 hover:text-white"
                                >
                                    추가
                                </button>
                                <button
                                    onClick={() => {
                                        if (formData.links.length > 1) {
                                            const newLinks: ProfileLink[] = formData.links.filter(
                                                (_, i) => i !== currentLinkTab
                                            );
                                            setFormData({ ...formData, links: newLinks });
                                            setCurrentLinkTab(
                                                Math.min(currentLinkTab, newLinks.length - 1)
                                            );
                                        }
                                    }}
                                    className="font-body03-medium text-grey-300 hover:text-white"
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-4 w-full">
                            <label className="font-body03-medium">아이콘</label>
                            <div className="flex gap-2">
                                {["📄", "🐙", "🌐", "📷", "📧", "🔗"].map((icon, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedLinkIcon(idx)}
                                        className={`size-8 rounded flex items-center justify-center font-body03-medium ${
                                            selectedLinkIcon === idx
                                                ? "bg-grey-700 text-white"
                                                : "bg-grey-900 text-grey-300 hover:bg-grey-800"
                                        }`}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <input
                                type="url"
                                value={formData.links[currentLinkTab]?.url || ""}
                                onChange={(e) => {
                                    const newLinks: ProfileLink[] = [...formData.links];
                                    newLinks[currentLinkTab] = {
                                        ...newLinks[currentLinkTab],
                                        url: e.target.value,
                                    };
                                    setFormData({ ...formData, links: newLinks });
                                }}
                                placeholder="URL"
                                className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                            />
                            {formData.links[currentLinkTab]?.url && (
                                <button
                                    onClick={() => {
                                        const newLinks = [...formData.links];
                                        newLinks[currentLinkTab] = {
                                            ...newLinks[currentLinkTab],
                                            url: "",
                                        };
                                        setFormData({ ...formData, links: newLinks });
                                    }}
                                    className="text-grey-300 hover:text-white flex-shrink-0"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M12 4L4 12M4 4L12 12"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <div className="flex items-center justify-between mb-4 w-full">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setCurrentCardTab(0)}
                                    className={`font-body03-medium ${
                                        currentCardTab === 0 ? "underline" : "text-grey-300"
                                    }`}
                                >
                                    카드 1
                                </button>
                                <button
                                    onClick={() => setCurrentCardTab(1)}
                                    className={`font-body03-medium ${
                                        currentCardTab === 1 ? "underline" : "text-grey-300"
                                    }`}
                                >
                                    카드 2
                                </button>
                                <button
                                    onClick={() => setCurrentCardTab(2)}
                                    className={`font-body03-medium ${
                                        currentCardTab === 2 ? "underline" : "text-grey-300"
                                    }`}
                                >
                                    카드 3
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        const newCards = [...formData.cards];
                                        newCards.push({
                                            id: crypto.randomUUID(),
                                            title: "",
                                            description: "",
                                            url: "",
                                        });
                                        setFormData({ ...formData, cards: newCards });
                                        setCurrentCardTab(newCards.length - 1);
                                    }}
                                    className="font-body03-medium text-grey-300 hover:text-white"
                                >
                                    추가
                                </button>
                                <button
                                    onClick={() => {
                                        if (formData.cards.length > 1) {
                                            const newCards = formData.cards.filter(
                                                (_, i) => i !== currentCardTab
                                            );
                                            setFormData({ ...formData, cards: newCards });
                                            setCurrentCardTab(
                                                Math.min(currentCardTab, newCards.length - 1)
                                            );
                                        }
                                    }}
                                    className="font-body03-medium text-grey-300 hover:text-white"
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    placeholder="제목"
                                    value={formData.cards[currentCardTab]?.title || ""}
                                    onChange={(e) => {
                                        const newCards = [...formData.cards];
                                        newCards[currentCardTab] = {
                                            ...newCards[currentCardTab],
                                            title: e.target.value,
                                        };
                                        setFormData({ ...formData, cards: newCards });
                                    }}
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                {formData.cards[currentCardTab]?.title && (
                                    <button
                                        onClick={() => {
                                            const newCards = [...formData.cards];
                                            newCards[currentCardTab] = {
                                                ...newCards[currentCardTab],
                                                title: "",
                                            };
                                            setFormData({ ...formData, cards: newCards });
                                        }}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <textarea
                                    placeholder="설명"
                                    value={formData.cards[currentCardTab]?.description || ""}
                                    onChange={(e) => {
                                        const newCards = [...formData.cards];
                                        newCards[currentCardTab] = {
                                            ...newCards[currentCardTab],
                                            description: e.target.value,
                                        };
                                        setFormData({ ...formData, cards: newCards });
                                    }}
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700 min-h-20"
                                />
                                {formData.cards[currentCardTab]?.description && (
                                    <button
                                        onClick={() => {
                                            const newCards = [...formData.cards];
                                            newCards[currentCardTab] = {
                                                ...newCards[currentCardTab],
                                                description: "",
                                            };
                                            setFormData({ ...formData, cards: newCards });
                                        }}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="url"
                                    placeholder="URL"
                                    value={formData.cards[currentCardTab]?.url || ""}
                                    onChange={(e) => {
                                        const newCards = [...formData.cards];
                                        newCards[currentCardTab] = {
                                            ...newCards[currentCardTab],
                                            url: e.target.value,
                                        };
                                        setFormData({ ...formData, cards: newCards });
                                    }}
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                {formData.cards[currentCardTab]?.url && (
                                    <button
                                        onClick={() => {
                                            const newCards = [...formData.cards];
                                            newCards[currentCardTab] = {
                                                ...newCards[currentCardTab],
                                                url: "",
                                            };
                                            setFormData({ ...formData, cards: newCards });
                                        }}
                                        className="text-grey-300 hover:text-white flex-shrink-0"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12 4L4 12M4 4L12 12"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="font-body03-medium">썸네일 이미지</label>
                                <label className="border-2 border-dashed border-grey-800 rounded-lg p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-grey-700 transition-colors w-full">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                console.log("Uploaded file:", file);
                                            }
                                        }}
                                    />
                                    <div className="size-12 bg-grey-900 rounded flex items-center justify-center">
                                        <UploadIcon className="size-6 text-grey-300" />
                                    </div>
                                    <p className="font-body03-regular text-grey-300">
                                        이미지 업로드
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/profile">
                    <button className="w-full bg-grey-900 rounded-lg py-4 font-body03-medium">
                        저장하기
                    </button>
                </Link>
            </div>
        </div>
    );
}
