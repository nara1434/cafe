// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const PaymentPage = () => {
//   let nav = useNavigate()
//   let payment =()=>{
//     alert('PayMent Completed Successfully ...!')
//     nav('/home')
//   }
//   return (
//     <>
//         <div className="container">
//             <div className="row my-5">
//                 <h2 className='text-center'>UPI PAYMENTS</h2>
//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12">
//                     <div className="mx-auto w-50">
//                     <div className="accordion" id="accordionExample">
//                     <div className="accordion-item">
//                         <h2 className="accordion-header">
//                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             <img src="/assets/images/PhonePay.png" alt="img" width={"120px"} height={"70px"} />
//                         </button>
//                         </h2>
//                         <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                         <div className="accordion-body">
//                             <input type="number" className="form-control" placeholder='Enter Phone Pay Number'/>
//                             <button type='button' className='btn btn-primary w-100 mt-2' onClick={payment}>Make Payment</button>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item">
//                         <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                             <img src="/assets/images/GPay.png"  className="ms-3" alt="img" width={"90px"} height={"70p"} />
//                         </button>
//                         </h2>
//                         <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                             <div className="accordion-body">
//                                 <input type="number" className="form-control" placeholder='Enter G Pay Number'/>
//                                 <button type='button' className='btn btn-primary w-100 mt-2' onClick={payment}>Make Payment</button>
//                             </div>
//                         </div>
//                     </div>
//                         {/* Paytm */}
//                         <div className="accordion-item">
//                             <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                 <img src="/assets/images/PayTym1.png" alt="img" width={"120px"} height={"70px"} />
//                                 </button>
//                             </h2>
//                             <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                 <div className="accordion-body">
//                                     <input type="text" className="form-control" placeholder='Enter PayTym Number' maxLength={10} inputMode="numeric" />
//                                     <button type='button' className='btn btn-primary w-100 mt-2'onClick={payment}>Make Payment</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* BHIM */}
//                         <div className="accordion-item">
//                             <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                                 <img src="/assets/images/BHIM.png" alt="img" className='ms-2' width={"120px"} height={"70px"} />
//                                 </button>
//                             </h2>
//                             <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                 <div className="accordion-body">
//                                     <input type="text" className="form-control" placeholder='Enter BHIM Number' maxLength={10} inputMode="numeric" />
//                                     <button type='button' className='btn btn-primary w-100 mt-2'onClick={payment}>Make Payment</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Amazon Pay */}
//                         <div className="accordion-item">
//                             <h2 className="accordion-header">
//                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                                 <img src="/assets/images/Amazon.png" alt="img" width={"120px"} height={"70px"} />
//                                 </button>
//                             </h2>
//                             <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                                 <div className="accordion-body">
//                                     <input type="text" className="form-control" placeholder='Enter Amazon Pay Number' maxLength={10} inputMode="numeric" />
//                                     <button type='button' className='btn btn-primary w-100 mt-2'onClick={payment}>Make Payment</button>
//                                 </div>
//                             </div>
//                         </div>
//                 </div>
//                     </div>
//                 </div>
//             </div>
//             {/* second Section */}
//             <div className="row my-5">
//                 <h3 className='text-center'><i className="fa-solid fa-credit-card me-2" style={{color:"#74C0FC"}}></i>CARD PAYMENTS</h3>
//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12">
//                   <div className="mx-auto w-50">
//                   <div className="accordion" id="accordionCardPayment">
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingCardDebit">
//                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCardDebit" aria-expanded="true" aria-controls="collapseCardDebit">
//                           <h5 className="mb-0">Debit Card</h5>
//                         </button>
//                       </h2>
//                       <div id="collapseCardDebit" className="accordion-collapse collapse show" data-bs-parent="#accordionCardPayment">
//                         <div className="accordion-body">
//                           <div className="mb-3">
//                             <label htmlFor="debitCardNumber" className="form-label">
//                               Card Number
//                             </label>
//                             <input type="text" className="form-control" id="debitCardNumber" placeholder="Enter your debit card number"/>
//                           </div>
//                           <div className="row">
//                             <div className="col-md-6 mb-3">
//                               <label htmlFor="debitExpiry" className="form-label">
//                                 Expiry Date
//                               </label>
//                               <input type="text" className="form-control" id="debitExpiry" placeholder="MM/YY"/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                               <label htmlFor="debitCVV" className="form-label">
//                                 CVV
//                               </label>
//                               <input type="password" className="form-control" id="debitCVV" placeholder="CVV"/>
//                             </div>
//                           </div>
//                           <div className="mb-3">
//                             <label htmlFor="debitName" className="form-label">
//                               Name on Card
//                             </label>
//                             <input type="text" className="form-control" id="debitName" placeholder="Cardholder's Name"/>
//                           </div>
//                           <button type="button" className="btn btn-primary w-100" onClick={payment}>
//                             Pay with Debit Card
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header" id="headingCardCredit">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCardCredit" aria-expanded="false" aria-controls="collapseCardCredit">
//                           <h5 className="mb-0">Credit Card</h5>
//                         </button>
//                       </h2>
//                       <div id="collapseCardCredit" className="accordion-collapse collapse" data-bs-parent="#accordionCardPayment">
//                         <div className="accordion-body">
//                           <div className="mb-3">
//                             <label htmlFor="creditCardNumber" className="form-label">
//                               Card Number
//                             </label>
//                             <input type="text" className="form-control" id="creditCardNumber" placeholder="Enter your credit card number"/>
//                           </div>
//                           <div className="row">
//                             <div className="col-md-6 mb-3">
//                               <label htmlFor="creditExpiry" className="form-label">
//                                 Expiry Date
//                               </label>
//                               <input type="text" className="form-control" id="creditExpiry" placeholder="MM/YY"/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                               <label htmlFor="creditCVV" className="form-label">
//                                 CVV
//                               </label>
//                               <input type="password" className="form-control" id="creditCVV" placeholder="CVV"/>
//                             </div>
//                           </div>
//                           <div className="mb-3">
//                             <label htmlFor="creditName" className="form-label">
//                               Name on Card
//                             </label>
//                             <input type="text" className="form-control" id="creditName" placeholder="Cardholder's Name"/>
//                           </div>
//                           <button type="button" className="btn btn-success w-100" onClick={payment}>
//                             Pay with Credit Card
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }
// export default PaymentPage


import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
  let nav = useNavigate()

  let payment = () => {
    // Clear cart items from localStorage
    localStorage.removeItem('cartItems')

    // Show alert
    alert('Payment Completed Successfully ...!')

    // Navigate to homepage
    nav('/home')
  }

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <h2 className='text-center'>UPI PAYMENTS</h2>
          <div className="col-12">
            <div className="mx-auto w-50">
              <div className="accordion" id="accordionExample">

                {/* PhonePe */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <img src="/assets/images/PhonePay.png" alt="img" width="120px" height="70px" />
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <input type="number" className="form-control" placeholder='Enter Phone Pe Number' />
                      <button type="button" className="btn btn-primary w-100 mt-2" onClick={payment}>Make Payment</button>
                    </div>
                  </div>
                </div>

                {/* GPay */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <img src="/assets/images/GPay.png" className="ms-3" alt="img" width="90px" height="70px" />
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <input type="number" className="form-control" placeholder='Enter GPay Number' />
                      <button type="button" className="btn btn-primary w-100 mt-2" onClick={payment}>Make Payment</button>
                    </div>
                  </div>
                </div>

                {/* Paytm */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <img src="/assets/images/PayTym1.png" alt="img" width="120px" height="70px" />
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <input type="text" className="form-control" placeholder='Enter Paytm Number' maxLength={10} inputMode="numeric" />
                      <button type="button" className="btn btn-primary w-100 mt-2" onClick={payment}>Make Payment</button>
                    </div>
                  </div>
                </div>

                {/* BHIM */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <img src="/assets/images/BHIM.png" alt="img" className="ms-2" width="120px" height="70px" />
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <input type="text" className="form-control" placeholder='Enter BHIM Number' maxLength={10} inputMode="numeric" />
                      <button type="button" className="btn btn-primary w-100 mt-2" onClick={payment}>Make Payment</button>
                    </div>
                  </div>
                </div>

                {/* Amazon Pay */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <img src="/assets/images/Amazon.png" alt="img" width="120px" height="70px" />
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <input type="text" className="form-control" placeholder='Enter Amazon Pay Number' maxLength={10} inputMode="numeric" />
                      <button type="button" className="btn btn-primary w-100 mt-2" onClick={payment}>Make Payment</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CARD PAYMENTS */}
        <div className="row my-5">
          <h3 className='text-center'>
            <i className="fa-solid fa-credit-card me-2" style={{ color: "#74C0FC" }}></i>
            CARD PAYMENTS
          </h3>
          <div className="col-12">
            <div className="mx-auto w-50">
              <div className="accordion" id="accordionCardPayment">

                {/* Debit Card */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCardDebit" aria-expanded="true" aria-controls="collapseCardDebit">
                      <h5 className="mb-0">Debit Card</h5>
                    </button>
                  </h2>
                  <div id="collapseCardDebit" className="accordion-collapse collapse show" data-bs-parent="#accordionCardPayment">
                    <div className="accordion-body">
                      <input type="text" className="form-control mb-3" placeholder="Enter your debit card number" />
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input type="password" className="form-control" placeholder="CVV" />
                        </div>
                      </div>
                      <input type="text" className="form-control mb-3" placeholder="Cardholder's Name" />
                      <button type="button" className="btn btn-primary w-100" onClick={payment}>
                        Pay with Debit Card
                      </button>
                    </div>
                  </div>
                </div>

                {/* Credit Card */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCardCredit" aria-expanded="false" aria-controls="collapseCardCredit">
                      <h5 className="mb-0">Credit Card</h5>
                    </button>
                  </h2>
                  <div id="collapseCardCredit" className="accordion-collapse collapse" data-bs-parent="#accordionCardPayment">
                    <div className="accordion-body">
                      <input type="text" className="form-control mb-3" placeholder="Enter your credit card number" />
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input type="password" className="form-control" placeholder="CVV" />
                        </div>
                      </div>
                      <input type="text" className="form-control mb-3" placeholder="Cardholder's Name" />
                      <button type="button" className="btn btn-success w-100" onClick={payment}>
                        Pay with Credit Card
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
