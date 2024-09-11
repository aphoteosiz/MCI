import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousell',
  templateUrl: './carrousell.component.html',
  styleUrl: './carrousell.component.css'
})
  export class CarrousellComponent implements OnInit {
    cards = [
      { imageURL: 'assets/images/ASI.png', title: 'Focused on Problem Solving', subtitle: 'Fast Support', description: 'Local, fast & flexible support for urgent requests from our clients.' },
      { imageURL: 'assets/images/COS.png', title: 'Customer Support 365 Days', subtitle: 'Available Anytime', description: 'Total availability to care for client requests at any time.' },
      { imageURL: 'assets/images/LOGO S&M.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },
      { imageURL: 'assets/images/LOGO TSI.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },
      { imageURL: 'assets/images/LOGO RSI.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },
      { imageURL: 'assets/images/LOGO MIS.png', title: 'Support & Maintenance', subtitle: 'Online Digital Platform', description: 'Service Management through our Online Digital Platform.' },

      // Añade más tarjetas según sea necesario
    ];

    ngOnInit(): void {
      this.cards = [...this.cards, ...this.cards];
    }
  }


