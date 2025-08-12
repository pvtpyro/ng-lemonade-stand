import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertMeasurement'
})

export class ConvertMeasurementPipe implements PipeTransform {
    transform(value: number, unit: string) {
        switch (unit) {
            case "oz":
                return value + " oz";
            case "tsp":
                if (value === 3 || value === 6) return value / 3 + " tbsp";
                return value + " tsp";
            case "cubes":
                if (value == 1) return value + " cube";
                return value + " cubes"
            default:
                return value + " " + unit
        }
    }
}