function Stopwatch(){

    let duration = 0;
    let watchOn = false;
    let start= 0;
    let stop = 0;
      this.start= function(){
        if(watchOn){
            throw new Error("Stopwatch is already on.");
        }
             start = Date.now();
             watchOn = true;
      }
      this.stop = function(){
        if(!watchOn){
            throw new Error("Stopwatch is not turned on.")
        }
             stop = Date.now();
             watchOn = false;
             duration += Math.trunc((stop - start)/1000);
             start= 0;
             stop = 0;
      }
      this.reset = function(){
           duration = 0;
      }
      Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
}

const sw= new Stopwatch();

