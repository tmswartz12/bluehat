import {
  Action,
  thunk,
  action,
  Thunk,
  ActionOn,
  actionOn,
  thunkOn,
} from "easy-peasy";
import { Card, Cards } from "../types/card";
import { apiCaller } from "../util/apiCaller";

export interface CardModel {
  loading: Boolean;
  setLoading: Action<CardModel, Boolean>;
  allCards: Cards;
  setCards: Action<CardModel, Cards>;
  getCards: Thunk<CardModel>;
}

const initialCard: Card = {
  _id: "",
};

const cards: Cards = [];

const card: CardModel = {
  allCards: cards,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setCards: action((state, payload) => {
    state.allCards = payload;
  }),
  getCards: thunk(async (actions) => {
    try {
      const { data } = await apiCaller("api/card", "get", null);
      const cards = data.cards;
      actions.setCards(cards);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default card;
