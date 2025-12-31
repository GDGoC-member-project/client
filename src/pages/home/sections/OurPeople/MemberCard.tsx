import type { Member } from "@/types/people";

interface MemberCardProps {
    member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="size-20 bg-white rounded-full flex items-center justify-center">
                {member.profileImage ? (
                    <img
                        src={member.profileImage}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                    />
                ) : (
                    <div className="size-16 bg-grey-800 rounded-full" />
                )}
            </div>
            <p className="font-body03-medium">{member.name}</p>
            <p className="font-body04-regular text-grey-300">{member.department}</p>
        </div>
    );
}

