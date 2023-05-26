import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iarticle } from 'src/app/shared/models/article.interface';
import { NewsService } from 'src/app/shared/services/news.service';
import { getUniqueString } from 'src/app/shared/utils/unique.util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  filterKeywords = ["CNBC", "China"];  
  articles: Iarticle[] | any = [
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Sara Salinas",
        "title": "Citigroup to spin off its Mexico business through IPO - CNBC",
        "description": "Citigroup announced Wednesday it plans to pursue an initial public offering of its Mexico business, Banamex, making formal a long-telegraphed spinoff.",
        "url": "https://www.cnbc.com/2023/05/24/citigroup-to-spin-off-its-mexico-business-through-ipo.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107213880-1679573567209-gettyimages-1249098053-CITIGROUP_FRASER.jpeg?v=1684931444&w=1920&h=1080",
        "publishedAt": "2023-05-24T12:30:44Z",
        "content": "Citigroup announced Wednesday it plans to pursue an initial public offering of its Mexico business, Banamex, making formal a long-telegraphed spinoff. \r\nThe bank expects to complete the separation in… [+1249 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Motor1 "
        },
        "author": "Adrian Padeanu",
        "title": "2024 BMW 5 Series Debuts With Up To 590 HP For Electric i5 M60 - Motor1 ",
        "description": "The eighth-generation BMW 5 Series arrives with gasoline, diesel, plug-in hybrid, and electric power. It's longer, wider, and taller than the model it replaces.",
        "url": "https://www.motor1.com/news/668686/2024-bmw-5-series-debut-specs/",
        "urlToImage": "https://cdn.motor1.com/images/mgl/nA98wk/s1/2024-bmw-i5.jpg",
        "publishedAt": "2023-05-24T12:00:00Z",
        "content": "It's only been a month since Mercedes unveiled the 2024 E-Class and BMW is ready to fight back. Say hello to the revamped 5 Series, internally known by its \"G60\" codename. Available globally with gas… [+6026 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Arjun Kharpal",
        "title": "Chinese Tesla rival shares dive 5% after it forecasts a plunge in car deliveries - CNBC",
        "description": "Xpeng has been hurt by a tough macroeconomic situation in China as well as rising competition from Tesla, BYD and electric car startups.",
        "url": "https://www.cnbc.com/2023/05/24/xpeng-xpev-q1-2023-earnings-report-deliveries-forecast-to-fall.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107245869-1684925788914-gettyimages-1251935461-CHINA_SHANGHAI_AUTO.jpeg?v=1684929342&w=1920&h=1080",
        "publishedAt": "2023-05-24T11:55:42Z",
        "content": "Shares of Chinese electric vehicle firm Xpeng dropped on Wednesday after the company reported earnings that missed expectations and forecast a plunge in car sales.\r\nXpeng shares were down more than 5… [+2278 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Lily Kuo",
        "title": "China braces for new covid wave; XBB variant vaccines on the way - The Washington Post",
        "description": "As immunity from the last big wave of infections wanes with the new XBB coronavirus variants, China braces for a new surge of covid cases.",
        "url": "https://www.washingtonpost.com/world/2023/05/24/china-new-covid-outbreak-xbb-strain/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3GWXI7OY3XGE3QJAP25DXBIMCE_size-normalized.jpg&w=1440",
        "publishedAt": "2023-05-24T11:41:01Z",
        "content": "Comment on this story\r\nComment\r\nChinese authorities are rushing to push out vaccines to fight an ongoing new wave of the coronavirus expected to peak in June and infect as many as 65 million people a… [+3768 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Dani Romero",
        "title": "Stock futures slide with debt talks, Fed minutes in focus: Stock market news today - Yahoo Finance",
        "description": "US stock futures slipped on Wednesday morning as investors fretted over a potential US debt default and braced for the release of minutes later from the...",
        "url": "https://finance.yahoo.com/news/stock-futures-slide-with-debt-talks-fed-minutes-in-focus-stock-market-news-today-113857846.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/e.mlROWKbT_wXlGK_7iqyA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/9361ded0-fa17-11ed-af38-fde5438a8f6f",
        "publishedAt": "2023-05-24T11:38:57Z",
        "content": "US stock futures slipped on Wednesday morning as investors fretted over a potential US debt default and braced for the release of minutes from the Federal Reserve's last policy meeting.\r\nContracts on… [+3154 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Melissa Repko",
        "title": "Kohl's shares spike as retailer reports a surprise profit - CNBC",
        "description": "Kohl's unexpectedly posted a profit and reaffirmed its full-year guidance.",
        "url": "https://www.cnbc.com/2023/05/24/kohls-kss-earnings-q12023.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107072210-gettyimages-1401556834-dsc09421_f762ca5c-d00f-453f-9b69-9809d19e9e54.jpeg?v=1684927678&w=1920&h=1080",
        "publishedAt": "2023-05-24T11:27:58Z",
        "content": "Kohl's shares spiked early Wednesday as the struggling retailer posted a surprise profit while it chases a turnaround.\r\nShares jumped more than 12% in premarket trading.\r\nThe retailer reiterated its … [+2832 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Diana Olick",
        "title": "Mortgage demand drops again as rates cross back over 7% - CNBC",
        "description": "The average rate on the popular 30-year fixed mortgage crossed over 7% on Tuesday, according to Mortgage News Daily. The highest level since early March.",
        "url": "https://www.cnbc.com/2023/05/24/mortgage-demand-drops-again-as-rates-cross-back-over-7percent.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107040346-1648821032266-GettyImages-1239662359.jpg?v=1684926001&w=1920&h=1080",
        "publishedAt": "2023-05-24T11:00:01Z",
        "content": "The average rate on the popular 30-year fixed mortgage crossed over 7% on Tuesday, according to Mortgage News Daily. That is the highest level since early March.\r\nRates have been rising on a combinat… [+1814 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "USA TODAY",
        "title": "These US cities may be best to escape worst impacts of climate change - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/news/nation/2023/05/23/best-cities-avoid-worst-climate-change-effects/70212382007/",
        "urlToImage": null,
        "publishedAt": "2023-05-24T10:53:28Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "GMA"
        },
        "author": "Haley Yamada",
        "title": "Netflix announces password sharing crackdown rollout in US - GMA",
        "description": "",
        "url": "https://www.goodmorningamerica.com/culture/story/netflix-announces-password-sharing-crackdown-rollout-us-99551562",
        "urlToImage": "https://s.abcnews.com/images/GMA/netflix-logo-gty-lv-230523_1684877686272_hpMain_16x9_608.jpg",
        "publishedAt": "2023-05-24T10:52:30Z",
        "content": "Netflix announced Tuesday that it will begin to send emails to members who are sharing their \r\n account information outside of their households in the U.S.\r\n\"A Netflix account is for use by one house… [+1248 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Boston 25 News"
        },
        "author": "Lindsey Thorpe",
        "title": "Major Mass. health insurance provider says customer data compromised after cyberattack - Boston 25 News",
        "description": "Personal data including addresses, medical history, and Social Security numbers may have been compromised.",
        "url": "https://www.boston25news.com/news/local/major-mass-health-insurance-provider-says-customer-data-was-copied-taken-cyberattack/DYMAWFA2PBAJLMRAT74FNST5HQ/",
        "urlToImage": "https://cmg-cmg-tv-10020-prod.cdn.arcpublishing.com/resizer/KCwsfMKizGCEroTVhnb-XP2Ykdw=/1440x810/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/OYITLL2I65GKBOXCWOHTCLZKAA.png",
        "publishedAt": "2023-05-24T10:42:37Z",
        "content": "BOSTON — A pair of major Massachusetts and New Hampshire health insurance companies are warning subscribers that a cybersecurity ransomware incident in March and April has compromised some members pe… [+2236 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Niha Masih",
        "title": "Target removes some LGBTQ+ merchandise after facing threats - The Washington Post",
        "description": "Without naming the products, a Target spokeswoman said the company would remove items “at the center of the most significant confrontational behavior.”",
        "url": "https://www.washingtonpost.com/business/2023/05/24/target-lgbtq-clothing-controversy-boycott/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RVIDOCSLUSV2FBGL74BZG2YZU4.jpg&w=1440",
        "publishedAt": "2023-05-24T09:44:00Z",
        "content": "Comment on this story\r\nComment\r\nTarget will remove some of its LGBTQ+ merchandise from its Pride Month collection after facing customer backlash that threatened the safety of its workers, the company… [+3674 chars]"
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Telis Demos",
        "title": "For Banks, Debt-Ceiling Drama Doesn't End With a Deal - The Wall Street Journal",
        "description": "A wall of money to replenish the government’s cash hole could cause instability if it makes banks’ deposit issues worse",
        "url": "https://www.wsj.com/articles/for-banks-debt-ceiling-drama-doesnt-end-with-a-deal-c8e96f21",
        "urlToImage": "https://images.wsj.net/im-787100/social",
        "publishedAt": "2023-05-24T09:30:00Z",
        "content": null
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": null,
        "title": "IMF Chief Reassures on Debt Deal; Roubini Sees Risk: Qatar Forum - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/news/articles/2023-05-24/roubini-says-us-debt-talks-may-reach-last-hour-qatar-forum",
        "urlToImage": null,
        "publishedAt": "2023-05-24T08:45:21Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
        "source": {
            "id": null,
            "name": "CoinDesk"
        },
        "author": "Shaurya Malwa",
        "title": "Bitcoin, Ether Slip as UK Core CPI Reaches Highest Since 1992 - CoinDesk",
        "description": "The annualized 3-month trend in UK core CPI is running at a whopping 13.6%, per the UK Office of National Statistics.",
        "url": "https://www.coindesk.com/markets/2023/05/24/bitcoin-ether-slip-as-uk-core-cpi-reaches-highest-since-1992/",
        "urlToImage": "https://www.coindesk.com/resizer/w5AxitwZyOjQ5eyM5TgHklGkosU=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IDINJFBGIVCBBH2QVP4TK3ZKTY.jpg",
        "publishedAt": "2023-05-24T08:01:00Z",
        "content": "Bitcoin slid under the $27,000 level during the Asia trading day, which lead to a market-wide decline in major cryptocurrencies as traders in broader equity markets reacted to poor U.K. inflation fig… [+809 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "OilPrice.com"
        },
        "author": "Tsvetana Paraskova",
        "title": "Oil Prices Rise On Signs Of A Tightening Market - OilPrice.com",
        "description": "Oil prices climbed early on Wednesday following estimates of a large U.S. inventory draw and a stark warning from Saudi Arabia.",
        "url": "https://oilprice.com/Latest-Energy-News/World-News/Oil-Prices-Rise-On-Signs-Of-A-Tightening-Market.html",
        "urlToImage": "https://d32r1sh890xpii.cloudfront.net/news/718x300/2023-05-24_nqsxrdcd1t.jpg",
        "publishedAt": "2023-05-24T07:32:00Z",
        "content": "With oil majors increasingly focusing…\r\nOil prices started the week…\r\nBy Tsvetana Paraskova - May 24, 2023, 2:32 AM CDTUpdated: May 24, 2023, 6:59 AM CDTOil prices rose in Asian trade early on Wednes… [+1928 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Breck Dumas",
        "title": "AI is already speeding up drug development and reducing animal testing - Fox Business",
        "description": "AI-driven technology developed by VeriSIM Life accelerates drug development and reduces the need for animal testing by analyzing pharmaceuticals before human trials.",
        "url": "https://www.foxbusiness.com/technology/ai-speeding-drug-development-reducing-animal-testing",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/05/0/0/human-body.jpg?ve=1&tl=1",
        "publishedAt": "2023-05-24T06:03:25Z",
        "content": "Developing life-saving medicine takes a lot of time, money and testing. But one company's artificial intelligence-driven technology provides a way to slash all three while saving the lives of more hu… [+3564 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Virgin Orbit: Branson’s space mission ends after rocket failure - BBC",
        "description": "Virgin Orbit's shutdown follows a major launch failure and most of staff have been laid off.",
        "url": "https://www.bbc.com/news/business-65692302",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1293E/production/_129849067_virgin-orbit-17.jpg",
        "publishedAt": "2023-05-24T05:04:49Z",
        "content": "Sir Richard Branson's rocket company Virgin Orbit has shut down, just months after a major mission failure.\r\nThe firm's converted jet and leases on properties have been sold for $36m (£29m), just a f… [+1594 chars]"
    },
    {
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
        "content": "The chief executive of Nvidia, the worlds most valuable semiconductor company, has warned that the US tech industry is at risk of enormous damage from the escalating battle over chips between Washing… [+4730 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WAPT Jackson"
        },
        "author": "Madeleine Nolan",
        "title": "Cracker Barrel closed in Jackson - WAPT Jackson",
        "description": "\"The decision to close a store is never one we take lightly,\" the company said.",
        "url": "https://www.wapt.com/article/cracker-barrel-closed-in-jackson/43974652",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cracker-barrel-4-646ce757a4aee.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2023-05-24T03:34:00Z",
        "content": "JACKSON, Miss. —The Cracker Barrel in Jackson has closed.\r\nCompany officials said the restaurant on Interstate 55 struggled to rebound after the pandemic. The company decided to close the Jackson loc… [+1244 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Huileng Tan",
        "title": "World's richest person Bernard Arnault's wealth drops $11B in a day - Business Insider",
        "description": "Arnault is now worth $192 billion. The Frenchman narrowed his lead over Tesla and SpaceX CEO Elon Musk to about $12 billion.",
        "url": "https://www.businessinsider.com/richest-billionaire-bernard-arnault-lvmh-wealth-net-worth-elon-musk-2023-5",
        "urlToImage": "https://i.insider.com/646d73b0fee1b300197a7d09?width=1200&format=jpeg",
        "publishedAt": "2023-05-24T03:13:00Z",
        "content": "Bernard Arnault, the world's richest person, saw $11.2 billion wiped off his fortune on Tuesday, narrowing his lead over Elon Musk, according to the Bloomberg Billionaires Index.\r\nThe retail tycoon n… [+1329 chars]"
    }
]
  constructor( private newsService:NewsService){

  }
  ngOnInit() : void {
    this.getList();
  }

  // get latest news list from server

  getList():void {
    const isExistInFav = (id) => {
        const articlesId = localStorage.getItem('articlesId');
        if (articlesId && articlesId.length > 0 && articlesId?.includes(id)) {
            return true;
        }
        return false;
    }

    this.articles = this.articles .map((article:Iarticle)=> {
        const uniqueId = article.publishedAt + article.title
        return {...article, articleId: uniqueId , isFavorite: isExistInFav(uniqueId)}
  });
  return 
    firstValueFrom(this.newsService.getLatestNews()).then((response: Iarticle[]) => {
      this.articles = response.map((article:Iarticle)=> {
            const uniqueId = article.publishedAt + article.title
            return {...article, articleId: uniqueId , isFavorite: isExistInFav(uniqueId)}
      });
    }).catch(error=>{
      console.log(error);
    })
  }

  toggleFavorite(article: Iarticle) : void {
    if(!article?.isFavorite){
        this.addToFavorite(article);
    }else{
        this.removeFromFavorite(article.articleId);
    }
  }

  addToFavorite(article:Iarticle): void {
    article  = {...article, isFavorite: true};
    firstValueFrom(this.newsService.addToFavoriteById(article.articleId)).then(response => {
        let art = this.articles.find(e => e.articleId === article.articleId);
        art.isFavorite = true;
    })

    firstValueFrom(this.newsService.addToFavorite(article)).then(response => {
        let art = this.articles.find(e => e.articleId === article.articleId);
        art.isFavorite = true;
    })
  }

  removeFromFavorite(articleId:string):void { 
    firstValueFrom(this.newsService.removeFavoriteById(articleId)).then(response => {
        const arti = this.articles.find(e => e.articleId === articleId);
        arti.isFavorite = false;
    })
  }

}
