import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideBerHeaderToolComponent } from './side-ber-header-tool/side-ber-header-tool.component';
import { ComponentsReadyDevSelectComponent } from './components-ready-dev-select/components-ready-dev-select.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FigmaHeaderComponent } from './figma-header/figma-header.component';
import { AssetsAnatomySpecificationsComponent } from './assets-anatomy-specifications/assets-anatomy-specifications.component';
import { EditorHeaderComponent } from './editor-header/editor-header.component';
import { EditorComponent } from './editor/editor.component';
import { EditorHtmlComponent } from './editor-html/editor-html.component';
import { PreviewHeaderComponent } from './preview-header/preview-header.component';
import { EditorSpecificationsComponent } from './editor-specifications/editor-specifications.component';
import { EditorTsComponent } from './editor-ts/editor-ts.component';
import { EditorModuleTsComponent } from './editor-module-ts/editor-module-ts.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SideBerHeaderToolComponent,
    ComponentsReadyDevSelectComponent,
    SearchBarComponent,
    FigmaHeaderComponent,
    AssetsAnatomySpecificationsComponent,
    EditorHeaderComponent,
    EditorComponent,
    EditorHtmlComponent,
    PreviewHeaderComponent,
    EditorSpecificationsComponent,
    EditorTsComponent,
    EditorModuleTsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,SideBerHeaderToolComponent,ComponentsReadyDevSelectComponent,SearchBarComponent,FigmaHeaderComponent,AssetsAnatomySpecificationsComponent,EditorHeaderComponent,EditorComponent,EditorHtmlComponent,PreviewHeaderComponent,EditorSpecificationsComponent,EditorTsComponent,EditorModuleTsComponent
  ]
})
export class ComponentsModule {

}
