import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class AuthorsStore {
  authors = [];

  constructor() {
    makeAutoObservable(this);
  }
  setAuthors(data) {
    this.authors = data;
  }
  getAuthors() {
    return this.authors;
  }
  async loadAuthors() {
    try {
      let data = await axios.get('/authors.json');
      console.log(data);
      this.setAuthors(data.data);
    } catch (error) {
      console.error(error);
    }
  }
}
export default new AuthorsStore();
