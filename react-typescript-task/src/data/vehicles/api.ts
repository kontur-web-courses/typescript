import {generateVehicle} from "./mock";
import {Vehicle, VehicleFilter} from "./contracts";

const vehicle = generateVehicle(15);

export class VehicleApi {
    static search({type, title}: VehicleFilter): Vehicle[] {
        return vehicle.filter(x => (type == null || x.type === type) && x.title.search(title) !== -1);
    }
}
