import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';


declare var $: any;

@Component({
  selector: 'jg-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit {

  @Input() title: string;
  @Input() configuration: object = {};
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();
  private url: string;
  private columnas: object = {};
   isEliminar: boolean = false;
   isModificar: boolean = false;
   nombre: string = 'mario';

  constructor() {}

  ngOnInit() {
    this.getConfiguracion();
    $('#datatable-componet').DataTable( {
         ajax: {
          url: this.url,
          type: 'GET',
          dataSrc: ((json) => {
            let contId: number = 0;
            for ( let i = 0, ien = json.length ; i < ien ; i++ ) {
               
                let botones: string = '';
                let contador: number = 0;
                contId++;
                    if (this.isEliminar) {
                        botones = '<button type="button" id="'+contId+'" class="btn btn-danger" (click)="removeAcction($event)" ><i class="fa fa-trash"></i></button>';
                        contador++;
                    }
                    if (this.isModificar) {
                      botones = botones + '<button type="button" class="btn btn-danger"  (click)="updateAcction($event)" ><i class="fa fa-edit"></i></button>';
                      contador++;
                  }
                 if ( contador > 0 ) {
                  json[i][0] = botones;
                 }
            }
            return json;
          }),
          beforeSend: function (request) {
            request.setRequestHeader('token', 'token');
          }
        },
         columns: this.columnas
    } );
  }

  private getConfiguracion(): void {
    for ( const key in this.configuration) {
      if (this.configuration.hasOwnProperty(key)) {
          if (key === 'url') {
              this.url = this.configuration[key];
          } else if (key === 'columns') {
            this.columnas = this.configuration[key];
          } else if (key === 'actions') {
            this.getAcciones(this.configuration[key]);
          }
      }
    }
  }

  private getAcciones(acciones: object): void {
    for ( const key in acciones) {
      if (acciones.hasOwnProperty(key)) {
        if (key === 'remove') {
             this.isEliminar = acciones[key];
        } else if (key === 'update') {
          this.isModificar = acciones[key];
        }
      }
    }
  }

  removeAcction(event) {
     // this.remove.emit(event);
     console.log(event);
    }

  updateAcction(event) {
    //this.update.emit(event);
    console.log(event);
  }

  @HostListener('document:click', ['$event'])
   onHover(event: Event) {
    this.update.emit(event);
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
  }
}
