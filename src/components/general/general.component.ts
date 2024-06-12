import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProjectsTComponent } from '../projects-t/projects-t.component';import { ImageGalleryComponentComponent } from '../image-gallery-component/image-gallery-component.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ProjectsTComponent,ImageGalleryComponentComponent
],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
