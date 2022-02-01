const fs = require("fs");
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {
    const tipo = path.extname(caminho)
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on("finish", () => callBackImagemCriada(novoCaminho));
};
