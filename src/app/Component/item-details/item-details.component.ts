import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  commentForm: FormGroup;
   test = new FormControl();

  constructor(private service: PostService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
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

  createForm() {
    this.commentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    });

    this.commentForm.valueChanges.subscribe(console.log);
  }
  postComm() {
    this.service.postData(this.itemPost).subscribe(console.log);
  }
  postData(event){
    console.log(event);
    this.commentForm.reset();
    window.navigator.geolocation.getCurrentPosition(console.log);
  }


  get form() {
    return this.commentForm.controls;
  }
}
