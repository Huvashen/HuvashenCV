import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [Navbar, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
