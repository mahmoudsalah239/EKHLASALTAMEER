import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-decorate',
  standalone: true,
imports: [],
  templateUrl: './decorate.component.html',
  styleUrl: './decorate.component.css'
})
export class DecorateComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
