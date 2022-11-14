import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';


//importamos el servicio


@Injectable({
  providedIn: 'root'
})
export class InformacionPostService {
  //declaro el array
  arrPost: Post[];
  

  constructor() {
    this.arrPost = [
      //inicio el array con los diferentes posts
      {titulo:'Subida a la Najarra',
       texto:'Ruta muy comoda y accesible para toda la familia',
       autor: 'Daniel P',
       imagen: 'https://www.montaventura.com/wp-content/uploads/2021/05/La-Najarra-con-cabras.jpg',
       categoria: 'Asequible',
       
       },

       {titulo:'La Maliciosa',
       texto:'Ruta de nivel medio, con una duracion que varia en funcion de la vertiente escogida, de la que disfrutaremos de unas de las mejores vistas de Madrid',
       autor: 'Daniel P',
       imagen: 'http://guadarramistas.com/wp-content/uploads/2015/01/La-Maliciosa.jpg',
       categoria:'Media',
       },

       {titulo:'Risco de los Claveles',
       texto:'Ruta de nivel medio, con una duracion que varia en funcion de la vertiente escogida, de la que disfrutaremos de unas de las mejores vistas de Madrid',
       autor: 'Daniel P',
       imagen: 'https://s2.wklcdn.com/image_2/83603/47890746/32296868.jpg',
       categoria: 'Dificil',
       },
       

    ]
    
   }
    createPost(create: Post){
      console.log(this.arrPost.push(create))
       return this.arrPost.push(create);
       
    }

    getAll(){
      return this.arrPost
    }

    getByCategoria(pCategory: string): Post[] {
      return this.arrPost.filter(post =>post.categoria===pCategory);
    }
}
