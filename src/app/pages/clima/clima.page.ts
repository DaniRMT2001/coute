import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  closeMenu(){ this.menu.close();}
}
