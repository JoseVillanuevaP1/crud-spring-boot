import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css',
})
export class DirectivaComponent {
  listaCurso: string[] = ['TypeScript', 'Javascript', 'Java SE', 'C#', 'PHP'];
  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = this.habilitar == true ? false : true;
  }
}
