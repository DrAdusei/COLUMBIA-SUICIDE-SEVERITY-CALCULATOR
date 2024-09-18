function calculateRisk() {
    // Gather the responses
    let q1 = document.querySelector('input[name="q1"]:checked')?.value;
    let q2 = document.querySelector('input[name="q2"]:checked')?.value;
    let q3 = document.querySelector('input[name="q3"]:checked')?.value;
    let q4 = document.querySelector('input[name="q4"]:checked')?.value;
    let q5 = document.querySelector('input[name="q5"]:checked')?.value;

    // Determine risk level
    let riskLevel = "Low Risk";

    if (q1 === "yes" || q2 === "yes") {
        document.getElementById("q3-5").style.display = "block";

        if (q2 === "yes" && (q3 === "yes" || q4 === "yes" || q5 === "yes")) {
            riskLevel = "High Risk";
        } else if (q2 === "yes" && q3 === "no" && q4 === "no" && q5 === "no") {
            riskLevel = "Moderate Risk";
        }
    } else {
        document.getElementById("q3-5").style.display = "none";
    }

    // Display the result
    document.getElementById("result").innerText = "Risk Level: " + riskLevel;
}
