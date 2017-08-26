import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';
import {CarsActions} from '../store/cars/cars.actions';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  currentUserCars: object[];

  constructor(private carActions: CarsActions, private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.carActions.profile();

    this.ngRedux.select(state => state.cars.currentUserCars).subscribe(currentUserCars => {
      this.currentUserCars = currentUserCars;
    });
  }

  delete(id) {
    this.carActions.deleteCar(id);
  }
}
