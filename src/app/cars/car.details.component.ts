import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';
import {CarsActions} from '../store/cars/cars.actions';
import {CarReviewModel} from './car.review.model';

@Component({
  selector: 'car-details',
  templateUrl: './car.details.component.html'
})
export class CarDetailsComponent implements OnInit {

  car: object = {};
  private id: number;
  review: CarReviewModel = new CarReviewModel();
  reviews: CarReviewModel[] = [];

  constructor(private ngRedux: NgRedux<IAppState>,
              private carActions: CarsActions,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.carActions.details(id);
      this.carActions.allReviews(id);

      this.ngRedux.select(state => state.cars)
        .subscribe(cars => {
          this.car = cars.carDetails;
          this.reviews = cars.carReviews;
        });
    });
  }

  like() {
    this.carActions.like(this.car['id']);
  }

  onSubmit() {
    this.carActions.submitReview(this.car['id'], this.review);
  }
}
