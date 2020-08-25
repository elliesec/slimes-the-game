import { h, VNode } from 'preact';

export interface EncounterStageTextProps {
    text: string[];
}

export const EncounterStageText = ({ text }: EncounterStageTextProps): VNode => {
    return (
        <div className="EncounterStageText">
            {text.map((t) => (
                <p>{t}</p>
            ))}
        </div>
    );
};
