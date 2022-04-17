import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) { }

  public init() {

    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
       
        case 'VERSION_DETECTED':
          this.snackbar.open(`Download new app version:
          ${event.version.hash}`, 'ACCEPT', {
            duration: 3000
          });
          break;
        case 'VERSION_READY':
          this.snackbar.open(`Current app version:
          ${event.currentVersion.hash} | New app version ready for use:
            ${ event.latestVersion.hash }`, 'ACCEPT', {
            duration: 3000
          });
         break;
      }
    });
  }
}
