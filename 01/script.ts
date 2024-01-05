import fs from 'fs';

const leituraDeArquivo = (): void => {
    fs.readFile('./bd.json', (err, data) => {
        if (err) {
            return console.log(err);
        }
        return console.log(data.toString());
    })
}

const escritaDeArquivo = (texto: string): string => {
    let mensagem: string = "";

    fs.writeFile('./bd.json', texto, (err) => {
        if (err) {
            return console.log(err);
        }
    })
    return mensagem = "Alterado";
}

leituraDeArquivo();
console.log(escritaDeArquivo('teste'));