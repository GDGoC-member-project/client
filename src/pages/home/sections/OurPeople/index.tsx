import { useState, useMemo } from "react";
import type { MemberRole } from "@/types/people";
import { MOCK_MEMBERS } from "./mock";
import PeopleGrid from "./PeopleGrid";
import SearchIcon from "@/assets/icons/search.svg?react";

const FILTER_TABS: { label: string; value: MemberRole | "all" }[] = [
    { label: "Core Members", value: "core" },
    { label: "App", value: "app" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Design", value: "design" },
    { label: "AI", value: "ai" },
];

export default function OurPeople() {
    const [selectedFilter, setSelectedFilter] = useState<MemberRole | "all">("core");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const filteredMembers = useMemo(() => {
        let filtered = MOCK_MEMBERS;

        if (selectedFilter !== "all") {
            filtered = filtered.filter((member) => member.role === selectedFilter);
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (member) =>
                    member.name.toLowerCase().includes(query) ||
                    member.department.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [selectedFilter, searchQuery]);

    return (
        <section className="px-4 sm:px-0 w-full flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-title03-medium">Our People</h2>
                <p className="font-head02-regular">
                    함께 배우고, 만들고, 성장하는 GDGoC 5기 멤버들을 소개합니다.
                </p>
            </div>

            <div className="w-full max-w-6xl flex flex-col">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    {FILTER_TABS.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => {
                                setSelectedFilter(tab.value);
                                setIsSearchOpen(false);
                                setSearchQuery("");
                            }}
                            className={`font-body03-medium transition-colors ${
                                selectedFilter === tab.value
                                    ? "underline"
                                    : "text-grey-300 hover:text-white"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            if (isSearchOpen) {
                                setSearchQuery("");
                            }
                        }}
                        className={`font-body03-medium transition-colors ${
                            isSearchOpen ? "underline" : "text-grey-300 hover:text-white"
                        }`}
                    >
                        <SearchIcon className="w-6 h-6" />
                    </button>
                </div>

                {isSearchOpen && (
                    <div className="w-full max-w-md mx-auto mt-6">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="검색..."
                            className="w-full px-4 py-2 bg-grey-900 border border-grey-800 rounded-lg font-body03-regular text-white placeholder:text-grey-500 focus:outline-none focus:border-grey-700"
                        />
                    </div>
                )}

                <div className="mt-25">
                    <PeopleGrid members={filteredMembers} />
                </div>
            </div>
        </section>
    );
}
