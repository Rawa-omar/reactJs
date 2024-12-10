import React from 'react';
import MainLayout from '../Layouts/MainLayout';

const ContactUs = () => {
  return (
    <MainLayout>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <div className="card" style={{ backgroundColor: '#3C5B6F', borderRadius: '15px' }}>
            <div className="card-body">
              <h2  style={{ color: '#FAF6E3' }}>اتصل بنا</h2>
              <p  style={{ color: '#FAF6E3' }}>
                نحن هنا للمساعدة! إذا كنت بحاجة إلى الدعم أو كان لديك أي استفسار، لا تتردد في التواصل معنا.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: '#F1EEDC' }}>
            <div className="card-body">
              <h4 className="card-title">معلومات الاتصال:</h4>
              <div className="row">
              <strong style={{marginRight:'-30%'}}>البريد الإلكتروني:</strong> <a href="mailto:info@collectedstore.com" style={{color: '#3C5B6F'}}>info@collectedstore.com</a>
              </div>
              <div className="row">
              <strong style={{marginRight:'-30%'}}>رقم الهاتف:</strong> <a href="tel:+1234567890" style={{color: '#3C5B6F'}}>+123 456 7890</a>
              </div>
              <div className="row">
              <strong style={{marginRight:'-30%'}}>العنوان:</strong> شارع الموضة، مدينة الأناقة، المملكة العربية السعودية
  

              </div>
              
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: '#F1EEDC', height:'auto' }}>
            <div className="card-body text-center">
              <h4 className="card-title">تابعنا على وسائل التواصل الاجتماعي:</h4>
              <ul className="list-unstyled" style={{ marginTop:'10%'}}>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://img.icons8.com/?size=100&id=118466&format=png&color=3c5b6f" 
                  className="img-fluid" 
                  style={{  height:'40%'}} 
                />
              </a></li>
                <li><a href="https://instagram.com/collectedstore" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://img.icons8.com/?size=100&id=32292&format=png&color=3c5b6f" 
                  className="img-fluid" 
                  style={{ height:'40%' }} 
                />
                </a></li>
                <li><a href="https://twitter.com/collectedstore" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=3c5b6f" 
                  
                  className="img-fluid" 
                  style={{ height:'40%' }} 
                /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: '#F1EEDC' }}>
            <div className="card-body">
              <h4 className="card-title">تواصل معنا مباشرة:</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">الاسم</label>
                  <input type="text" className="form-control" id="name" placeholder="أدخل اسمك" style={{backgroundColor:'#C8B28B8F'}} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                  <input type="email" className="form-control" id="email" placeholder="أدخل بريدك الإلكتروني" style={{backgroundColor:'#C8B28B8F'}} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">الرسالة</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="أدخل رسالتك" style={{backgroundColor:'#C8B28B8F'}}></textarea>
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: '#803D3B', color: '#FAF6E3' }}>إرسال</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>في <strong>كوليكتيد</strong>، نعتبر ملاحظات عملائنا قيمة جدًا. شاركنا رأيك أو اقتراحاتك لتحسين تجربتك معنا!</p>
      </div>
    </div>
    </MainLayout>
  );
};

export default ContactUs;
