import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LandingComponent {
  categories = [
    {
      label: 'Tables',
      imgLink:
        'https://imgdb.net/storage/uploads/204d6962f97887ec0aaf4c928e2c90a3d058109ac9c07e1e3326fe0e64955156.png',
      content: '',
      type: 0,
    },
    {
      label: 'Chairs',
      imgLink:
        'https://imgdb.net/storage/uploads/239925f5f2235c9528140e71177d6c715b5c087cc950713e21fa7bdf3cd23986.png',
      content: '',
      type: 1,
    },
    {
      label: 'Appliances',
      imgLink:
        'https://imgdb.net/storage/uploads/3ef904de20a765d75409e042d29fe4445c2b263db7c9d63709495b69fa071a02.png',
      content: '',
      type: 2,
    },
    {
      label: 'Dining',
      imgLink:
        'https://imgdb.net/storage/uploads/0f33a5c813e3d9035648eb9e0fa36da17084b9d973a8f715f9cbb4063ad0a8ff.png',
      content: '',
      type: 3,
    },
    {
      label: 'Sofas',
      imgLink:
        'https://imgdb.net/storage/uploads/1d732d3a30f2e635d53791116db8f043e7f6462927340da80ac233d851e30704.png',
      content: '',
      type: 4,
    },
    {
      label: 'Beds',
      imgLink:
        'https://imgdb.net/storage/uploads/83ac186c2c2fc54be46af95ea4d0e82121a3c697ec4a56c608cc4be8fcad06b5.png',
      content: '',
      type: 5,
    },
  ];

  services = [
    {
      label: 'Mint new products',
      content:
        "Assured products. You'll be renting furniture that looks & feels brand new",
      img: 'https://imgdb.net/storage/uploads/543b21cbc7769839ec36f7d04d7f12ed98457256628bd3ad71174ad27d03ffbd.png',
    },
    {
      label: 'Free shipping',
      content:
        'Get your furniture delivered to your doorstep with no extra shipping cost',
      img: 'https://imgdb.net/storage/uploads/95f8cac6aa892d5a75557eef27ab55c98ed3c176e421d86af4377c9dabdb7acc.png',
    },
    {
      label: 'Free installation',
      content:
        'No need to pay for furniture assembly. We will install your furniture for free',
      img: 'https://imgdb.net/storage/uploads/77609350994b02a0bdaba52c0aed445cfd0ffc0cfafb5b4913c9e8c6bb5a32dd.png',
    },
    {
      label: 'Free relocation',
      content:
        "Planning to relocate? We'll help you relocate your furniture for free",
      img: 'https://imgdb.net/storage/uploads/cf4fe31376fce87386ddb82bb5ba9fca88657347c1f2f19e5c777ccd1ff300e9.png',
    },
    {
      label: 'Insurance cover',
      content:
        'Minor damages or scratches to the rent products will be waived off',
      img: 'https://imgdb.net/storage/uploads/eff34c29759eed9e27f7c93c5e2c9f0b932e267dcc1a7434fb623f8d822b3935.png',
    },
    {
      label: 'Flexible upgrades',
      content:
        'Upgrade your house with new products after 6 months of use for free',
      img: 'https://imgdb.net/storage/uploads/a6519b68053d77c6bee772534a6615980519e813f87b6358b5ce79e5934c2136.png',
    },
  ];

  offers = [
    {
      label: '25% Discount on discount deals only',
      code: 'OFF25',
    },
    {
      label: '20% Discount on min total rental value of Rs 25000',
      code: 'HELLOSUMMER',
    },
    {
      label: '15% Discount on your first order',
      code: 'RENTSAVE15',
    },
    {
      label: '10% Discount on pay as you go',
      code: 'WELCOME10',
    },
  ];

  current = 0;

  //These are the link for carousel that we designed ourselves on inkscape
  img_list = [
    'https://imgdb.net/storage/uploads/c9a6e4d4454e0ac1c6700bf3550056bb67593d77f4fd7c6843853380dff40fd1.png',
    'https://imgdb.net/storage/uploads/2a394360b2f7cd4f8abfafce11b60cc11c98e1a7f3821307b935b61507c0696f.png',
    'https://imgdb.net/storage/uploads/acdc8b53f2b81e56662685a27d44490a24ca51a9466951af07f025f37df62b59.png',
    'https://imgdb.net/storage/uploads/c5b4e4aacc9c00969c68ce6141704170b027074e92b10691283590d978b14d66.png',
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }

  openList() {
    console.log('Navigating to list page');
    this.router.navigateByUrl('/customer/list/6');
  }

  openListCategory(type: any) {
    this.router.navigateByUrl('/customer/list/' + type);
  }

}
