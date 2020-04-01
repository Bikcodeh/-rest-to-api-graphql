import { F1 } from './data-source';

export class CircuitsData extends F1{
    constructor(){
        super();
    }

    async getCircuits() {
        return await this.get('circuits.json?limit?=80', {
            cacheOptions: { ttl: 60 }
        });
    }
}