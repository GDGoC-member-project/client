import ExpandableCard from "@/components/ExpandableCard";
import TeamRoleCapacityIndicator from "@/components/TeamRoleCapacityIndicator";

const MOCK = Array.from({ length: 6 }).map((_, idx) => ({
    id: idx,
    title: `프로젝트 ${idx + 1}`,
    description: "내용내용내용내용내용",
}));

export default function BuildTogether() {
    const left = MOCK.filter((_, i) => i % 2 === 0);
    const right = MOCK.filter((_, i) => i % 2 === 1);

    return (
        <section className="px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2 mb-16">
                <h2 className="font-title03-medium">Build Together</h2>
                <p className="font-head02-regular">지금 참여할 수 있는 프로젝트를 만나보세요.</p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
                <div className="w-full sm:w-100 flex flex-col gap-6">
                    {left.map((p) => (
                        <ExpandableCard key={p.id} title={p.title} description={p.description}>
                            <div className="w-full flex flex-col gap-2">
                                <TeamRoleCapacityIndicator role="기획" filled={1} max={1} />
                                <TeamRoleCapacityIndicator role="디자이너" filled={1} max={2} />
                                <TeamRoleCapacityIndicator role="프론트엔드" filled={0} max={2} />
                                <TeamRoleCapacityIndicator role="백엔드" filled={2} max={2} />
                            </div>
                        </ExpandableCard>
                    ))}
                </div>

                <div className="w-full sm:w-100 flex flex-col gap-6">
                    {right.map((p) => (
                        <ExpandableCard key={p.id} title={p.title} description={p.description}>
                            <div className="w-full flex flex-col gap-2">
                                <TeamRoleCapacityIndicator role="기획" filled={1} max={1} />
                                <TeamRoleCapacityIndicator role="디자이너" filled={1} max={2} />
                                <TeamRoleCapacityIndicator role="앱 개발자" filled={1} max={2} />
                                <TeamRoleCapacityIndicator role="백엔드" filled={2} max={2} />
                            </div>
                        </ExpandableCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
