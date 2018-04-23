import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../lists.service';
import { ListType, Category } from '../lists.model';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
})
export class ListTypesComponent implements OnInit {

  constructor(private listsService: ListsService) { }

  
 
  lastCategory: Category

  currentCategory : Category
  listTypes: ListType[]

  haveLists: number = 0
  ngOnInit() {
  }

 
  changeCategory(): Observable<ListType[]> {
    this.currentCategory = this.listsService.currentCategory
    let listtype
    if(this.lastCategory!=this.currentCategory){
      this.listsService.listTypesByCategory(this.listsService.currentCategory.id)
      .subscribe(listTypes => this.listTypes = listTypes)

      this.lastCategory = this.currentCategory
      this.haveLists = this.listTypes.length
    }
    listtype = this.listTypes
    this.haveLists = listtype
    return listtype;
  }

}
