import React from 'react';

const index = () => {
    return (
        <div class="container mt-4">
            <h1 class="text-center">Benefits</h1>
            <div class="d-flex justify-content-around flex-wrap">
                <div class="service">
                    <img src={require("../../images/icons/online_presence.png")} alt="service-1" width="100px" />
                    <h5>Online Presence</h5>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div class="service">
                    <img src={require("../../images/icons/online_presence.png")} alt="service-1" width="100px" />
                    <h5>Highlight best work</h5>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div class="service">
                    <img src={require("../../images/icons/online_presence.png")} alt="service-1" width="100px" />
                    <h5>Reflects your personality & creativity</h5>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div class="service">
                    <img src={require("../../images/icons/online_presence.png")} alt="service-1" width="100px" />
                    <h5>Create Your Brand</h5>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div class="service">
                    <img src={require("../../images/icons/online_presence.png")} alt="service-1" width="100px" />
                    <h5>Consistency and Professionalism</h5>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default index;