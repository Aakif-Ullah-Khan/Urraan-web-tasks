function Calculate_BMI(){
        let weight = parseFloat(document.getElementById("weight").value);
        let height = parseFloat(document.getElementById("height").value);
        let bmi = weight / (height * height);
        document.getElementById("bmiResult").innerHTML = "Your BMI value is : "+bmi.toFixed(4) ;
}