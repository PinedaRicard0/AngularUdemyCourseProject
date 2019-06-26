import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component:RecipiesComponent, children:[
      {path:'', component:RecipeStartComponent},
      {path:'new', component:RecipeEditComponent},
      {path:':id', component:RecipieDetailComponent},
      {path:':id/edit', component:RecipeEditComponent}
    ]},
    { path: 'shoppinglist', component:ShoppingListComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}