import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnets',
  templateUrl: './partnets.component.html',
  styleUrl: './partnets.component.css'
})
export class PartnetsComponent implements OnInit {
  cards = [
    { imageURL: 'assets/images/CLAUT.png', title: 'Focused on Problem Solving', subtitle: 'Fast Support', description: 'Local, fast & flexible support for urgent requests from our clients.' },
    { imageURL: 'assets/images/CLELAC.png', title: 'Customer Support 365 Days', subtitle: 'Available Anytime', description: 'Total availability to care for client requests at any time.' },
    { imageURL: 'assets/images/logo-csia-white.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },
    { imageURL: 'assets/images/logicbus.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },
    
    // Añade más tarjetas según sea necesario
  ];

  ngOnInit(): void {
    this.cards = [...this.cards, ...this.cards];
  }

}
