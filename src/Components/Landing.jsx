import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';

const Landing = () => {
   return (
      <>
         <MainLayout>
            <div className="container">
               <div className="row mt-5">
                  <div className="col-md-4">
                     <div className="row">
                        <div className="col-12 mb-4">
                           <div className="card" style={{ backgroundColor: '#3C5B6F', color: '#FAF6E3', height: '105%', width: '200%' }}>
                              <div className="card-body text-center">
                                 <h1>أهلا بكم في كوليكتيد </h1>
                              </div>
                           </div>
                        </div>

                        <div className="col-12 mb-12 " style={{ marginRight: '150px' }}>
                           <div className="card" style={{ backgroundColor: '#F1EEDC', color: '#603F26', height: 'auto' }}>
                              <div className="card-body text-center">
                                 <small style={{ fontSize: '1.2rem' }}>
                                 "اكتشف أحدث صيحات الموضة مع **كوليكتيد** – تسوق الآن واستمتع بتجربة تسوق لا مثيل لها، حيث الجودة والأناقة تلتقيان!"
                                 </small>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-8">
                     <div className="row">
                        {/* كارد الفساتين */}
                        <div className="col-8 mb-4" style={{ marginRight: '300px' }}>
                           <Link to="/list" style={{ textDecoration: 'none' }}>
                              <div className="card" style={{ backgroundColor: '#F1EEDC', color: '#603F26', height: '90%', width: '70%' }}>
                                 <div className="card-body text-center">
                                    <h5 style={{ fontSize: '1.5rem' }}>فساتين</h5>
                                    <img
                                       src="https://img.icons8.com/?size=100&id=ZLkZ1a2scWZ7&format=png&color=973131"
                                       className="rounded-circle"
                                       height="90"
                                       alt="فساتين"
                                       loading="lazy"
                                    />
                                 </div>
                              </div>
                           </Link>
                        </div>

                        {/* كارد الجاكيتات */}
                        <div className="col-8 mb-4" style={{ marginRight: '300px' }}>
                           <Link to="/jacket" style={{ textDecoration: 'none' }}>
                              <div className="card" style={{ backgroundColor: '#F1EEDC', color: '#603F26', height: '90%', width: '70%' }}>
                                 <div className="card-body text-center">
                                    <h5 style={{ fontSize: '1.5rem' }}>جاكيتات</h5>
                                    <img
                                       src="https://img.icons8.com/?size=100&id=60889&format=png&color=973131"
                                       className="rounded"
                                       height="90"
                                       alt="جاكيتات"
                                       loading="lazy"
                                    />
                                 </div>
                              </div>
                           </Link>
                        </div>

                        {/* كارد القمصان */}
                        <div className="col-8 mb-4" style={{ marginRight: '300px' }}>
                        <Link to="/shirt" style={{ textDecoration: 'none' }}>
                           <div className="card" style={{ backgroundColor: '#F1EEDC', color: '#603F26', height: '90%', width: '70%' }}>
                              <div className="card-body text-center">
                                 <h5 style={{ fontSize: '1.5rem' }}>قمصان</h5>
                                 <img
                                    src="https://img.icons8.com/?size=100&id=3JAnbyjXaFKz&format=png&color=973131"
                                    height="90"
                                    alt="قمصان"
                                    loading="lazy"
                                 />
                              </div>
                           </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </MainLayout>
      </>
   );
};

export default Landing;
