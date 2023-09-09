import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatModule } from '../appMaterialModule/mat.module';

const sharedComponents = [
  HeaderComponent,
  PageNotFoundComponent,
  FooterComponent,
];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MatModule],
  exports: [sharedComponents],
})
export class SharedModule {}
