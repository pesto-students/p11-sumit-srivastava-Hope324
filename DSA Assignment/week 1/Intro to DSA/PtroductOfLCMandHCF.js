
function calculateHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function calculateLCM(a, b) {
    const hcf = calculateHCF(a, b);
    if (hcf === 0) return 0;
    return (a * b) / hcf;
}
function runTestCases(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        const [a, b] = testCases[i];
        const hcf = calculateHCF(a, b);
        const lcm = calculateLCM(a, b);
        const product = hcf * lcm;
        
        console.log("Product of HCF and LCM:", product);
      
    }
}

const testCases = [
    [6, 8],
    [15, 25],
];
runTestCases(testCases);
