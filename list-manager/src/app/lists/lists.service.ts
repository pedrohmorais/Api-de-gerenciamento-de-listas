import {Injectable} from '@angular/core'

import {Http} from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LIST_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { ListType, Category } from './lists.model';

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