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






// <section>
//     <div class="section-cards">
//       <div class="section-cards_container">
//         <div class="section-cards_first-card">
//           <div class="first-card_blacband"></div>
//           <div class="first-card_ccvcard">
//             <p class="ccvcard_ccv-card">
//               000
//             </p>
//           </div>
//         </div>
//         <div class="section-cards_Second-card">
//           <div class="Second-card_first-circule">
//             <div class="circule1"></div>
//             <div class="circule2"></div>
//           </div>
//           <div class="Second-card_Numbertarjet">
//             <p>0000  0000  0000  0000</p>
//           </div>
//           <div class="Second-card_NameTarjet">
//             <p> Jane Appleseed</p>
//           </div>
//           <div class="Second-card_DateTarjet">
//             <p>00/00</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="Section-Infoclientscards">
      
//       <div class="Section-Infoclientscards_name">
//         <h1>Cardholder Name</h1>
//         <input class="NameCardtext" type="text" placeholder="e.g. Jane Appleseed">
//         <p class="ErrorNameCardText">error</p>
//       </div>
//       <div class="Section-Infoclientscards_number">
//         <h1>Cardholder Name</h1>
//         <input class="NumberCardnum" type="number" placeholder="e.g. 1234 5678 9123 0000">
//         <p class="ErrorNumberCardText">error</p>
//       </div>
//       <div class="Section-Infoclientscards_dateandCVV">
//         <div class="infoDate">
//           <h1>Exp. Date (MM/YY)</h1>
//           <div class="DateCards">
//             <input class="Input1Cards" type="number" placeholder="MM">
//             <input class="Input2Cards" type="number" placeholder="YY">  
//           </div>
//           <p class="ErrordateCardText"> error</p>
//         </div>
//         <div class="DateCVV">
//           <h1>cvc</h1>
//           <input class="CVCCardtext" type="number" placeholder="e.g. 123">
//           <p class="ErrorCVVCardText"> error</p>
//         </div>
//       </div>
//       <button class="ConfirmButton">Confirm</button>
//     </div>
//   </section>  