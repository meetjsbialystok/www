import axios from 'axios';
import presentationData from '../items.json';

class DataService {
  getPresentations() {
    return new Promise((resolve) => {
      resolve(presentationData);
    });
  }
}

export default new DataService();