import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobiuscesiumComponent} from './mobius-cesium.component';
import { ViewerComponent} from "./viewer/viewer.component";
import { DataService } from './data/data.service';
import { ToolwindowComponent } from './toolwindow/toolwindow.component';
import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule ,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [CommonModule,
              AngularSplitModule,
              MatTabsModule,
              BrowserAnimationsModule,
              NoopAnimationsModule,
              BrowserModule,
              MatTooltipModule
			 ],
    exports: [ MobiuscesiumComponent ],
    declarations: [MobiuscesiumComponent,
                    ViewerComponent,
                    ToolwindowComponent],
    providers: [DataService],
})
export class MobiusCesium {
 	
 	static forRoot(): ModuleWithProviders {
        return {
            ngModule: MobiusCesium,
            providers: [
               DataService
            ]
        };
    }

}