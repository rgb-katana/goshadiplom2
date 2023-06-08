import { makeAutoObservable } from "mobx";
// import axios from "axios";

class Default {
    downloadUrl="test"
    selectedPage="index"
    headerSwitch=false
    constructor() {
        makeAutoObservable(this);
      }
      setSelectedPage(name){
        this.selectedPage=name
      }
      getSelectedPage(){
        return this.selectedPage
      }
      setHeaderSwitch(value){
        this.headerSwitch=value
      }
      getHeaderSwitch(){
        return this.headerSwitch
      }
}
export default new Default();