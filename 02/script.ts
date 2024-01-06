import { escreverArquivo } from '../01/script'

export type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

export type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco?: Endereco | null
}

const cadastrarUsuario = (usuario: Usuario): Usuario => {
    if (!usuario.endereco) {
        usuario.endereco = null;
    }

    escreverArquivo(usuario);
    return usuario
}

cadastrarUsuario({ nome: 'Lucas', email: 'lucas@gmail.com', cpf: '865948544-32', profissao: 'Full Stack Developer' })