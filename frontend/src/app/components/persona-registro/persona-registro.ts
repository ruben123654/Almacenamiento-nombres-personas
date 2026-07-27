import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Asegúrate de importar FormsModule aquí

@Component({
  selector: 'app-persona-registro',
  standalone: true, // 👈 Este flag indica que es standalone
  imports: [CommonModule, FormsModule], // 👈 Agrega FormsModule aquí dentro
  templateUrl: './persona-registro.html',
  styleUrl: './persona-registro.css'
})
export class PersonaRegistroComponent {
  persona = {
    nombre: '',
    apellido: '',
    identificacion: ''
  };

  registrarPersona() {
    console.log('Datos a registrar:', this.persona);
    alert(`Persona registrada con éxito: ${this.persona.nombre} ${this.persona.apellido}`);
    
    this.persona = {
      nombre: '',
      apellido: '',
      identificacion: ''
    };
  }
}
