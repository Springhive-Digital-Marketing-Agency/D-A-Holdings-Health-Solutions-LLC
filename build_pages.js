const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\IT\\Documents\\Anti Gravity\\D & A Holdings Health Solutions LLC";
const servicesFile = path.join(baseDir, "services.html");

const content = fs.readFileSync(servicesFile, 'utf-8');

const headerMatch = content.match(/(.*?<!-- Main Content -->\s*<main id="mainContent">\s*)/s);
const header = headerMatch[1];

const footerMatch = content.match(/(\s*<\/main>\s*<!-- Footer -->.*)/s);
const footer = footerMatch[1];

function createPage(filename, title, bannerTitle, bannerDesc, heroImg, pageContent) {
    let pageHeader = header.replace(/<title>.*?<\/title>/s, `<title>${title} | D & A Holdings Health Solutions LLC</title>`);
    
    const heroSection = `    <!-- Panoramic Banner Hero with Semi-Transparent Blue Overlay -->
    <section class="banner-hero-section">
        <img src="images/${heroImg}" alt="${title}" class="banner-hero-img">
        <div class="banner-sub-bar">
            <div class="container">
                <div class="breadcrumbs">
                    <a href="index2.html">Home</a>
                    <span class="sep">/</span>
                    <a href="services.html">Services</a>
                    <span class="sep">/</span>
                    <span>${bannerTitle}</span>
                </div>
                <h1 class="banner-sub-title">${bannerTitle}</h1>
                <p>
                    ${bannerDesc}
                </p>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main id="mainContent">
`;

    pageHeader = pageHeader.replace(/<!-- Panoramic Banner Hero.*?<main id="mainContent">\s*/s, heroSection);

    const commitmentSection = `
        <!-- Our Commitment to You Banner -->
        <section class="section-padding bg-ivory">
            <div class="container">
                <div style="background: linear-gradient(135deg, var(--clr-navy-dark) 0%, var(--clr-navy) 100%); border-radius: 20px; padding: 4rem 3rem; color: #ffffff; text-align: center;">
                    <span style="color: var(--clr-gold); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">OUR COMMITMENT TO YOU</span>
                    <h2 style="font-family: var(--font-heading); font-size: clamp(1.8rem, 3.2vw, 2.6rem); margin: 1rem 0 1.5rem; color: #ffffff;">
                        Compassionate Care. Individualized Support. A Healthier Tomorrow.
                    </h2>
                    <p style="max-width: 800px; margin: 0 auto 2.2rem; font-size: 1.1rem; line-height: 1.75; color: rgba(255, 255, 255, 0.9);">
                        At D &amp; A Health Solutions LLC, we are committed to providing professional, compassionate, respectful, and individualized care. We strive to create a safe environment where clients can openly discuss their concerns and actively participate in their treatment.
                    </p>
                    <a href="contact.html#appointment-form" class="btn btn-gold">Request an Appointment Today</a>
                </div>
            </div>
        </section>
`;

    const fullHtml = pageHeader + pageContent + commitmentSection + footer;
    fs.writeFileSync(path.join(baseDir, filename), fullHtml, 'utf-8');
    console.log("Created " + filename);
}

const contentEvaluations = `
        <section class="section-padding bg-white" id="evaluations">
            <div class="container">
                <div class="featured-care-grid" style="align-items: center;">
                    <div class="featured-care-text reveal">
                        <span class="section-eyebrow text-gold">DIAGNOSTIC ASSESSMENT</span>
                        <h2 class="section-heading">Comprehensive Psychiatric Evaluations</h2>
                        <p class="featured-lead-desc">
                            We provide comprehensive psychiatric evaluations for children, adolescents, and adults to better understand each client's mental health concerns, symptoms, history, current functioning, and treatment needs.
                        </p>
                        <p class="secondary-text" style="margin-bottom: 1.2rem;">
                            An evaluation may include a review of current symptoms, psychiatric and medical history, family history, current and past medications, developmental and social history, school or occupational functioning, sleep, appetite, and other contributing factors.
                        </p>
                        <p class="secondary-text">
                            Information gathered during the evaluation helps guide diagnostic impressions and the development of an individualized treatment plan tailored to your personal wellness goals.
                        </p>
                        <div style="margin-top: 1.8rem;">
                            <a href="new-patients.html" class="btn btn-outline-navy">See What Providers Review During Evaluation</a>
                        </div>
                    </div>
                    <div class="featured-care-visual reveal delay-1">
                        <div class="care-visual-backdrop"></div>
                        <div class="care-image-frame">
                            <img src="images/service_mental.jpg" alt="Psychiatric Evaluation at D&amp;A Holdings" class="care-main-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

const contentMedication = `
        <section class="section-padding bg-white" id="medication-management">
            <div class="container">
                <div class="featured-care-grid" style="align-items: center;">
                    <div class="featured-care-visual reveal">
                        <div class="care-visual-backdrop" style="left: 20px; right: -20px;"></div>
                        <div class="care-image-frame">
                            <img src="images/service_substance.jpg" alt="Psychiatric Medication Management" class="care-main-img">
                        </div>
                    </div>
                    <div class="featured-care-text reveal delay-1">
                        <span class="section-eyebrow text-sage">CLINICAL TREATMENT</span>
                        <h2 class="section-heading">Psychiatric Medication Management</h2>
                        <p class="featured-lead-desc">
                            When clinically appropriate, our qualified providers offer psychiatric medication management with careful, ongoing monitoring and routine follow-up.
                        </p>
                        <p class="secondary-text" style="margin-bottom: 1rem;">
                            Our goal is to use medication thoughtfully as part of an individualized and comprehensive approach to mental healthcare. Medication-management visits may include:
                        </p>
                        <div class="family-checklist" style="margin-bottom: 1.5rem;">
                            <div class="check-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Reviewing current symptoms and changes since the previous visit</span>
                            </div>
                            <div class="check-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Assessing effectiveness of prescribed medications and potential side effects</span>
                            </div>
                            <div class="check-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Providing medication education, discussing benefits, risks, and options</span>
                            </div>
                            <div class="check-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Making medication adjustments when clinically indicated</span>
                            </div>
                        </div>
                        <p style="font-size: 0.88rem; color: var(--clr-text-light); font-style: italic;">
                            * Clients should take medications only as prescribed and discuss concerns with their provider before making changes to their regimen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
`;

const contentAssessments = `
        <section class="section-padding bg-white" id="assessments">
            <div class="container">
                <div class="featured-care-grid" style="align-items: center;">
                    <div class="featured-care-text reveal">
                        <span class="section-eyebrow text-gold">IDENTIFICATION</span>
                        <h2 class="section-heading">Mental Health Assessments</h2>
                        <p class="featured-lead-desc">
                            Mental health assessments help identify emotional, behavioral, and psychiatric concerns that may be affecting an individual's relationships, work, school, family life, or daily functioning.
                        </p>
                        <p class="secondary-text" style="margin-bottom: 1.2rem;">
                            Based on assessment findings, our clinical team provides appropriate diagnostic impressions, treatment recommendations, and referrals to promote wellness and stability.
                        </p>
                        <div style="margin-top: 1.8rem;">
                            <a href="conditions.html" class="btn btn-outline-navy">Explore Conditions We Assess</a>
                        </div>
                    </div>
                    <div class="featured-care-visual reveal delay-1">
                        <div class="care-visual-backdrop"></div>
                        <div class="care-image-frame">
                            <img src="images/conditions_center.jpg" alt="Mental Health Assessments" class="care-main-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

const contentPlanning = `
        <section class="section-padding bg-white" id="treatment-planning">
            <div class="container">
                <div class="featured-care-grid" style="align-items: center;">
                    <div class="featured-care-visual reveal">
                        <div class="care-visual-backdrop" style="left: 20px; right: -20px;"></div>
                        <div class="care-image-frame">
                            <img src="images/about_doctor_premium.jpg" alt="Individualized Treatment Planning" class="care-main-img">
                        </div>
                    </div>
                    <div class="featured-care-text reveal delay-1">
                        <span class="section-eyebrow text-sage">COLLABORATIVE DESIGN</span>
                        <h2 class="section-heading">Individualized Treatment Planning</h2>
                        <p class="featured-lead-desc">
                            Every client has different needs, strengths, and goals. We develop individualized treatment plans designed around each person's presenting concerns, strengths, personal circumstances, preferences, and clinical needs.
                        </p>
                        <p class="secondary-text" style="margin-bottom: 1.2rem;">
                            Treatment plans are dynamic—we review and modify treatment plans as needed based on progress, developmental milestones, and response to treatment.
                        </p>
                        <div style="margin-top: 1.8rem;">
                            <a href="about.html" class="btn btn-outline-navy">Our Approach to Planning</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

const contentEducation = `
        <section class="section-padding bg-white" id="education">
            <div class="container">
                <div class="featured-care-grid" style="align-items: center;">
                    <div class="featured-care-text reveal">
                        <span class="section-eyebrow text-gold">EMPOWERMENT</span>
                        <h2 class="section-heading">Patient Education & Support</h2>
                        <p class="featured-lead-desc">
                            We believe informed clients and families are better equipped to participate meaningfully in their care. Education is integrated into every stage of treatment.
                        </p>
                        <p class="secondary-text" style="margin-bottom: 1.2rem;">
                            Education may include information about diagnoses, symptoms, medications, treatment options, coping strategies, healthy routines, stress management, and relapse prevention.
                        </p>
                        <div style="margin-top: 1.8rem;">
                            <a href="contact.html" class="btn btn-outline-navy">Contact Us for Support</a>
                        </div>
                    </div>
                    <div class="featured-care-visual reveal delay-1">
                        <div class="care-visual-backdrop"></div>
                        <div class="care-image-frame">
                            <img src="images/legacy_tree.jpg" alt="Patient Education and Support" class="care-main-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

createPage("psychiatric-evaluations.html", "Psychiatric Evaluations", "Psychiatric Evaluations", "Comprehensive evaluations to understand mental health concerns, history, functioning, and treatment needs.", "service_mental.jpg", contentEvaluations);
createPage("medication-management.html", "Medication Management", "Medication Management", "Thoughtful psychiatric prescribing, monitoring effectiveness, education, and ongoing follow-up care.", "service_substance.jpg", contentMedication);
createPage("mental-health-assessments.html", "Mental Health Assessments", "Mental Health Assessments", "Identifying emotional, behavioral, and psychiatric concerns affecting relationships, work, and daily life.", "conditions_center.jpg", contentAssessments);
createPage("treatment-planning.html", "Treatment Planning", "Treatment Planning", "Custom plans structured around presenting concerns, strengths, and goals, modified as you progress.", "about_doctor_premium.jpg", contentPlanning);
createPage("education-support.html", "Education & Support", "Patient Education & Support", "Empowering clients and families with insights into diagnoses, coping strategies, and wellness routines.", "legacy_tree.jpg", contentEducation);

const servicesGrid = `        <section class="services-section section-padding bg-white" id="services-overview">
            <div class="container">
                <div class="services-grid">
                    <!-- Service 1 -->
                    <div class="service-block reveal">
                        <div class="service-img-wrap">
                            <img src="images/service_mental.jpg" alt="Comprehensive Psychiatric Evaluations" class="service-img">
                            <span class="service-tag">01 • Diagnostic Care</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">PSYCHIATRIC EVALUATIONS</h3>
                            <p class="service-desc">Comprehensive evaluations to understand mental health concerns, history, functioning, and treatment needs.</p>
                            <a href="psychiatric-evaluations.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Service 2 -->
                    <div class="service-block reveal delay-1">
                        <div class="service-img-wrap">
                            <img src="images/service_substance.jpg" alt="Medication Management" class="service-img">
                            <span class="service-tag">02 • Treatment</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">MEDICATION MANAGEMENT</h3>
                            <p class="service-desc">Thoughtful psychiatric prescribing, monitoring effectiveness, education, and ongoing follow-up care.</p>
                            <a href="medication-management.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Service 3 -->
                    <div class="service-block reveal delay-2">
                        <div class="service-img-wrap">
                            <img src="images/conditions_center.jpg" alt="Mental Health Assessments" class="service-img">
                            <span class="service-tag">03 • Assessment</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">MENTAL HEALTH ASSESSMENTS</h3>
                            <p class="service-desc">Identifying emotional, behavioral, and psychiatric concerns affecting relationships, work, and daily life.</p>
                            <a href="mental-health-assessments.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Service 4 -->
                    <div class="service-block reveal">
                        <div class="service-img-wrap">
                            <img src="images/about_doctor_premium.jpg" alt="Individualized Treatment Planning" class="service-img">
                            <span class="service-tag">04 • Personalized Plans</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">TREATMENT PLANNING</h3>
                            <p class="service-desc">Custom plans structured around presenting concerns, strengths, and goals, modified as you progress.</p>
                            <a href="treatment-planning.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Service 5 -->
                    <div class="service-block reveal delay-1">
                        <div class="service-img-wrap">
                            <img src="images/legacy_tree.jpg" alt="Patient Education and Support" class="service-img">
                            <span class="service-tag">05 • Education</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">EDUCATION &amp; SUPPORT</h3>
                            <p class="service-desc">Empowering clients and families with insights into diagnoses, coping strategies, and wellness routines.</p>
                            <a href="education-support.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Service 6 -->
                    <div class="service-block reveal delay-2">
                        <div class="service-img-wrap">
                            <img src="images/condition_anxiety.jpg" alt="Telehealth Virtual Care" class="service-img">
                            <span class="service-tag">06 • Virtual Care</span>
                        </div>
                        <div class="service-body">
                            <h3 class="service-title">TELEHEALTH SERVICES</h3>
                            <p class="service-desc">Convenient, secure virtual psychiatric evaluations and follow-ups from the comfort and privacy of home.</p>
                            <a href="telehealth.html" class="service-cta">
                                <span>Learn More</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;
const commitmentSection = `
        <!-- Our Commitment to You Banner -->
        <section class="section-padding bg-ivory">
            <div class="container">
                <div style="background: linear-gradient(135deg, var(--clr-navy-dark) 0%, var(--clr-navy) 100%); border-radius: 20px; padding: 4rem 3rem; color: #ffffff; text-align: center;">
                    <span style="color: var(--clr-gold); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">OUR COMMITMENT TO YOU</span>
                    <h2 style="font-family: var(--font-heading); font-size: clamp(1.8rem, 3.2vw, 2.6rem); margin: 1rem 0 1.5rem; color: #ffffff;">
                        Compassionate Care. Individualized Support. A Healthier Tomorrow.
                    </h2>
                    <p style="max-width: 800px; margin: 0 auto 2.2rem; font-size: 1.1rem; line-height: 1.75; color: rgba(255, 255, 255, 0.9);">
                        At D &amp; A Health Solutions LLC, we are committed to providing professional, compassionate, respectful, and individualized care. We strive to create a safe environment where clients can openly discuss their concerns and actively participate in their treatment.
                    </p>
                    <a href="contact.html#appointment-form" class="btn btn-gold">Request an Appointment Today</a>
                </div>
            </div>
        </section>
`;
const servicesHtml = header + servicesGrid + commitmentSection + footer;
fs.writeFileSync(path.join(baseDir, "services.html"), servicesHtml, 'utf-8');
console.log("Updated services.html");
