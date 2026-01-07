import ProfileAvatarVerticalSkeleton from "@/components/ProfileAvatarVertical/skeleton";

export default function GridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl mt-16">
            {Array.from({ length: count }).map((_, i) => (
                <ProfileAvatarVerticalSkeleton key={i} />
            ))}
        </div>
    );
}
