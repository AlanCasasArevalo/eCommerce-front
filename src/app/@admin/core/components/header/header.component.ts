import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggledValue = true

  @Output() headerToggleEvent  = new EventEmitter<boolean>()

  toggled() {

    if (typeof this.toggledValue === 'undefined' || this.toggledValue === undefined) {
      this.toggledValue = true
    }

    this.toggledValue = !this.toggledValue

    this.headerToggleEvent.emit(this.toggledValue)
  }

}
