import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})


export class CommentsComponent implements OnInit {

  @ Input() id_channel!: number
  commentInfo: any = []

  constructor(private Service: ServiceService) {
  }


  ngOnInit(): void {
    this.Service.getChannelComments(this.id_channel).subscribe((data) => {
      console.log("data", data)
      this.commentInfo = data
    })
  }

  postComents(commentsForm: NgForm) {
    console.log(commentsForm.value)
    this.Service.postChannelComment(this.id_channel, commentsForm.value.name, commentsForm.value.email, commentsForm.value.comment)
  }

}
