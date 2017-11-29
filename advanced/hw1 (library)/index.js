//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }

  var _ = {
    map: function(list, iteratee) {
      //code here;
      let output= []
      for ( i in list){
        output.push(iteratee(list[i]))
      }
    },
    reduce: function(list, iteratee) { 
      // code here;
     let output= list[0];
      for ( i=1; i < list.length; i++){
        output = iteratee(output, list[i]);
      }
    },
    find: function(list, predicate) {   
      // code here;
      for(i in list){
          if (i == predicate){
              return true;
          }
      }
      return false;
    },
    filter: function(list, predicate) { 
      // code here;
      let output = []
      for ( i in list){
          if (predicate(list[i])){
            output.push(list[i])
          }
      }
      return output
    },
    reject: function(list, predicate) { 
      // code here;
      let output = []
      for ( i in list){
        if (predicate(list[i]){
            output.push(list[i])
          }
      }
    }
  }
 // you just created a library with 5 methods!

 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 console.log(evens); // if things are working right, this will return [2,4,6].