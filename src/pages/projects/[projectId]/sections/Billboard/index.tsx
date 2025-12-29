import ContentBillboard from "@/components/ContentBillboard";
import TeamRoleCapacityIndicator from "@/components/TeamRoleCapacityIndicator";

export default function Billboard() {
    return (
        <ContentBillboard>
            <div className="w-full max-w-lg flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                        <p className="font-body04-medium text-grey-200">by</p>
                        <div className="size-4 bg-white rounded-full" /> {/* TODO!!! 이미지 */}
                        <p className="font-body04-medium">김구글</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="font-title03-medium">제목입니다</h1>
                        <h2 className="font-body01-regular">내용입니다 내용입니다 내용입니다</h2>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <TeamRoleCapacityIndicator role="기획" filled={1} max={1} />
                    <TeamRoleCapacityIndicator role="디자이너" filled={1} max={2} />
                    <TeamRoleCapacityIndicator role="프론트엔드" filled={0} max={2} />
                    <TeamRoleCapacityIndicator role="백엔드" filled={2} max={2} />
                </div>
            </div>
        </ContentBillboard>
    );
}
