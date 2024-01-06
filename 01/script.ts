import fs from 'fs';
import { Usuario } from '../02/script';

const lerArquivo = (): string => {
    const arquivoBuffer = fs.readFileSync('./bd.json')
    return arquivoBuffer.toString();
}

export const escreverArquivo = (usuario: Usuario) => {
    const arquivoString = lerArquivo();
    const arquivoParse: Usuario[] = JSON.parse(arquivoString);
    arquivoParse.push(usuario)

    fs.writeFileSync('./bd.json', JSON.stringify(arquivoParse))
}

lerArquivo();
//escreverArquivo({nome: 'Diogo', email: 'diogo@gmail.com', cpf: '414928320-21'});