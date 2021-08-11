const cpfSemFormatacao = '00156145308';
const cpfFormatado = cpfSemFormatacao.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

console.log(cpfFormatado);
