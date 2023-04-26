// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getCurrency(currency:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency(currency:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }
  getCurrencyById(coinId:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }
}


// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private apiKey = '5f51f227-1fc7-43d8-811b-fc9c90affd6b';
//   private apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

//   constructor(private http: HttpClient) { }

//   getLatestCryptocurrencies() {
//     const headers = new HttpHeaders({
//       'X-CMC_PRO_API_KEY': this.apiKey
//     });

//     const options = { headers: headers };

//     return this.http.get<any>(this.apiUrl, options);
//   }
// }
