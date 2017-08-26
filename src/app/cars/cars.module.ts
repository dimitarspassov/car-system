import {NgModule} from '@angular/core';
import {AddCarComponent} from './add.car.component';
import {FormsModule} from '@angular/forms';
import {CarsActions} from '../store/cars/cars.actions';
import {CarsService} from './cars.service';
import {ListCarsComponent} from './list.cars.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarDetailsComponent} from './car.details.component';


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [AddCarComponent, ListCarsComponent, CarDetailsComponent],
  providers: [CarsService, CarsActions]
})
export class CarsModule {

}
