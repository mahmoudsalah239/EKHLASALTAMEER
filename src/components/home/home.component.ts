import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
// import AOS from 'aos';
import { CounterComponent } from '../counter/counter.component';
import { CategoriesComponent } from '../categories/categories.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    AboutComponent,
    FooterComponent,
    CounterComponent,
    CategoriesComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    import('aos')
      .then((AOS: any) => {
        AOS.init();
      })
      .catch((error: any) => {
        console.error('Error loading AOS:', error);
      });
  }
}
