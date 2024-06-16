import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../service/datos.service';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent implements OnInit {

  private personal_data: any[] = [];

  constructor(private dataService: DatosService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe(data => {this.personal_data =
    data.json().datos_personales;
    console.log(this.personal_data);

  }

  );

  }
}
