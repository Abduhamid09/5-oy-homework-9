function check() {
    let Equal = document.getElementById('res')
    let str = document.getElementById('str').value
    let open = 0
    let close = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++
        } else if (str[i] === ')') {
            close++
        } else {
            Equal.innerText = ('qavsni togri kirit');
        }
    }
    if (open === close) {
        Equal.innerText = 'ochuvchi va yopuvchi qavslar bir biriga teng'
    }else {
        Equal.innerText = 'ochuvchi va yopuvchi qavslar bir biriga teng emas'
        
}
}
