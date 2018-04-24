class Category {
    public id : number    
    public name : string
    public status : number
}

class ListType {
    public id : number  
    public typeId : number
    public name : string
    public status : number
}

class List {
    public id : number  
    public type : number
    public name : string
    public status : number
    public items : ListItem[]
}

class ListItem {
    public id : number  
    public listId : number
    public name : string
    public status : number
}


export {Category, ListType,ListItem,List}