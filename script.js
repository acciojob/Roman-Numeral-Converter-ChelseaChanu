function convertToRoman(num) {
	const obj = {
	0:['M',1000], 
	1:['D', 500], 
	2:['C', 100], 
	3:['L', 50], 
	4:['X', 10], 
	5:['V', 5], 
	6:['I', 1]
  };

//your code here
	let ans = "";
  	while(num!==0){
		let digit = num.toString().charAt(0);
		if(num>=1000){
			num -= 1000;
			ans += "M";
		}
		else if(num>=500 && num<1000){
			let newNum = digit*100;
			if(newNum===900){
				num -= 900;
				ans += "CM";
			}
			else{
				num -= 500;
				ans += "D";
			}
		}
		else if(num>=100 && num<500){
			let newNum = digit*100;
			if(newNum===400){
				num -= 400;
				ans += "CD";
			}
			else{
				num -= 100;
				ans += "C";
			}
		}
		else if(num>=50 && num<100){
			let newNum = digit*10;
			if(newNum===90){
				num -= 90;
				ans += "XC";
			}
			else{
				num -= 50;
				ans += "L";
			}
		}
		else if(num>=10 && num<50){
			let newNum = digit*10;
			if(newNum===40){
				num -= 40;
				ans += "XL";
			}
			else{
				num -= 10;
				ans += "X";
			}
		}
		else if(num>=5 && num<10){
			if(digit===9){
				num -= 9;
				ans += "IX";
			}
			else{
				num -= 5;
				ans += "V";
			}
		}
		else if(num>=1 && num<5){
			if(digit===4){
				num -= 4;
				ans += "IV";
			}
			else{
				num -= 1;
				ans += "I";
			}
		}
	}

	return ans;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(998));




// do not edit below this line
module.exports = convertToRoman
