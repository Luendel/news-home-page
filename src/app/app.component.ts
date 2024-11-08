import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from '../components/navbar/navbar.component.module';
import { HeroSectionModule } from '../components/hero-section/hero-section.component.module';
import { NewSectionModule } from '../components/new-section/section.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule, HeroSectionModule, NewSectionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-home-page';
}
