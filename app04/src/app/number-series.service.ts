import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  generateSeries(lb: number, ub: number): Observable<number> {

    const bgJob = (observer: Observer<number>) => {

      if (lb > ub) {
        observer.error("invalid boundaries to generate a series!");
        return;
      }

      let n = lb;
      let handle = setInterval(() => {
        observer.next(n);
        n++;
        if (n > ub) {
          clearInterval(handle);
          observer.complete();
        }
      }, 1000);
    };

    return new Observable<number>(bgJob);
  };
}
