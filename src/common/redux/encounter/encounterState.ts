import { ActiveEncounter } from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';

export interface EncounterState {
    byId: Record<string, Encounter>;
    active: ActiveEncounter;
}
