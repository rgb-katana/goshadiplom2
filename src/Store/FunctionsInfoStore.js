import axios from "axios";
import { makeAutoObservable } from "mobx";

class FunctionsInfoStore {
    functionsInfo=[]
    selectedFunction=-1
    constructor() {
        makeAutoObservable(this);
      }
      setFunctionsInfo(data){
        this.functionsInfo=data
      }
      setSelectedFunction(index){
        this.selectedFunction=index
      }
      getSelectedFunctionInfo(){
        if (this.selectedFunction>-1){
          return this.functionsInfo[this.selectedFunction]
        }
        return undefined
      }
      async loadFunctionsInfo(){
        try{
          let data=await axios.get("/functionsInfo.json");
         // console.log(data)
          this.setFunctionsInfo(data.data)
        } catch (error){
          console.error(error);
        }
      }
}
export default new FunctionsInfoStore();