
import MainLayout from '../Layouts/MainLayout'

const Aboutus = () => {
  return (<>
    <MainLayout>
      <div className="row">
        <div className="col-8 mb-4" style={{ marginRight: '150px' , marginTop:'10%' }}>
          <div className="card" style={{ backgroundColor: '#F1EEDC', color: '#603F26', height: 'auto' }}>
            <div className="card-body text-center">
              <small style={{ fontSize: '1.2rem' }}>
              "كوليكتيد" هو متجر إلكتروني مخصص لتقديم أرقى تشكيلات الملابس والأزياء العصرية. نحن نقدم تجربة تسوق فريدة تجمع بين الجودة والأناقة، حيث يمكنك العثور على أحدث التصاميم والمنتجات التي تناسب ذوقك الشخصي. مع **كوليكتيد**، 
              نهدف إلى تزويدك بكل ما تحتاجه لتحديث خزانة ملابسك بأسلوب عصري وبلمسة من الفخامة. </small>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>

  </>);
}

export default Aboutus;