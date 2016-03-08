self.onmessage = function(event){
    var number = event.data;
    var n = 1;
    primelist = "";
    search: while (n<number) {
      n += 1;
      for (var i = 2; i <= Math.sqrt(n); i += 1)
        if (n % i == 0)
          continue search;
      // found a prime!
      primelist += " " + n;
      if (primelist.length > 2000){
          self.postMessage(primelist);
          primelist = ""
      }
    }
    self.postMessage(primelist);
}
