import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxTypedWriterModule } from 'ngx-typed-writer';


import * as AOS from 'aos';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxTypedWriterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit, AfterViewChecked {
  strings: string[] = ['Welcome to our website!', 'Enjoy your stay.', 'Feel free to explore.'];
  typeSpeed: number = 50;
  backSpeed: number = 50;
  backDelay: number = 1000;
  loop: boolean = true;
  ngOnInit() {
    AOS.init({
      duration: 1200, // مدة الأنيميشن
    });
  }
  ngAfterViewChecked(): void {
    AOS.refresh();
  }
}
