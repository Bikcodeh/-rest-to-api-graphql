import { F1 } from './data-source';

export class DriversData extends F1{
    constructor(){
        super();
    }

    /* async getSeasons() {
        return await this.get('seasons.json?limit?080', {
            cacheOptions: { ttl: 60 }
        });
    } */
}