import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private swUpdate: SwUpdate /*step2*/) {

  }

  ngOnInit() {
    // step 2
    // 如果使用swUpdate.checkForUpdate就是需要配合手动点击某按钮更新
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activated.subscribe(() => {
        if (confirm('New version available. Do you want to load new version?')) {
          window.location.reload();
        }
      });
    }
  }

}

