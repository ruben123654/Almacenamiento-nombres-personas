import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  // Inicializa el arreglo vacío
  listaPersonas: any[] = [];

  agregarPersona(nuevaPersona: any) {
    console.log('Recibido en App:', nuevaPersona);
    
    // Crea un nuevo arreglo añadiendo el registro nuevo al final
    this.listaPersonas = [...this.listaPersonas, nuevaPersona];
  }

  eliminarPersona(index: number) {
    // Filtra para eliminar por índice
    this.listaPersonas = this.listaPersonas.filter((_, i) => i !== index);
  }
}
