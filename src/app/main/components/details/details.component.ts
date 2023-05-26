import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  article =     {
    "source": {
        "id": "financial-times",
        "name": "Financial Times"
    },
    "author": "Richard Waters, Tim Bradshaw, Madhumita Murgia",
    "title": "Chip wars with China risk 'enormous damage' to US tech, says Nvidia chief - Financial Times",
    "description": "Jensen Huang tells lawmakers to be ‘thoughtful’ about imposing more export controls on Beijing",
    "url": "https://www.ft.com/content/ffbb39a8-2eb5-4239-a70e-2e73b9d15f3e",
    "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fc3b3d79b-7509-4e1d-8f20-772efec92bbc.jpg?source=next-opengraph&fit=scale-down&width=900",
    "publishedAt": "2023-05-24T04:00:26Z",
    "isFavorite": false,
    "content": "The chief executive of Nvidia, the worlds most valuable semiconductor company, has warned that the US tech industry is at risk of enormous damage from the escalating battle over chips between Washing… [+4730 chars]"
}


}
