import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url: String;
  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = global.url;
  }

  // Este metodo nos sirve para obtener empleados:
  get_empleados(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(this.url + 'empleados', { headers: headers });
  }

  // Este metodo nos sirve para obtener empleado por id:
  get_empleadosPorId(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(this.url + 'empleado/' + id, { headers: headers });
  }

  // Este metodo nos sirve para registrar empleados:
  post_empleados(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + 'empleados', data, { headers: headers });
  }

  // Este metodo nos sirve para editar empleados:
  put_empleado(id: number, data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.url + 'empleado/' + id + '/editar', data, { headers: headers });
  }

  // Este metodo nos sirve para eliminar empleados:
  delete_empleado(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete(this.url + 'empleado/' + id + '/eliminar', { headers: headers });
  }
}
