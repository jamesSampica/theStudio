import styles from "./pillar.module.css";
import { StudioColor } from "@/app/types/StudioColor";

interface PillarProps {
    children: React.ReactNode
}

export function PinkPillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "pink") } 

export function YellowPillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "yellow") } 

export function BluePillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "blue") } 

export function OrangePillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "orange") }

function ColorPillar(children: React.ReactNode, color: StudioColor){
    return (
        <div className={styles.pillar} style={{ "backgroundColor": `var(--studio-${color})` }}>
            {children}
        </div>
    );
}