import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component'; 
 import { HeaderComponent } from './../components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],

templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EKHLASALTAMEER';

  openWhatsAppChat() {
    const phoneNumber = '+966563995123'; // استبدل هذا برقم هاتف الشركة بصيغة دولية
    const message = 'مرحبا بك ف شركه اخلاص التعمير !'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
