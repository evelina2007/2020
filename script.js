console.log("all ok")
punkt2_1()

function punkt2_1() {
  //разница в сравнении
  let d = {key: "value"};
  let e = {key: "value"} === d;	 //нестрогое сравнение
  console.log(e);
  let a = {key: "value"} === d;  //строгое сравнение
  console.log(a);
  let b =d;
  let c = b === d;        
  console.log(c);
}

function punkt2_2() {
	//экранирование
	console.log("кино \"аватар\" \n \\n перевод строки")
}