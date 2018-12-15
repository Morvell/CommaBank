import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PayAnyCardComponent } from './pay/pay-any-card/pay-any-card.component';
import { PayYouBankComponent } from './pay/pay-you-bank/pay-you-bank.component';
import {FormsModule} from '@angular/forms';
import { PayComponent } from './pay/pay.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: PayAnyCardComponent},
  {path: 'payYouBank', component: PayYouBankComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PayAnyCardComponent,
    PayYouBankComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
