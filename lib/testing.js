var assert = {
  isTrue: function(assertionToTest){
    if(!assertionToTest){
      throw new Error("Test failed"+ assertionToTest + "is not truthy");
    };
  }
};
