import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  producto = {
    id: 2,
    nombre: 'Smartphone Samsung',
    descripcion: 'Un smartphone con pantalla AMOLED, cámara triple y batería de larga duración.',
    precio: 9999
  };

  agregarAlCarrito() {
    alert('Producto agregado al carrito (esto es solo una simulación).');
  }
}
