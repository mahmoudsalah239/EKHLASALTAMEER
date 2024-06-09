import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HRComponent } from '../hr/hr.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HRComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
