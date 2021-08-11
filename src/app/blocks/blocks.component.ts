import { Component, OnInit } from '@angular/core';
import { Block } from '../block';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
})
export class BlocksComponent implements OnInit {
  constructor(
    private blockService: BlockService,
  ) {}

  blocks: Block[] = [];
  selectedBlock?: Block;
  searchHeight!: number;
  searchHeightHash?: string;

  ngOnInit(): void {
    this.getBlocks();
  }

  getBlocks(): void {
    this.blockService.getBlocks().then(res=>{
      this.blocks = res;
    })
  }

  onSelect(block: Block): void {
    this.selectedBlock = block;
  }

  async searchBlock(): Promise<void> {
    await this.blockService.searchBlockByHeight(this.searchHeight).then(res=>{
      this.searchHeightHash = res;
    });
  }
}
