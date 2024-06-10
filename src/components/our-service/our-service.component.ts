import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})
export class OurServiceComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
