import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
/* Base page for all */
import Base from './Components/DefaultLayout/Base';

import Home from './Components/Home/Home';
import PaymentGateway from './Components/Product/PaymentGateway';
import NEOBanking from './Components/Product/NEOBanking';
import Payouts from './Components/Product/Payouts';
import WhiteLabel from './Components/Product/WhiteLabel';
import PartnerProgram from './Components/Product/PartnerProgram';
import AboutUs from './Components/Company/AboutUs';
import NewsRoom from './Components/Company/NewsRoom';
import Pricing from './Components/Pricing/Pricing';
import CompanyPolicy from './Components/Company/CompanyPolicy';
import FAQ from './Components/Company/FAQ';
import Culture from './Components/Company/Culture';
import Slide from './Components/Other/Slide';

const RoutesWay = () => {
    return (
        <Base>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/payment-gateway' element={<PaymentGateway />} />
                <Route path='/neo-banking' element={<NEOBanking />} />
                <Route path='/payouts' element={<Payouts />} />
                <Route path='/white-label' element={<WhiteLabel />} />
                <Route path='/partner-program' element={<PartnerProgram />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/news-room' element={<NewsRoom />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/company-policy' element={<CompanyPolicy />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/culture' element={<Culture />} />
                <Route path='/demo' element={<Slide />} />
                <Route
                    path="*"
                    element={<Home to="/" replace />}
                />
            </Routes>
        </Base>
    )
}
export default RoutesWay;