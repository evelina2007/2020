console.log("all ok")
punkt2_6()

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

function punkt2_2_3() {
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

function punkt2_2_3() {
    let array = [1,2,3,4,5]
    let b = array.map(function(x){
     return 2 * x;
    });
    console.log(b)

    let copy =[];
    array.forEach(function(x){
     copy.unshift(x);
    });
    console.log(copy)

  let c = array.filter(function(x){
  	return x % 2 ==1;
  });
  console.log(c)

}

function punkt2_2_4(){
	//sort
	let a = [1,4,9,3,7,37,658,36,73,4698,57,63245,643]
	let b = a.sort()
	console.log(b)
	let c = a.sort(key)
	console.log(c)
}

function key(fst, snd){
	if (fst < snd) {
    return -1;
	}else{
		if (fst === snd)
			return 0
		else
			return 1
	}
}

function punkt2_3(){
	let a = 3, b = 5;
	let c;
	if (a > b){
		c = a 
		}else{
		c = b
	}
		console.log(c)
		c = a > b ? a : b;
	    console.log(c)
	}


function punkt2_5(){
  getCaller();
  let alice = {name: "Alice", fn: getCaller}
  alice.fn()
}

function getCaller(){
	console.log(this);
}

function punkt2_6(){
	let num = new Set();
	num.add(43)
	console.log(num)
	num.add(42)
	console.log(num)
	num.add(43)
	console.log(num)
	console.log(num.has(43))
	console.log(num.has(41))
	num.add(4)
	console.log(num)
	for (let item of num){
		console.log(item)
	}
	num.delete(43)
	console.log(num)
	console.log(num.size)
	num.clear()
	

}