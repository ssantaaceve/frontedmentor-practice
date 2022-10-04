//Lectura de inputs información cliente
const Nameclient = document.querySelector ('.NameCardtext');
const Numberclient = document.querySelector ('.NumberCardnum');
const DateMonthCliente = document.querySelector ('.Input1Cards');
const DateYearCliente = document.querySelector ('.Input2Cards');
const CVCcliente = document.querySelector ('.CVCCardtext');
const botoninput = document.querySelector ('.ConfirmButton');

//En este campo traemos los campos de la tarjeta HTML para cogerlos y relacionarlos con el nuevo texto que nos llege
const CamposNameTarjet = document.querySelector ('.Second-card_NameTarjet_Text');
const CamposNumberTarjet = document.querySelector ('.Second-card_Numbertarjet-text');
const CamposDateTarjet = document.querySelector ('.Second-card_DateTarjet-text');
const CamposCVVTarjet = document.querySelector ('.ccvcard_ccv-card');

// En este campo se establece la acción en el boton para llamar la función
const AccionInput = botoninput.addEventListener('click', DiligenciarCampos)

function DiligenciarCampos () {
    CamposNameTarjet.innerHTML = Nameclient.value;
    CamposNumberTarjet.innerHTML = Numberclient.value;
    CamposDateTarjet.innerHTML = DateMonthCliente.value + "/" + DateYearCliente.value;
    CamposCVVTarjet.innerHTML = CVCcliente.value

}
