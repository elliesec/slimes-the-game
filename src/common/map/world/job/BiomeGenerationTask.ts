import { BaseTask } from '../../../model/job/BaseTask';
import { Random } from '../../../util/Random';
import { BiomeValues } from '../Biome';
import { WorldMap } from '../WorldMap';

export class BiomeGenerationTask extends BaseTask {
    private readonly random = new Random();

    public constructor(seed: string, private readonly map: WorldMap) {
        super('Generate world map biomes');
        this.random = new Random(seed);
    }

    protected run() {
        this.map.forEach((cell) => {
            cell.biome = this.random.arrayValue(BiomeValues);
        });
        this.complete();
    }
}
