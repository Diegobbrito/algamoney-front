import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent,
    LancamentosGridComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    BrowserAnimationsModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,

  ],
  exports: [LancamentosPesquisaComponent, LancamentosCadastroComponent],
})
export class LancamentosModule {}