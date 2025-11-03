function startRepAndEndPdf (text) {
if (text.slice(0,3) == 'rep') {


    if (text.slice(-4) == '.pdf') {
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}
    
}

startRepAndEndPdf('repodsfdsfdsfdsfddsfrt.pdf')





