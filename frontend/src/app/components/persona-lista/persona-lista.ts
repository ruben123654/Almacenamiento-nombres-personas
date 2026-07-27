import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-lista',
  standalone: true, // 👈 Importante
  imports: [CommonModule],
  templateUrl: './persona-lista.html',
  styleUrl: './persona-lista.css'
})
export class PersonaListaComponent {
  @Input() personas: any[] = [];
  @Output() personaEliminada = new EventEmitter<number>();

  eliminar(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.personaEliminada.emit(index);
    }
  }
}
