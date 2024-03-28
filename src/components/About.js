const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/construction1.avif" alt="product" className="w-80, h-80" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    About C4 Construction
                            </div>
                                <div className="about-text">
                                Welcome to C4 Construction, your go-to destination for discovering and tracking under-construction projects. We're dedicated to providing you with comprehensive information about ongoing developments across various sectors. Stay informed, stay ahead with C4 Construction.
                            </div>
                                <div className="about-features">
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Explore a wide array of under-construction projects across various sectors.</p>
                                    <p className="about-feature" ><i className="fas fa-long-arrow-alt-right"></i> Stay informed with accurate and up-to-date information on project progress and milestones.</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Join a vibrant community of enthusiasts, investors, and professionals to share insights and experiences.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About