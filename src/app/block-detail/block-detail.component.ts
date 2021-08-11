import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from '../block';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.css']
})
export class BlockDetailComponent implements OnInit {

  block!: any;
  itemKeys!: string[];

  constructor(private route: ActivatedRoute, private blockService: BlockService, private location:Location) { }

  ngOnInit(): void {
    this.getBlock();
  }

  async getBlock(): Promise<void>{
    const height = Number(this.route.snapshot.paramMap.get('height'));
    // Get block hash string by height value
    const hash = await this.blockService.searchBlockByHeight(height);
    this.block = await this.blockService.getBlockDetail(hash);
    this.itemKeys = Object.keys(this.block);
  }

}
