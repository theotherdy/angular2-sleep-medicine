import { Component } from '@angular/core';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ModyuleComponent } from './modyule.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <modyules-component></modyules-component>
        `,
    directives: [ModyuleComponent],
    //directives: [ROUTER_DIRECTIVES],
    //providers: [
    //  ROUTER_PROVIDERS
    //]
})

//@RouteConfig([
//    {
//        path: '/module/:id',
//        name: 'Module',
//        component: ModyuleComponent
//    },{
//        path: '/current-module',
//        name: 'CurrentModule',
//        component: ModyuleComponent,
//        useAsDefault: true
//    }
//])

export class AppComponent {
    title = 'Sleep Medicine';
}
