import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OficinaService } from 'src/app/oficina.service';
import { Oficina } from 'src/app/Oficina';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.css']
})
export class OficinaComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private oficinaService : OficinaService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Carro';
    this.formulario = new FormGroup({
      idCarroOficina: new FormControl(null),
      procedimento: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const carro : Oficina = this.formulario.value;
    this.oficinaService.cadastrar(carro).subscribe(result => {
      alert('Carro inserido na oficina.');
    })
  } 
}

