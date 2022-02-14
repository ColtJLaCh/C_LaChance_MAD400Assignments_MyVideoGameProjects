import { Pipe, PipeTransform } from '@angular/core';

import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(contentList: Content[], type: string): Content[] {
    if (type == "" || type == null) {
      return contentList.filter(c => c.type == null);
    }
     return contentList.filter(c => c.type == type);
  }

}
