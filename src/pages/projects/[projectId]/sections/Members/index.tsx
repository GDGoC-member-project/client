import { MOCK_PROJECT_MEMBERS } from "./mock";
import ProjectMembersGrid from "./ProjectMembersGrid";

export default function Members() {
    return (
        <section className="px-4 sm:px-0 w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-title03-medium">함께할 팀원들</h2>
                <p className="font-head02-regular">
                    현재 이 프로젝트를 함께 만들고 있는 멤버들입니다.
                </p>
            </div>
            <div className="mt-[168px]">
                <ProjectMembersGrid members={MOCK_PROJECT_MEMBERS} />
            </div>
        </section>
    );
}
