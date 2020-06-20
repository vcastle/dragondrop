import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// vendors
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';

// components
import { AppComponent } from './app.component';
import { DragonComponent } from './dragon/dragon.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [AppComponent, DragonComponent, FeaturesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
