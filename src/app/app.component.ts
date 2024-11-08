import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from '../components/navbar/navbar.component.module';
import { HeroSectionModule } from '../components/hero-section/hero-section.component.module';
import { NewSectionModule } from '../components/new-section/section.component.module';
import { PopularModule } from '../components/popular/popular.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule, HeroSectionModule, NewSectionModule, PopularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-home-page';
}
