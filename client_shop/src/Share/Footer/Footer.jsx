import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-4">
                <div className="row py-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="text-uppercase mb-3">THÔNG TIN CHI TIẾT</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a className="footer-link" href="#">Giới thiệu </a></li>
                            <li><a className="footer-link" href="#">Thành viên</a></li>
                            <li><a className="footer-link" href="#">Tuyển dụng</a></li>
                            <li><a className="footer-link" href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                   
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="text-uppercase mb-3">Dịch vụ khách hàng</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a className="footer-link" href="#">Cửa hàng trực tuyến </a></li>
                            <li><a className="footer-link" href="#">Câu hỏi thường gặp</a></li>
                            <li><a className="footer-link" href="#">Điều khoản &amp; Điều kiện</a></li>
                            <li><a className="footer-link" href="#"></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="text-uppercase mb-3">QUY ĐỊNH - CHÍNH SÁCH</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a className="footer-link" href="#">Quy định sử dụng </a></li>
                            <li><a className="footer-link" href="#">Chính sách bảo mật</a></li>
                            <li><a className="footer-link" href="#">Chính sách vận chuyển</a></li>
                            <li><a className="footer-link" href="#">Chính sách kiểm thử &amp; đổi trả</a></li>
                        </ul>
                    </div>
                  
                </div>
                <div className="border-top pt-4" style={{ borderColor: '#1d1d1d !important' }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="small text-muted mb-0">&copy; 2023 BẢN QUYỀN THUỘC VỀ HDDK.</p>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <p className="small text-muted mb-0">CUNG CẤP BỞI <a className="text-white reset-anchor" href="#">HDDK</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;