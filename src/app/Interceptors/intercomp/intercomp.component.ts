import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-intercomp',
  templateUrl: './intercomp.component.html',
  styleUrls: ['./intercomp.component.css']
})
export class IntercompComponent implements OnInit {
color:ThemePalette= 'accent'
  constructor(public loader:LoaderService) { }

  ngOnInit(): void {
  
  }

}
