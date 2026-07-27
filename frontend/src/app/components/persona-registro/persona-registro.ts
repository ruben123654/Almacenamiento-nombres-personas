import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-registro.html',
  styleUrl: './persona-registro.css'
})
export class PersonaRegistroComponent {
  persona = {
    nombre: '',
    apellido: '',
    identificacion: ''
  };

  @Output() personaAgregada = new EventEmitter<any>();

  registrarPersona() {
    console.log('--- Botón presionado ---');
    console.log('Valores actuales:', this.persona);

    if (this.persona.nombre && this.persona.apellido && this.persona.identificacion) {
      this.personaAgregada.emit({ ...this.persona });

      this.persona = {
        nombre: '',
        apellido: '',
        identificacion: ''
      };
      console.log('¡Persona enviada con éxito!');
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}
