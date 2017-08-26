import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';
import {CarsActions} from '../store/cars/cars.actions';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'list-cars',
  templateUrl: './list.cars.component.html'
})
export class ListCarsComponent implements OnInit {

  cars: Array<object> = [];
  page: number = 1;
  searchText: string = '';

  constructor(private carsActions: CarsActions, private router: Router,
              private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {
  }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;
      this.searchText = params['search'];
      this.carsActions.allCars(this.page, this.searchText);
      this.ngRedux.select(state => state.cars.allCars)
        .subscribe(cars => this.cars = cars);
    });


  }

  prevPage() {
    if (this.page === 1) {
      return;
    }
    const url = this.getUrl(this.page - 1);
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.cars.length === 0 || this.cars.length < 10) {
      return;
    }
    const url = this.getUrl(this.page + 1);
    this.router.navigateByUrl(url);
  }

  search() {
    this.router.navigateByUrl(`cars/all?search=${this.searchText}`);
  }

  private getUrl(page) {
    let url = `cars/all?page=${page}`;

    if (this.searchText) {
      url += `&search=${this.searchText}`;
    }

    return url;
  }

}
