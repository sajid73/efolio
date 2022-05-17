import React from 'react';

const index = () => {
    return (
        <div class="banner-section text-center" style={{paddingTop: '8vh'}}>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <div class="row banner-text">
                            <div class="col-md-6 carousel-left">
                                <div class="p-5">
                                    <h1>We work for your career</h1>
                                    <p class="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas numquam at
                                        officiis
                                        nostrum
                                        nesciunt,
                                        error quas quaerat nulla velit consectetur sed vero sint laboriosam obcaecati aliquid illo ad soluta
                                        quod.
                                    </p>
                                    <button type="button" class="btn btn-primary">Read more</button>
                                    <button type="button" class="btn btn-light ms-2">Contact us</button>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center">
                                <img src={require("../../images/graph1.png")} alt="" width="50%" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row banner-text">
                            <div class="col-md-6 carousel-left">
                                <div class="p-5">
                                    <h1>Showcase Like Never Before</h1>
                                    <p class="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas numquam at
                                        officiis
                                        nostrum
                                        nesciunt,
                                        error quas quaerat nulla velit consectetur sed vero sint laboriosam obcaecati aliquid illo ad soluta
                                        quod.
                                    </p>
                                    <button type="button" class="btn btn-dark">Read more</button>
                                    <button type="button" class="btn btn-light ms-2">Contact us</button>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-center">
                                <img src={require("../../images/graph2.jpg")} alt="" width="50%" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="row banner-text">
                            <div class="col-md-6 carousel-left">
                                <div class="p-5">
                                    <h1>Operations</h1>
                                    <p class="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas numquam at
                                        officiis
                                        nostrum
                                        nesciunt,
                                        error quas quaerat nulla velit consectetur sed vero sint laboriosam obcaecati aliquid illo ad soluta
                                        quod.
                                    </p>
                                    <button type="button" class="btn btn-info">Read more</button>
                                    <button type="button" class="btn btn-light ms-2">Contact us</button>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">
                                <img src={require("../../images/graph3.jpg")} alt="" width="50%" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default index;