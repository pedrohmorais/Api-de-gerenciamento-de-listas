import { ListsService } from './../lists.service';
import { Component, OnInit } from '@angular/core';
import { ListType, ListItem, List } from '../lists.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent implements OnInit {

  list: List

  constructor(private listsService: ListsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('id rota')
    console.log(this.route.snapshot.params['id'])
    this.listsService.getListById(this.route.snapshot.params['id'])
    .subscribe(listsItems => this.list = listsItems)
  }

}
