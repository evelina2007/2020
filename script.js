console.log("all ok")
punkt2_2_2()

function punkt2_2_2() {
  //разница в сравнении
  let d = {key: "value"};
  let e = {key: "value"} === d;	 //нестрогое сравнение
  console.log(e);
  let a = {key: "value"} === d;  //строгое сравнение
  console.log(a);
  let b =d;
  let c = b === d;               //ссылаются  на один и тот жу обьект    
  console.log(c);
}

function punkt2_2_1() {
	//экранирование
	console.log("кино \"аватар\" \n \\n перевод строки");
	//функции строк
	let s = " the Quick bRown FOX quickly jumps over The lazy dog. "
	console.log(s[1] + s [3])
	console.log(s.indexOf("e"))      // первое вхождение
	console.log(s.lastIndexOf("e"))   // последнее вхождение
	console.log(s.indexOf("ф"))     // если нет такого символа
	console.log(s.replace("o", "OOO"))
	let mas = s.split(" ");
	console.log(mas);
	console.log("192.168.1.1".split("."))
	console.log(mas.join("-^-"))
	console.log(s.substr(5, 10)) 
	console.log(s.toLowerCase())
	console.log(s.toUpperCase())
	console.log(s.trim())
}

function punkt2_2_2() {
  //Math
  console.log(Math.pow(2, 4))
  console.log(Math.pow(2, -3))
  console.log(Math.sqrt(9))
  console.log(Math.ceil(1.25))
  console.log(Math.floor(1.25))
  console.log(Math.round(1.25))
  console.log(Math.round(1.75))
  console.log(Math.max(1,2,3,4,246,23,6))
  console.log(Math.min(12,45,1365,427,346,2435))
  console.log(Math.sign(-3))
  console.log(Math.sign(0))
  console.log(Math.sign(34))
}