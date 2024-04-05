let screenOne = document.querySelector("#screen1");
let screenTwo = document.querySelector("#screen2");

let cButton = document.querySelectorAll(".c-button");

cButton.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        let boxValue = btn.getAttribute("any");   //get desired clicked button value

        screenOne.style.display="none";
        screenTwo.style.display ="unset";

        let arrValue = [];
        let bankName = [];

        switch (boxValue) {
            case "A":
                bankName = ["●<span>横浜銀行</span><br>I:1.6％、L:90％", "●<span>三井トラスト銀行</span><br/>I:3.9％、L:100％", "●<span>静岡銀行</span><br/>I:3.3％、L:100％", ""];
                arrValue = ["A1", "A2", "A3", "A4"];
                clickCenterBtn();
                break;

            case "B":
                bankName = ["", "", "", ""];
                arrValue = ["B1", "B2", "B3", "B4"];
                clickCenterBtn();
                break;

            case "C":
                bankName = ["", "", "", ""];
                arrValue = ["C1", "C2", "C3", "c4"];
                clickCenterBtn();
                break;

            case "D":
                bankName = ["", "", "", ""];
                arrValue = ["D1", "D2", "D3", "D4"];
                clickCenterBtn();
                break;

            case "E":
                bankName = ["", "", "", ""];
                arrValue = ["E1", "E2", "E3", "E4"];
                clickCenterBtn();
                break;

            case "F":
                bankName = ["", "", "", ""];
                arrValue = ["F1", "F2", "F3", "F4"];
                clickCenterBtn();
                break;

            case "G":
                bankName = ["", "", "", ""];
                arrValue = ["G1", "G2", "G3", "G4"];
                clickCenterBtn();
                break;

            case "H":
                bankName = ["", "", "", ""];
                arrValue = ["H1", "H2", "H3", "H4"];
                clickCenterBtn();
                break;

        }

        /* ----show the bankName in the screen 2---- */
        for (let i = 0; i < bankName.length; i++) {
            document.getElementsByClassName("bankName")[i].innerHTML = bankName[i];
        }

        /* ----show eg:A1, A2, A3, A4 in the screen 2----- */
        for (let j = 0; j < arrValue.length; j++) {
            document.getElementsByClassName("change")[j].innerHTML = arrValue[j];
        }

        /* -------Screen 2 center button------ */
        document.getElementById("center-button").innerHTML = boxValue;
        

    });
});

/* --------Screen-2 Center Button--------- */
const clickCenterBtn = () => {
    const btn = document.getElementById('center-button');
    btn.addEventListener("click", () => {
        screenOne.style.display = "grid";
        screenTwo.style.display = "none";
    })
}
