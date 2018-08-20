import React, { Component } from 'react';
import BannerHome from './BannerComponent/BannerHome'
import FeatureArea from './AllComponent/FeatureArea'
import ContatLeads from './AllComponent/ContatLeads'

class HomePage extends Component {
    render() {
        return (
            <div >
                <BannerHome />
                <FeatureArea />
                <ContatLeads />
            </div>
        )
    }
}
export default HomePage;