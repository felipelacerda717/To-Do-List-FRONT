import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { FilterCategoryPipe } from './filter-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoryComponent,
    FilterCategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
