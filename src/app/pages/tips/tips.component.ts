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

  detalle:string;

  constructor(private prueba: PruebaService, private bd: StorageService ) { }

  ngOnInit() {
    console.log("inicio");
    this.bd.setToken("123456");
    this.prueba.getById(1).pipe(first()).subscribe(data => { 
      console.log(data); 
  });
  }

}
