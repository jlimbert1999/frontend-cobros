import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    ToolbarModule,
    MenuModule,
    InputNumberModule,
    SplitButtonModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule
  ],
})
export class PrimengModule {}
