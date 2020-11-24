import { Component, OnInit } from '@angular/core';
import { ItemPosts } from 'src/app/Models/item';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  itemPosts: ItemPosts[] = [];
  itemPost: ItemPosts = {};
  endRecords: 10;
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (res) => {
        // console.log(res);
        this.itemPosts = res as ItemPosts[];
        console.log(this.itemPosts);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  postComm() {
    this.service.postData(this.itemPost).subscribe(console.log);
  }
}
