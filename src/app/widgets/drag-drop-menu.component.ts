import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drag-drop-menu',
  template: `
    <h3 class="first">Drag Only</h3>
<div pDraggable="pnl"  dragHandle=".ui-panel-titlebar">
    <p-panel header="Drag Header">
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    </p-panel>
</div>

<h3>Drag and Drop to DataTable</h3>
<div class="ui-grid ui-grid-pad ui-grid-responsive">
    <div class="ui-grid-row">
        <div class="ui-grid-col-6 ui-widget-content" style="border-right:0 none">
            <ul style="margin:0;padding:0">
                <li *ngFor="let car of availableCars" class="ui-state-default ui-helper-clearfix" pDraggable="cars"
                    (onDragStart)="dragStart($event,car)" (onDragEnd)="dragEnd($event)">
                    <i class="fa fa-arrows fa-2x" style="float:right;margin-top:8px"></i>
                    <img src="showcase/resources/demo/images/car/{{car.brand}}.gif" style="float:left" draggable="false">
                    <div style="margin:8px 0 0 8px;float:left">{{car.vin}} - {{car.year}}</div>
                </li>
            </ul>
        </div>
        <div class="ui-grid-col-6 ui-widget-content" pDroppable="cars" (onDrop)="drop($event)"
                [ngClass]="{'ui-state-highlight':draggedCar}">
            <p-dataTable [value]="selectedCars">
                <p-column field="vin" header="Vin"></p-column>
                <p-column field="year" header="Year"></p-column>
                <p-column field="brand" header="Brand"></p-column>
                <p-column field="color" header="Color"></p-column>
            </p-dataTable>
        </div>
    </div>
</div>
  `,
  styles: []
})


export class DragDropMenuComponent {

  availableCars: Car[];
    
    selectedCars: Car[];
    
    draggedCar: Car;
    
    constructor(private carService: CarService) { }
    
    ngOnInit() {
        this.selectedCars = [];
        //this.carService.getCarsSmall().then(cars => this.availableCars = cars);
    }
    
    dragStart(event,car: Car) {
        this.draggedCar = car;
    }
    
    drop(event) {
        if(this.draggedCar) {
            this.selectedCars.push(this.draggedCar);
            this.availableCars.splice(this.findIndex(this.draggedCar), 1);
            this.draggedCar = null;
        }
    }
    
    dragEnd(event) {
        this.draggedCar = null;
    }
    
    findIndex(car: Car) {
        let index = -1;
        for(let i = 0; i < this.availableCars.length; i++) {
            if(car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }
}



 class Car {
   vin:any;
}
