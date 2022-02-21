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
  createCard: Thunk<
    CardModel,
    {
      label: string;
      limitAmount: string;
      limitInterval: string;
      allowedCategories: string[];
      blockedCategories: string[];
      cardType: string;
    }
  >;
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
  createCard: thunk(async (actions, payload) => {
    try {
      actions.setLoading(true);
      console.log({ payload });
      const { data } = await apiCaller("api/card", "post", payload);
      const cards = data.cards;
      actions.setCards(cards);
      actions.setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default card;
