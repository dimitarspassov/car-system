import {initialState} from './cars.state';
import {
  ADD_CAR, ALL_CARS, CAR_ADD_REVIEW, CAR_ALL_REVIEWS, CAR_DETAILS, CAR_LIKE, DELETE_CAR,
  MY_CARS
} from './cars.actions';


function addCar(state, action) {

  const result = action.result;

  if (result.success) {
    return Object.assign({}, state, {
      carAdded: result.success,
      carAddedId: result.success ? result.car.id : null
    });
  }

  return state;
}

function allCars(state, action) {
  return Object.assign({}, state, {
    allCars: action.cars
  });
}

function getDetails(state, action) {
  return Object.assign({}, state, {
    carDetails: action.car
  });
}

function carLike(state, action) {

  if (action.result.success) {
    const currentLikes = state.carDetails.likes;
    const carDetails = Object.assign({}, state.carDetails, {
      likes: currentLikes + 1
    });

    return Object.assign({}, state, {
      carDetails
    });
  }
  return state;
}

function addReview(state, action) {

  const result = action.result;

  if (result.success) {
    const review = result.review;
    const currentReviews = state.carReviews;
    return Object.assign({}, state, {
      carReviews: [...currentReviews, review]
    });
  }
  return state;
}

function allReviews(state, action) {
  return Object.assign({}, state, {
    carReviews: action.reviews
  });
}

function deleteCar(state, action) {

  const result = action.result;

  if (result.success) {
    const id = action.id;
    const index = state.currentUserCars.findIndex(c => c.id === id);

    if (index >= 0) {
      const myCars = state.currentUserCars.slice(0);
      myCars.splice(index, 1);
      return Object.assign({}, state, {
        currentUserCars: myCars
      });
    }
  }

  return state;
}

function myCars(state, action) {
  return Object.assign({}, state, {
    currentUserCars: action.result
  });
}

export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR:
      return addCar(state, action);
    case ALL_CARS:
      return allCars(state, action);
    case CAR_DETAILS: {
      return getDetails(state, action);
    }
    case CAR_LIKE: {
      return carLike(state, action);
    }
    case CAR_ADD_REVIEW: {
      return addReview(state, action);
    }
    case CAR_ALL_REVIEWS: {
      return allReviews(state, action);
    }
    case DELETE_CAR: {
      return deleteCar(state, action);
    }
    case MY_CARS: {
      return myCars(state, action);
    }
    default:
      return state;
  }

}
