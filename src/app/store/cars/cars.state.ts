import {CarReviewModel} from '../../cars/car.review.model';

export interface ICarsState {
  carAdded: boolean;
  carAddedId: number;
  allCars: Array<object>;
  carDetails: object;
  carReviews: Array<CarReviewModel>;
  currentUserCars: object[];
}

export const initialState: ICarsState = {
  carAdded: false,
  carAddedId: null,
  allCars: [],
  carDetails: {},
  carReviews: [],
  currentUserCars: []
};
