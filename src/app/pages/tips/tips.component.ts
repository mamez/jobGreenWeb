import { Component, OnInit, Inject } from '@angular/core';
import { first } from 'rxjs/operators'
import { PruebaService } from '../../services/prueba.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'jg-tips',
  templateUrl: './tips.component.html',
  styles: [],
  providers: [PruebaService,StorageService]
})
export class TipsComponent implements OnInit {

  detalle: string;
  titulo: string = 'Listador de tips';
  conf: object = {};

  constructor(private prueba: PruebaService, private bd: StorageService ) {
    this.conf = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      actions: {
        remove: true,
        update: true
      },
      columns: [
        {title: 'Id', data: 'id' },
        {title: 'titulo', data: 'title' },
        {title: 'Id usuario', data: 'userId' },
        {title: 'My column title', data: '0' }
    ]
    };
   }

  ngOnInit() {
   /* console.log("inicio");
    this.bd.setToken("123456");
    this.prueba.getById(1).pipe(first()).subscribe(data => { 
      console.log(data); 
  });*/
  }

  actualizar(event: Event) {
    console.log(event);
  }

}
