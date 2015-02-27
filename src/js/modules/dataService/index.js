import {logger} from '../logger/index';

export class DataService {

    constructor() {

    }

    static connect() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('connect() resolve answer');
            },250);
        });
    }

    static getNews() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('getNews() resolve answer');
            },300);
        });
    }
}