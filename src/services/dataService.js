import axios from 'axios';

class DataService {
  constructor() {
    this._fetchPresentations();
    this._presentationPromise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  _fetchPresentations() {
    axios.get('/assets/items.json').then((response) => {
      if (response && response.data) {
        this._resolve(response.data);
      } else {
        this._reject();
      }
    });
  }

  getPresentations() {
    return this._presentationPromise;
  }
}

export default new DataService();