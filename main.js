// write your code here to make the tests pass
var Library = function (){
    var library = [];

    var addBook = function(book) {
      library.push(book);
    };

    var checkOutBook = function(book) {
      for(var i = 0; i < library.length; i++){
          if(library[i] === book){
              book.checkedOut = true
          }else {console.log('error')}
      }
  };
    var returnBook = function(book){
      for(var i = 0; i < library.length; i++){
          if(library[i] === book){
            return book.checkedOut = false
          }else {console.log('error')}
      }
    };

    return{
      addBook : addBook,
      checkOutBook : checkOutBook,
      returnBook : returnBook
    };

  }

  var Book = function (title, author) {
    return{
      title : title,
      author : author,
      checkedOut : false,
      getAttribute :  function(attribute) {
        if(Object.keys(this).includes(attribute)){
             return this[attribute]
            }
      },
      setAttribute : function(attribute, value){
        if(Object.keys(this).includes(attribute)){
             this[attribute] = value
            }
      }
    };
  }
