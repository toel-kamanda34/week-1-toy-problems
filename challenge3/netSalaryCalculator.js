function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const tax = grossSalary * 0.3;
    const nhif = grossSalary * 0.02;
    const nssf = grossSalary * 0.06;

    const netSalary = grossSalary -(tax + nhif + nssf);

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary);
console.log("Tax(PAYE):",result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:",result.netSalary);