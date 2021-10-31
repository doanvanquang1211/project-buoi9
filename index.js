
// bai12
function space(str) {
    return str.split(' ').join('')


}
console.log(space('hello  world  '));

// bai13
function reverse(s1) {
    let result = ''

    for (i = s1.length - 1; i >= 0; i--) {
        result += s1[i]
    }
    return result
}
console.log(reverse('This is a beatiful day'));


// Bai17
function smallest(num1, num2, num3) {
    return Math.max(num1, num2, num3);

}
console.log(smallest(1, 4, 7));
// // bai15
function bai15(chuoi) {

    let str = ""
    for (i = 0; i < chuoi.length; i++) {
        if (i == 0 || chuoi[i - 1] == " ") {

            str += chuoi[i].toUpperCase()
        } else {
            str += chuoi[i].toLowerCase()
        }
    }
    return str;
}
console.log(bai15('dOAn vAn quAnG'));
// bai14
function location(sub1, sub2) {
    for (i = 0; i < sub1.length; i++) {
        if (sub1.substr(i, sub2.length) == sub2) {
            return i
        }

    }

}
console.log(location('this is a', 'is'));

// bai16

function bai16(str) {
    let str1 = str.split('/')

    return str1[str1.length - 1]
}
console.log(bai16('https://www.facebook.com/ngothucdat'));

function bai11(item) {

    let dem = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] == " ") {
            dem++;
        }
    } return dem
}

console.log(bai11("      hello worldn"));
