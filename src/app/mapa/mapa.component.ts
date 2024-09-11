import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Inicializa el mapa centrado en la ubicación deseada y con un nivel de zoom
    this.map = L.map('map', {
      center: [25.741789859757848, -100.21599123176938],  // Coordenadas iniciales
      zoom: 8
    });

    // Añade un tile layer de OpenStreetMap para renderizar las imágenes del mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Añade marcadores en las sucursales
    const marker1 = L.marker([20.676667, -101.354444]).addTo(this.map)
      .bindPopup('Sucursal 1')
      .openPopup();

    const marker2 = L.marker([19.432608, -99.133209]).addTo(this.map)
      .bindPopup('Sucursal 2');
  }
}



