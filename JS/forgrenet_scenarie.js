const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");


//Funktion, der finder ud af, havd der skal ske
const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "A) Du lader computeren stå (ulåst), mens du hurtigt henter din drink.": 
            console.log("Start was click");
            stages[0].classList.remove("active");  // por defecto .stage tiene display:none; asi que todo desapareceria en el stage[0].
            // Al referirse a "active", hace alucion al codigo en css dada a esta.   .stage.active {display: block;}.
            stages[1].classList.add("active");/* en el file css aparece .stage.active {display: block;}. Eso quiere decir que el stage[1]
            sera agregado, y se mostrara porque active en css tiene como display:block.No significa que se mostrara la misma section que ha sido removida*/
        break;
        case "B) Du klapper skærmen sammen, tager din taske over skulderen og tager det hele med op til baren.":
            stages[0].classList.remove("active");
            stages[2].classList.add("active");
        break;
        case "C) Du lukker computer skærmen og forlader den på bordert, mens du henter din drink.":
            stages[0].classList.remove("active");
            stages[3].classList.add("active");
        break;
        case "D) Du spørger sidemanden, om de vil holde øje med dine ting, mens du henter en drink.":
            stages[0].classList.remove("active");
            stages[4].classList.add("active");
        break;
        case "Try again":
            stages[1].classList.remove("active");
            stages[2].classList.remove("active");
            stages[3].classList.remove("active");
            stages[4].classList.remove("active");
            
            stages[0].classList.add("active");
        break;
        default: console.log("Don't know");
    }
}

for (const btn of btns) { // debe ir despues de  la funcion porque la esta llamando.
    // en caso de estar antes no pasara nada porque la funcion es creada despues.
    btn.addEventListener("click", nextStage);
}