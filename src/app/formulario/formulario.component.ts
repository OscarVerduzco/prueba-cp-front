import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  postalCode: string = '';
  responseFromAPI: any[] = [];

  constructor(private http: HttpClient) {}

  submitForm() {
    const apiUrl = 'http://localhost:3000/api/consulta';
    const url = `${apiUrl}?cp=${this.postalCode}`;

    this.http.get(url).subscribe((response) => {
      this.responseFromAPI = response as any[];
    });
  }
}
