import { useState } from "react";
import LogoTyped from "@/components/Logo+Typed";
import type { ProfileLink, ProfileCard } from "@/types/profile";

export default function ProfileCreate() {
    const [formData, setFormData] = useState({
        name: "",
        aboutMe: "",
        position: "",
        skills: [] as string[],
        mbti: "",
        links: [] as ProfileLink[],
        cards: [] as ProfileCard[],
    });
    const [currentLinkTab, setCurrentLinkTab] = useState(0);
    const [currentCardTab, setCurrentCardTab] = useState(0);

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="font-body03-regular text-grey-300">Profile/Create</p>
                        <LogoTyped />
                    </div>
                    <div className="size-8 bg-white rounded-full flex items-center justify-center">
                        <div className="size-6 bg-grey-800 rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-12">
                    <h1 className="font-title03-medium">프로필 등록</h1>
                    <p className="font-body03-regular text-grey-300">
                        멤버 소개 페이지에 프로필을 등록할 수 있습니다
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                    <div className="size-32 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="size-24 bg-grey-800 rounded-full" />
                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-body03-medium">이름</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body03-medium">About Me</label>
                            <textarea
                                value={formData.aboutMe}
                                onChange={(e) =>
                                    setFormData({ ...formData, aboutMe: e.target.value })
                                }
                                className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700 min-h-20"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body03-medium">Position</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={formData.position}
                                    onChange={(e) =>
                                        setFormData({ ...formData, position: e.target.value })
                                    }
                                    className="flex-1 bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                                />
                                <div className="size-6 bg-grey-800 rounded-full" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body03-medium">Skills</label>
                            <input
                                type="text"
                                placeholder="스킬을 입력하고 Enter를 누르세요"
                                className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
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
                        <div className="font-body03-medium text-grey-300">추가 삭제</div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {["Q", "F", "G", "B", "🔗", "🔗"].map((icon, idx) => (
                            <div
                                key={idx}
                                className="size-8 bg-grey-900 rounded flex items-center justify-center font-body03-medium text-grey-300"
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                    <input
                        type="url"
                        placeholder="URL"
                        className="w-full bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                    />
                </div>

                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
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
                        <div className="font-body03-medium text-grey-300">추가 삭제</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="제목"
                            className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                        />
                        <textarea
                            placeholder="설명"
                            className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700 min-h-20"
                        />
                        <input
                            type="url"
                            placeholder="URL"
                            className="bg-transparent border-b border-grey-800 font-body03-regular focus:outline-none focus:border-grey-700"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <div className="border-2 border-dashed border-grey-800 rounded-lg p-12 flex flex-col items-center justify-center gap-4">
                        <div className="size-12 bg-grey-900 rounded flex items-center justify-center">
                            <div className="size-6 bg-grey-700 rounded" />
                        </div>
                        <p className="font-body03-regular text-grey-300">파일 업로드</p>
                    </div>
                </div>

                <button className="w-full bg-grey-900 rounded-lg py-4 font-body03-medium">
                    등록하기
                </button>
            </div>
        </div>
    );
}
