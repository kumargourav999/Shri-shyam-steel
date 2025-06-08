import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 images: string[] = [
     'https://i.pinimg.com/originals/95/a5/c8/95a5c88ce486a4517eea2612f2eea95f.jpg',
    'https://www.buildersmart.in/media/wysiwyg/bgptupvc1.jpg',
    'assets/upvc3.jpg',
   'https://www.myglassexperts.com/wp-content/uploads/2021/01/aluminium-windows2-1024x455.jpg',
   'https://karthikdoorsandwindows.in/wp-content/uploads/2021/09/VCDR7711-1-800x512.jpg',
     'https://forca.in/wp-content/uploads/2022/05/slide-and-fold-doors-banner.jpg',
     'https://tse4.mm.bing.net/th?id=OIP.VFtahaOrctjb8YKTdfzK0wHaDn&pid=Api&P=0&h=180',
     
    // 'assets/img4.jpg',
    // 'assets/img5.jpg'
  ];
  tvCabinet:string[]=[
    'assets/tvCabinet/WhatsApp Image 2025-06-07 at 12.34.35 PM.jpeg',
    'assets/tvCabinet/WhatsApp Image 2025-06-07 at 12.34.37 PM.jpeg',
    'assets/tvCabinet/WhatsApp Image 2025-06-07 at 12.34.44 PM.jpeg',
    'assets/tvCabinet/WhatsApp Image 2025-06-07 at 12.34.46 PM (1).jpeg',
    'assets/tvCabinet/WhatsApp Image 2025-06-07 at 12.34.48 PM.jpeg',
    
  ]
  flutedPannel:string[]=[
    'https://5.imimg.com/data5/ANDROID/Default/2020/10/ER/DU/KI/32174847/product-jpeg.jpg',
    'http://5.imimg.com/data5/SELLER/Default/2022/12/BG/OO/VW/3461269/fluted-panels.jpeg',
    'https://tse3.mm.bing.net/th?id=OIP.v7TJ3juHmSLcLOgFZDWveAHaFV&pid=Api&P=0&h=180',
    'https://nortwood.com/wp-content/uploads/2023/09/Fluted-Panel.jpg',
    'https://images.squarespace-cdn.com/content/v1/599a4eeb37c581a0f21c2220/8f1eab18-b826-418b-b8a1-426b066e94c0/Floppy_Whale_singapore_office_with_black_wood_fluted_wall_panel_52134d4f-6c26-4a5b-a361-63e2004a0051.jpg',
    
  ]
   marbelSheet:string[]=[
    'https://designer-walls.co.uk/wp-content/uploads/2022/06/marble-effect-wall-panel-design-3.jpg.webp',
    'https://i.pinimg.com/originals/d0/37/66/d0376658a098595b89653ebbf3c264a2.jpg',
    'https://image.made-in-china.com/2f0j00FuIqaQmdywby/PVC-UV-Marble-Shower-Walls-Furniture-Wall-UV-Panels-High-Glossy-1220X2440mm-3mm-PVC-Wall-Panel-PVC-Marble-UV-Sheet-Price.webp',
    'https://i.pinimg.com/originals/94/bc/a9/94bca9c7a46828888a6e3ec067cf4496.jpg',
   
    
  ]

  currentIndex = 0;
  currentIndex1=0
  currentIndex2=0
  currentIndex3=0;
  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
       this.currentIndex1 = (this.currentIndex1 + 1) % this.tvCabinet.length;
        this.currentIndex2 = (this.currentIndex2 + 1) % this.flutedPannel.length;
           this.currentIndex3 = (this.currentIndex3 + 1) % this.marbelSheet.length;
    }, 5000); // Change image every 3 seconds
  }
}
