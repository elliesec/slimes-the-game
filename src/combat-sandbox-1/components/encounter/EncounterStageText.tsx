import React, { ReactElement } from 'react';

export interface EncounterStageTextProps {
    text: string[];
}

export const EncounterStageText = ({ text }: EncounterStageTextProps): ReactElement => {
    return (
        <div className="EncounterStageText">
            {text.map((t) => (
                <p>{t}</p>
            ))}
        </div>
    );
};
