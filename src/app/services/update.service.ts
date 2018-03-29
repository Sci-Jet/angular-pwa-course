import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


import { InfoComponent } from '../info/info.component';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UpdateService {
    constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
        if (this.swUpdate.isEnabled) { // 这个条件主要为了避免不支持PWA的浏览器不会抛出异常

            this.swUpdate.available.subscribe(evt => {
                const snack = this.snackBar.openFromComponent(InfoComponent); // ('Update Available', 'Reload');

                snack
                    .onAction()
                    .subscribe(() => {
                        window.location.reload();
                    });
            });
            this.snackBar.openFromComponent(InfoComponent, {
                duration: 12000,
            });
        }
    }
}
