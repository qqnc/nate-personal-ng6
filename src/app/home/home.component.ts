import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    const first_options = {
      strings: [
        'am a <i>Full Stack Developer</i>.^1000',
        'love <i>Typescript^500, Angular^500, and Nodejs</i>.^500',
        'and also Ruby^500, Python^500, and Ruby on Rails.^500',
        'am also an experienced drummer, and a scratch DJ'],
      typeSpeed: 50,
      loop: true,
      onLastStringBackspaced: () => {
        second_typed.toggle();
        first_typed.toggle();
      }
    };

    const second_options = {
      strings: [
        'left buttons^1000 to check my social profiles^500 and my works.^500',
        'and menu above to see my solutions^500 for Leetcode problems',
        'articles^1000, and contact information.^1000'],
      typeSpeed: 50,
      loop: true,
      onLastStringBackspaced: () => {
        second_typed.toggle();
        first_typed.toggle();
      }
    };

    const first_typed = new Typed('.typed-element', first_options);
    const second_typed = new Typed('.work-typed-element', second_options);
    second_typed.stop();
  }

}
