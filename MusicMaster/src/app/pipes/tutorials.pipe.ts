import { Pipe, PipeTransform } from '@angular/core';
import {Tutorial} from '../model/tutorial';

@Pipe({
  name: 'tutorials'
})
export class TutorialsPipe implements PipeTransform {

  transform(value: Tutorial[], myDifficulty?: number): any {
    if ( !value || !myDifficulty) {
      return [];
    } else {
      return value.filter( e => {
        return e.difficulty === myDifficulty;
        });
      }
  }
}
