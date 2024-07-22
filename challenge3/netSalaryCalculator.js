    // Net Salary Calculator Functions
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE calculations based on monthly taxable pay
    function calculatePAYE(monthylyTaxavlePay) {
            let tax = 0;
            if (monthylyTaxavlePay <= 24000) {
                tax = monthylyTaxavlePay * 0.10;
            } else if (monthylyTaxavlePay <= 32333) {
                tax = 2400 + (monthylyTaxavlePay - 24000) * 0.25;
            
            }else if (monthylyTaxavlePay <= 500000) {
                tax = 4483.25 + (monthylyTaxavlePay - 32333) * 0.30;
            }else if (monthylyTaxavlePay <= 800000) {
                tax = 144483.25 + (monthylyTaxavlePay - 500000) * 0.325;
            }else {
                tax = 241483.25 + (monthylyTaxavlePay - 800000) * 0.35;
            }
            return tax;
    }
 
    const monthlyPAYE = calculatePAYE(grossSalary);

    //NHIF deductions
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700;
    }

    const  nhifDeduction = calculateNHIF(grossSalary);

    //NSSF contribution
    const pensionablePay = basicSalary;
    function calculateNSSF(pensionabePay) {
        const tier1Limit = 7000;
        const tier2Limit = 36000;
        const contributionRate = 0.06;

        if (pensionablePay <= tier1Limit) {
            return pensionablePay * contributionRate;
        } else if (pensionabePay <= tier2Limit) {
            return tier2Limit * contributionRate;
        } else {
            return tier2Limit * contributionRate;
        }
    }

    const nssfContribution = calculateNSSF(grossSalary);

    //Housing Levy
    const housingLevy = grossSalary * 0.015;

    //calculate net salary
    const totalDeductions = monthlyPAYE + nhifDeduction + nssfContribution + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        pensionablePay: pensionablePay,
        tax: monthlyPAYE,
        nhif: nhifDeduction,
        nssf :nssfContribution,
        housingLevy: housingLevy,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    }
}   
    
function calculateAndDisplaySalary() {
     // Get input values
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

     // Calculate net salary
    const result = calculateNetSalary(basicSalary, benefits);

     // Prepare HTML for displaying results
    const resultHtml = `
        <h3>Salary Results:</h3>
        <p>Gross Salary: ${result.grossSalary.toFixed(2)}</p>
        <p>Pensionable Pay: ${result.pensionablePay.toFixed(2)}</p>
        <p>Tax (PAYE): ${result.tax.toFixed(2)}</p>
        <p>NHIF Deduction: ${result.nhif.toFixed(2)}</p>
        <p>NSSF Contribution: ${result.nssf.toFixed(2)}</p>
        <p>Housing Levy: ${result.housingLevy.toFixed(2)}</p>
        <p>Total Deductions: ${result.totalDeductions.toFixed(2)}</p>
        <p>Net Salary: ${result.netSalary.toFixed(2)}</p>
    `;

     // Display results on the page
    document.getElementById('salary-results').innerHTML = resultHtml;
     // Log results to console
    console.log("Salary Calculation Results:", result);
}
