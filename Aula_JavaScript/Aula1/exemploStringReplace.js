const cpfSemFormatacao = '00156145308';
const cpfFormatado = cpfSemFormatacao.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
    console.log(arguments);
    return`${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
});

console.log(cpfFormatado);