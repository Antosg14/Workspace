import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioCrearCuentaComponent } from './inicio-crear-cuenta/inicio-crear-cuenta.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent
},
  {path: 'sidebar', component:SidebarComponent
},
{path: 'formulario', component:FormularioComponent
},
{path: 'inicio', component:InicioCrearCuentaComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
