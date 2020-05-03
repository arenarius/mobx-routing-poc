import { action, decorate, observable } from "mobx"

class ParamsStore {
  params = '';

  updateParams(newParams) {
    this.params = newParams;
  }
}

decorate(ParamsStore, {
  params: observable,
  updateParams: action
});

export const paramsStore = new ParamsStore();