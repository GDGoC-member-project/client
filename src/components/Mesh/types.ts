export type MeshProps = {
    variant?: MeshVariant;
    phase?: MeshPhase;
    initiallyVisible?: boolean;
    strokeColor?: keyof typeof MeshColorSets;
};

type MeshVariant = "auto" | "switchOnLoad";

type MeshPhase = "idle" | "loaded";

export const MeshColorSets = {
    blue: "rgb(67,133,243)",
    grey: "rgb(72, 72, 72)",
};
