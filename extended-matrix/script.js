let screenOne = document.querySelector("#screen1");
let screenTwo = document.querySelector("#screen2");

let centerBtn = document.getElementById("center-button");

const unChange = document.querySelectorAll(".topButton");

unChange.forEach((element) => {
    element.addEventListener("click", () =>{
        screenOne.style.display = "none";
        screenTwo.style.display = "unset";

        let buttonValue = element.innerText.trim();

        let arrValue = [];
        let centerButton = "";
        let boxId = "";

        switch (buttonValue){
            case "A":
                arrValue = ["A1", "A2", "A3", "A4"];
                centerButton = buttonValue;
                boxId = "btn-a";
                clickCenterBtn(boxId);
                break;

            case "B":
                arrValue = ["B1", "B2", "B3", "B4"];
                centerButton = buttonValue;
                boxId = "btn-b";
                clickCenterBtn(boxId);
                break;

            case "C":
                arrValue = ["C1", "C2", "C3", "c4"];
                centerButton = buttonValue;
                boxId = "btn-c";
                clickCenterBtn(boxId);
                break;

            case "D":
                arrValue = ["D1", "D2", "D3", "D4"];
                centerButton = buttonValue;
                boxId = "btn-d";
                clickCenterBtn(boxId);
                break;
        }   

        for (let i = 0; i < 4; i++) {
            document.getElementsByTagName("p")[i].innerHTML = arrValue[i];
        }
        document.getElementById("center-button").innerHTML = centerButton;
        
    });
});


const clickCenterBtn = (boxId) =>{
    const btn = document.getElementById('center-button');
    btn.addEventListener("click", ()=>{
        screenOne.style.display = "grid";
        screenTwo.style.display = "none";
        let value = boxId;
        
        unChange.forEach((item)=>{
            if(value ===item.id){
                document.getElementById(value).classList.add("active");
            }
            else{
                document.getElementById(item.id).classList.remove("active");
            }
        })

    })
}

