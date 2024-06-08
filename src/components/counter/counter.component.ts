import { Component } from '@angular/core';
import { NgxCountAnimationModule } from 'ngx-count-animation';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgxCountAnimationModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
