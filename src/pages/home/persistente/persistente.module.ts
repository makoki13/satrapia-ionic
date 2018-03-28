import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersistentePage } from './persistente';

@NgModule({
  declarations: [
    PersistentePage,
  ],
  imports: [
    IonicPageModule.forChild(PersistentePage),
  ],
})
export class PersistentePageModule {}
