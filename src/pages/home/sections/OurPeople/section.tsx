import { useState } from "react";
import type { OurPeopleProps } from "./types";
import Selector from "./components/Selector";
import { Role, type ProfileFilter } from "@/types/profile";
import { applyFilter } from "./utils";
import Grid from "./components/Grid";

export default function OurPeopleSection({ profiles }: OurPeopleProps) {
    const [filter, setFilter] = useState<ProfileFilter>({
        type: "ROLE",
        value: Role.CORE,
    });

    const visible = applyFilter(profiles, filter);

    return (
        <section className="px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2 mb-16">
                <h2 className="font-title03-medium">Our People</h2>
                <p className="font-head02-regular">
                    함께 배우고, 만들고, 성장하는 GDGoC 5기 멤버들을 소개합니다.
                </p>
            </div>

            <Selector value={filter} onChange={setFilter} />

            <Grid profiles={visible} />
        </section>
    );
}
