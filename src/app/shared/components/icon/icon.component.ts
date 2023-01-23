import { Component, Input } from '@angular/core';

@Component({
  selector: 'mocksewa-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
// const Type: string = 'primary' || 'secondary' || 'dark' || 'light';
export class IconComponent {
    @Input() icon: string = '';
    @Input() color = 'primary';

}
