import { Component, EventEmitter, Output } from "@angular/core"

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrl:"./navbar.component.css"
})
export class Navbar {
    @Output() toggle = new EventEmitter<string>()

    toggleAsideNav(){
        this.toggle.emit("toggleAsideNav")
    }
}