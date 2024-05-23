import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResponseModel } from "../models/response.model"

@Injectable({ providedIn: 'root' })
export class GptService {

    private _apiUrl: string = environment.function_url;
    private _key: string = environment.function_key;
    private _file: string = "";

    constructor(private _httpClient: HttpClient) { }

    getResponse(query: string) {
        let apiPath = this._apiUrl + 'api/RunAnalysisQuery' + '?code=' + this._key;
        let data = { 'file': this._file, 'query': query };
        return this._httpClient.post<ResponseModel>(apiPath, data);
    }

    loadFile(url: string) {
        this._file = url;
    }

    getFile(): string {
        return this._file;
    }
}