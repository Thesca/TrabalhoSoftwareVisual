import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MensalistaService } from 'src/app/mensalista.service';
import { Mensalista } from 'src/app/Mensalista';

@Component({
  selector: 'app-mensalista',
  templateUrl: './mensalista.component.html',
  styleUrls: ['./mensalista.component.css']
})
export class MensalistaComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private mensalistaService : MensalistaService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Mensalista';
    this.formulario = new FormGroup({
      cpfMensalista: new FormControl(null),
      status: new FormControl(null),
      diaDaLocacao: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const mensalista : Mensalista = this.formulario.value;
    this.mensalistaService.cadastrar(mensalista).subscribe(result => {
      alert('Mensalista Cadastrado.');
    })
  } 
}

