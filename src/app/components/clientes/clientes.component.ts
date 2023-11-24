import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {
  clientes!: Cliente[];
  clienteService = inject(ClienteService);

  constructor() {}
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => this.clientes = clientes
    );
  }
}
