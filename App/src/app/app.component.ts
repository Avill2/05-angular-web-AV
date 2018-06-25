import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion
  titulo = 'WEB';
  usuario= {nombre:'andrea', apellido:'villacis'};
  arreglonumeros=[5,4,3,2,1];
  mostrartitulo=true;
  imgurl= "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg";
  imagenwidth="200";

  html = `
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imgurl}" alt="">
`;
//funciones en nuestra clase
  aumentarwidth(){
    this.imagenwidth += 10;
  }
  aumentarWidth(evento) {
    console.log('evento', evento);
    this.imagenwidth += 10;
  }

  restarWidth() {
    this.imagenwidth -= 10;
  }

}



