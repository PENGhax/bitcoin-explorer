import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Block } from './block';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  constructor(private http: HttpClient) {}

  async getBlocks(): Promise<Block[]> {
    return await this.http.get<Block[]>('https://blockstream.info/api/blocks').toPromise();
  }

  async searchBlockByHeight(height: number): Promise<any> {
    const url = `https://blockstream.info/api/block-height/${height}`;
    return await this.http.get(url, {responseType: 'text'}).toPromise()
  }

  async getBlockDetail(hash: string):Promise<Block>{
    const url = `https://blockstream.info/api/block/${hash}`;
    return await this.http.get<Block>(url).toPromise();
  }
}
