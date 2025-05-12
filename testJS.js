// Kiểm tra số nguyên tố Mersenne
function kiemTraSoNguyenToMersenne(n) {
    if (!kiemtrasonguyento(n)) {
        console.log(n + " không phải là số nguyên tố.");
        return false; // không phải số nguyên tố
        
    }
    let so = Math.pow(2, n) - 1;
    if (so < 2) {
        console.log(so + " không phải là số nguyên tố Mersenne.");
        return false; // không phải số nguyên tố Mersenne
    }
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            console.log(n + " không phải là số nguyên tố Mersenne.");
            return false; // không phải số nguyên tố Mersenne
        }
    }
    console.log(so + " là số nguyên tố Mersenne.");
    return true; // số nguyên tố Mersenne
}

//Kiểm tra có phải là số nguyên tố hay không
function kiemtrasonguyento(n) {
    if (n < 2) {        
        console.log("khong phai so nguyen to");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) {
            console.log("khong phai so nguyen to");
            return false; 
        }
    }
    return true; 
}

kiemTraSoNguyenToMersenne(-31);