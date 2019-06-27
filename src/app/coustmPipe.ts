import { Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
    name: "myDate"
})

export class MyDatePipe extends DatePipe {
    transform(value: any, pattern: string = "yyyy-MM-dd hh:mm:ss"): string|null {
        let result = super.transform(value, pattern);
        return result;
    }
}