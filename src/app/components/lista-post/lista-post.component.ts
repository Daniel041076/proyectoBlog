import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post.interface';
import { InformacionPostService } from 'src/app/services/informacion-post.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrPost: Post[];
  

  constructor(private informacionPostService: InformacionPostService) { 
    this.arrPost = this.informacionPostService.getAll();
  }

  ngOnInit(): void {
  }

}
