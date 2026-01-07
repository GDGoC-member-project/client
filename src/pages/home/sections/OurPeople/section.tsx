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
        <>
            <Selector value={filter} onChange={setFilter} />
            <Grid profiles={visible} />
        </>
    );
}
