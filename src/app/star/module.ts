import {NgModule} from "@angular/core";
import {StarComponent} from "./component";
import {CommonModule} from "@angular/common";

@NgModule({
    exports:[StarComponent],
    imports:[CommonModule],
    declarations: [StarComponent]
})
export class StarModule{}