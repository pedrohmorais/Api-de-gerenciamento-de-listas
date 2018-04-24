import { LIST_API } from './../app.api';
import {Injectable} from '@angular/core'

import {Http, Headers,RequestOptions} from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { ListType, Category, ListItem, List } from './lists.model';

//usar sempre que acessar servico http
@Injectable()
export class ListsService{
    constructor(private http: Http){}

    public currentCategory: Category

    categories(): Observable<Category[]>{
        return this.http.get(`${LIST_API}/listTypes`)
            .map(response=>response.json())
            .catch(ErrorHandler.handleError)
    }
    listTypesByCategory(id: number): Observable<ListType[]> {
        console.log(`${LIST_API}/byTypeId/${id}`)
        return this.http.get(`${LIST_API}/byTypeId/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    getListById(id: number): Observable<List> {
        console.log(`${LIST_API}/getListById/${id}`)
        return this.http.get(`${LIST_API}/getListById/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    
    //exemplo post
    createList(listType : ListType): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        //sempre usar observable em chamadas http com retorno
        console.log('listType:');
        console.log(listType);
        console.log('headers:');
        console.log(headers);
        return this.http.post(`${LIST_API}/saveList`,
                                JSON.stringify(listType),
                                new RequestOptions({headers: headers}))
                            .map(response=>response.json())
                            //faz mais um map pra retornar só o id
                            //.map(order=>order.id);
    }
/*
    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${LIST_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${LIST_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${LIST_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    */
}