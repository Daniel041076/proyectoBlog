import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InformacionPostService } from 'src/app/services/informacion-post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private router: Router,
    private informacionPostservice: InformacionPostService
    ) {
      this.formulario = new FormGroup({
        titulo: new FormControl(),
        texto: new FormControl(),
        autor: new FormControl(),
        imagen: new FormControl(),
        fecha: new FormControl(),
        categoria: new FormControl()


      });
      

      
   }

  ngOnInit(): void {
  }
  createPost(pForm: any){
    this.informacionPostservice.createPost(pForm.value);
    console.log(pForm);
    this.router.navigate(['/posts']);

  }
  

}
