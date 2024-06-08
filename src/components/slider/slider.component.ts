import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit, AfterViewChecked {
  ngOnInit() {
    AOS.init({
      duration: 1200, // مدة الأنيميشن
      once: true, // تشغيل الأنيميشن مرة واحدة فقط عند التمرير
    });
  }
  ngAfterViewChecked(): void {
    AOS.refresh();
  }
}
