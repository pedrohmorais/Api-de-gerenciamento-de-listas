import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import { ListsService } from '../lists.service';
import { ListType, Category } from '../lists.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
})
export class ListTypesComponent implements OnInit {

  constructor(private listsService: ListsService, private formBuilder: FormBuilder) { }

  @Input() category

  formList: FormGroup
 
  lastCategory: Category

  currentCategory : Category
  listTypes: ListType[]

  haveLists: number = 0
  
  ngOnInit() {
    this.listTypes = []
    
    this.formList = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required,Validators.minLength(2)]),
    })
  }

  public getHaveLists(){
    return this.haveLists
  }
 
  setList(){
    if(this.listTypes!==undefined)
      this.haveLists = this.listTypes.length
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
    this.setList()
    return listtype;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.category.currentValue);// previous selected value
  }

  createList(lista :ListType){
    lista.typeId = this.category
    console.log(lista)
    this.listsService.createList(lista).subscribe(
      (response: string) => {
        console.log(`response${response}`);
      }
    )
  }

}
