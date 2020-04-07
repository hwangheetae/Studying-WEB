function linkHandler(self){
  var target =document.querySelector("body")
  if(self.value=== "link"){
    target.style.backgroundColor = "black";
    self.value="exit";


    var alist = document.querySelectorAll('a');
    var i=0;
    while (i <alist.length){
      alist[i].style.color = 'powderblue';
      i=i+1;
    }
  } else {
    target.style.backgroundColor ='white';
    self.value ='link';

    var alist =document.querySelectorAll('a');
    var i =0;
    while(i< alist. length){
     alist[i].style.color = 'blue';
     i=i+1;
    }
}

}
