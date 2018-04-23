import { Component, OnInit } from '@angular/core';
import { Category } from './lists.model';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {

  categories: Category[]

  categorySelected: Category



  onChangeCategory(event) {
    if(event>0){
      this.setCategoryById(event)
    }
    console.log(JSON.stringify(this.categorySelected));
  }

  setCategoryById(typeId: number){
    this.categorySelected = this.categories.find(x => x.id == typeId)
    this.listService.currentCategory = this.categorySelected
  }

  constructor(private listService: ListsService) { }

  ngOnInit() {
    this.categorySelected = null;
    this.listService.categories()
      .subscribe(categories => this.categories = categories)
  }

}
