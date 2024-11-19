import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environments';
import { personajesTransformations} from './interfaces/transformations';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private apiUrl = `${environment.apiUrl}/transformations`;

  constructor(private http: HttpClient) {}

  getTransformations(characterName: string): Observable<personajesTransformations[]> {
    return this.http.get<personajesTransformations[]>(
      `${this.apiUrl}?character=${characterName}`
    );
  }
}
