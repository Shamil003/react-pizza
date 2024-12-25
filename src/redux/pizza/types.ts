type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    size: number[];
    types: number[];
    rating: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
};

export type SearchPizzaParams = {
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: string

}