// import AlumniNetwork from "./sections/AlumniNetwork";
import Billboard from "./sections/Billboard";
import BuildTogether from "./sections/BuildTogether";
import OurPeople from "./sections/OurPeople";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-37.5 pb-40">
            <Billboard />
            <OurPeople />
            {/* <AlumniNetwork /> */}
            <BuildTogether />
        </div>
    );
}
