let screenOne = document.querySelector("#screen1");
let screenTwo = document.querySelector("#screen2");

let cButton = document.querySelectorAll(".c-button");

let firstAxis = "";
let secondAxis = "";

cButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        let boxValue = btn.getAttribute("any");   //get desired clicked button value

        screenOne.style.display = "none";
        screenTwo.style.display = "block";

        document.querySelector("#screen2").classList.add("show");

        let lowerCaseBoxValue = boxValue.toLowerCase();

        /* ------- second screen axis ------- */
        firstAxis = "first-axis-".concat(lowerCaseBoxValue);
        secondAxis = "second-axis-".concat(lowerCaseBoxValue);

        let axisValue = ["", ""];
        /* -------  end of second screen axis ------ */

        let bankName = [];

        switch (boxValue) {
            case "A":
                bankName = ["●<span>横浜銀行</span><br>I:1.6％、L:90％", "●<span>三井トラスト銀行</span><br/>I:3.9％、L:100％", "●<span>静岡銀行</span><br/>I:3.3％、L:100％", ""];
                axisValue = ["LTV(低)", "金利(高)"];
                clickCenterBtn();
                break;

            case "B":
                bankName = ["", "", "", ""];
                axisValue = ["金利(高)", "LTV(高)"];
                clickCenterBtn();
                break;

            case "C":
                bankName = ["", "", "", ""];
                axisValue = ["LTV(低)", "金利(低)"];
                clickCenterBtn();
                break;

            case "D":
                bankName = ["", "", "", ""];
                axisValue = ["金利(低)", "LTV(高)"];
                clickCenterBtn();
                break;

            case "E":
                bankName = ["", "", "", ""];
                axisValue = ["期間(短)", "金利(高)"];
                clickCenterBtn();
                break;

            case "F":
                bankName = ["", "", "", ""];
                axisValue = ["金利(高)", "期間(長)"];
                clickCenterBtn();
                break;

            case "G":
                bankName = ["", "", "", ""];
                axisValue = ["期間(短)", "金利(低)"];
                clickCenterBtn();
                break;

            case "H":
                bankName = ["", "", "", ""];
                axisValue = ["金利(低)", "期間(長)"];
                clickCenterBtn();
                break;
        }

        /* ----show the bankName in the screen 2---- */
        for (let i = 0; i < bankName.length; i++) {
            document.getElementsByClassName("bankName")[i].innerHTML = bankName[i];
        }

        /* -------Screen 2 center button------ */
        document.getElementById("center-button").innerHTML = boxValue;

        /* -------- add two axis class ------- */
        document.querySelector("#first-axis").classList.add(firstAxis);
        document.querySelector("#second-axis").classList.add(secondAxis);


        for (let k = 0; k < axisValue.length; k++) {
            document.getElementsByClassName("screen2axis")[k].innerHTML = axisValue[k];
        }

    });
});

/* --------Screen-2 Center Button--------- */
const clickCenterBtn = () => {
    const btn = document.getElementById('center-button');
    btn.addEventListener("click", () => {
        screenOne.style.display = "grid";
        screenTwo.style.display = "none";

        /* --------- Screen 2 center button remove button ---------- */
        document.querySelector("#first-axis").classList.remove(firstAxis);
        document.querySelector("#second-axis").classList.remove(secondAxis);
    });
}