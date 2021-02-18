import { AtomicTask } from '../../../tasks/AtomicTask';
import { Random } from '../../../util/Random';
import { BiomeValues } from '../Biome';
import { WorldMap } from '../WorldMap';

export class BiomeGenerationTask extends AtomicTask {
    private readonly random: Random;

    public constructor(seed: string, private readonly map: WorldMap) {
        super('Biome Generation');
        this.random = new Random(seed);
    }

    protected doTask(): Promise<void> | void {
        this.map.forEach((cell) => {
            cell.biome = this.random.arrayValue(BiomeValues);
        });
    }
}
