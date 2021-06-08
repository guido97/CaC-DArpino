for (let i = 11; i >8 ; i--) { //tabla de multiplicar (del 11 al 9)
    document.writeln(`<b>La tabla del ${i}:</b>`)
    document.write("<br>")
    for (let j = 1; j < 10; j++) {
        document.writeln(`${i} x ${j}: ${i*j}`)
        document.write("<br>")
    }
    document.write("<br>")
}    