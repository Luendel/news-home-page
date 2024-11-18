import { Component, Input } from "@angular/core";

@Component({
    selector:"app-aside-nav",
    templateUrl:"./aside-nav.component.html",
    styleUrl:"./aside-nav.component.css"
})
export class AsideNav {
    @Input() display: any;
}