// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { InjectionToken, Injector, ModuleWithProviders, NgModule } from '@angular/core';

import { ModuleRoutes, ModuleRoutesConfig, resolveModuleRoutes } from '@/app/app-routing.module';

const MAIN_MENU_ROUTES = new InjectionToken('MAIN_MENU_ROUTES');

/**
 * Resolve dynamic routes.
 *
 * @param injector Injector.
 * @returns Module routes.
 */
export function resolveMainMenuRoutes(injector: Injector): ModuleRoutes {
    return resolveModuleRoutes(injector, MAIN_MENU_ROUTES);
}

/**
 * Module used to register routes in the main menu tab. These are routes that will appear as tabs in the main menu (or overflow
 * into the more page), and they must also be declared in a CoreMainMenuHandler or in plugins using the CoreMainMenuDelegate.
 *
 * Some examples of routes registered in this module are:
 * - /main/calendar
 * - /main/messages
 * - /main/notifications
 * - ...
 */
@NgModule()
export class CoreMainMenuRoutingModule {

    static forChild(routes: ModuleRoutesConfig): ModuleWithProviders<CoreMainMenuRoutingModule> {
        return {
            ngModule: CoreMainMenuRoutingModule,
            providers: [
                { provide: MAIN_MENU_ROUTES, multi: true, useValue: routes },
            ],
        };
    }

}
