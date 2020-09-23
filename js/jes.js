let Mark = {
    fullName: "Mark Wood",
    mass: 70,
    height: 168,
    bmi : function(){
        return Mark.mass / (Mark.height * Mark.height)
    }
}


let John = {
    fullName: "John Don",
    mass: 80,
    height: 178,
    bmi : function(){
        return John.mass / (John.height*John.height)
    }

}

if (Mark.bmi() > John.bmi()){
    document.querySelector("#result").textContent = Mark.fullName +' '+"has the highest" + Mark.bmi()
} else {
    document.querySelector("#result").textContent = John.fullName +' '+ "has the highest BMI" +" "+ John.bmi()
}
