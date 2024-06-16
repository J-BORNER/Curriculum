import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../service/datos.service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css'
})
export class StudiesComponent implements OnInit{

  private studies:any[];
  private courses:any[];


  constructor(private dataService: DatosService) {}

  ngOnInit(): void {

    this.dataService.getData().subscribe(data => {
      this.studies = data.json().studies;
      this.courses = data.json().courses
  }
    );

  }
}
