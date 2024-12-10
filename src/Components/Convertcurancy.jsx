import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";

const Convertcurancy = () => {
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    const [result, setresult] = useState(null);
    const [amount, setamount] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const currancy = [
        { 'id': 1, 'country_name': 'ألبانيا', 'Currency_code': 'ALL' },
        { 'id': 2, 'country_name': 'أفغانستان', 'Currency_code': 'AFN' },
        { 'id': 3, 'country_name': 'الأرجنتين', 'Currency_code': 'ARS' },
        { 'id': 4, 'country_name': 'أروبا', 'Currency_code': 'AWG' },
        { 'id': 5, 'country_name': 'أستراليا', 'Currency_code': 'AUD' },
        { 'id': 6, 'country_name': 'أذربيجان', 'Currency_code': 'AZN' },
        { 'id': 7, 'country_name': 'جزر البهاما', 'Currency_code': 'BSD' },
        { 'id': 8, 'country_name': 'باربادوس', 'Currency_code': 'BBD' },
        { 'id': 9, 'country_name': 'روسيا البيضاء', 'Currency_code': 'BYN' },
        { 'id': 10, 'country_name': 'بليز', 'Currency_code': 'BZD' },
        { 'id': 11, 'country_name': 'برمودا', 'Currency_code': 'BMD' },
        { 'id': 12, 'country_name': 'بوليفيا', 'Currency_code': 'BOB' },
        { 'id': 13, 'country_name': 'بلغاريا', 'Currency_code': 'BGN' },
        { 'id': 14, 'country_name': 'البرازيل', 'Currency_code': 'BRL' },
        { 'id': 15, 'country_name': 'كمبوديا', 'Currency_code': 'KHR' },
        { 'id': 16, 'country_name': 'كندا', 'Currency_code': 'CAD' },
        { 'id': 17, 'country_name': 'جزر كايمان', 'Currency_code': 'KYD' },
        { 'id': 18, 'country_name': 'تشيلي', 'Currency_code': 'CLP' },
        { 'id': 19, 'country_name': 'مصر', 'Currency_code': 'EGP' },
        { 'id': 20, 'country_name': 'آيسلندا', 'Currency_code': 'ISK' },
        { 'id': 21, 'country_name': 'الهند', 'Currency_code': 'INR' },
        { 'id': 22, 'country_name': 'إندونيسيا', 'Currency_code': 'IDR' },
        { 'id': 23, 'country_name': 'اليابان', 'Currency_code': 'JPY' },
        { 'id': 24, 'country_name': 'كوريا الجنوبية', 'Currency_code': 'KRW' },
        { 'id': 25, 'country_name': 'كوريا الشمالية', 'Currency_code': 'KPW' },
        { 'id': 26, 'country_name': 'لبنان', 'Currency_code': 'LBP' },
        { 'id': 27, 'country_name': 'ماليزيا', 'Currency_code': 'MYR' },
        { 'id': 28, 'country_name': 'عمان', 'Currency_code': 'OMR' },
        { 'id': 29, 'country_name': 'باكستان', 'Currency_code': 'PKR' },
        { 'id': 30, 'country_name': 'قطر', 'Currency_code': 'QAR' },
        { 'id': 31, 'country_name': 'روسيا', 'Currency_code': 'RUB' },
        { 'id': 32, 'country_name': 'السعودية', 'Currency_code': 'SAR' },
        { 'id': 33, 'country_name': 'السويد', 'Currency_code': 'SEK' },
        { 'id': 34, 'country_name': 'سويسرا', 'Currency_code': 'CHF' },
        { 'id': 35, 'country_name': 'سورينام', 'Currency_code': 'SRD' },
        { 'id': 36, 'country_name': 'سوريا', 'Currency_code': 'SYP' },
        { 'id': 37, 'country_name': 'تركيا', 'Currency_code': 'TRY' },
        { 'id': 38, 'country_name': 'الولايات المتحدة الأمريكية', 'Currency_code': 'USD' },
        { 'id': 39, 'country_name': 'أوروغواي', 'Currency_code': 'UYU' },
        { 'id': 40, 'country_name': 'أوزبكستان', 'Currency_code': 'UZS' },
        { 'id': 41, 'country_name': 'اليمن', 'Currency_code': 'YER' },
        { 'id': 42, 'country_name': 'زمبابوي', 'Currency_code': 'ZWD' }
    ];

    const convert = () => {
        if (!from || !to || !amount) {
            setError("يرجى ملء جميع الحقول!");
            return;
        }

        setLoading(true);
        setError('');
        const myHeaders = new Headers();
        myHeaders.append("apikey", "Qavfv9VlfKEFAIyHmnhdSq9VHgVj16MR");

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);  // For debugging purposes
                if (data.error) {
                    setError(data.error.message);
                } else {
                    setresult(data);
                }
            })
            .catch((err) => setError("حدث خطأ أثناء التحويل"))
            .finally(() => setLoading(false));
    };

    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card mt-5">
                            <div className="card-body" style={{ backgroundColor:'#A6885038'}}>
                                <h4>خدمة تحويل العملات</h4>
                                <div className="row mt-5 d-flex justify-content-center">
                                    <div className="col-sm-4 ">
                                        <select className="form-select" onChange={(e) => setfrom(e.target.value)} style={{backgroundColor:'#C8B28B8F'}}>
                                            <option value="">اختر العملة من</option>
                                            {currancy.map((e) => (
                                                <option key={e.id} value={e.Currency_code}>
                                                    {e.country_name} ({e.Currency_code})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-sm-4">
                                        <select className="form-select" onChange={(e) => setto(e.target.value)} style={{backgroundColor:'#C8B28B8F'}}>
                                            <option value="">اختر العملة إلى</option>
                                            {currancy.map((e) => (
                                                <option key={e.id} value={e.Currency_code}>
                                                    {e.country_name} ({e.Currency_code})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-5 d-flex justify-content-center">
                                    <div className="col-sm-6">
                                        <label className="form-label" >المبلغ</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            onChange={(e) => setamount(e.target.value)}
                                            value={amount}
                                            style={{backgroundColor:'#C8B28B8F'}}
                                        />
                                    </div>
                                </div>

                                {/* Displaying the result inside a card (always visible) */}
                                <div className="row mt-5">
                                    <div className="col d-flex justify-content-center">
                                        <div className="card mt-3" style={{backgroundColor:'#C8B28B8F'}}>
                                            <div className="card-body">
                                                {result && result.query && result.query.to && !error ? (
                                                    <>
                                                        <h5 className="alert  text-dark">
                                                            النتيجة: {result.result} {result.query.to}
                                                        </h5>
                                                        <h5 className="alert  text-dark">
                                                            من: {result.query.from} إلى: {result.query.to}
                                                        </h5>
                                                    </>
                                                ) : (
                                                    <h5 className="alert ">لم يتم تحويل المبلغ بعد.</h5>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col text-center">
                                        <button className="btn" onClick={convert} disabled={loading} style={{ backgroundColor: '#803D3B', color: '#D7D3BF' }}>
                                            {loading ? "جارٍ التحويل..." : "تحويل"}
                                        </button>
                                    </div>
                                </div>

                                {error && (
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <div className="alert alert-danger">{error}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Convertcurancy;
