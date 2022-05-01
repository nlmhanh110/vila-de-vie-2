import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room/room.service';
import { IRoom } from 'src/models/room';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  rooms: any;
  errMessage:string='';
  selectedId:any;
  selectedRoom:any;

  constructor(private _service:RoomService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((param)=>{
      let id = param.get('id');
      if(id!=null){
        this.selectedId = parseInt(id)
        console.log(this.selectedId)
      }
    })

    this._service.getRoomInfo().subscribe({
      next:(data)=>{
        this.selectedRoom = data.find((value:any)=>value.id == this.selectedId)
        console.log(this.selectedRoom)
      },
      error: (err)=> {this.errMessage=err}
    })

  }

}
