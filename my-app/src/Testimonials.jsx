import './css/Testimonials.css';

const Testimonials = () => {
    const testimonialsData = {
        "Medical Interviews": [
            {
                name: "Linus",
                achievement: "Bachelor of Clinical Science (Medicine) / Doctor of Medicine (WSU)",
                text: "My offer to Western Sydney's undergraduate medicine could not have been achieved without Eric's support. His commitment to ensuring my interview went as smoothly as it did was clear through the countless mock interviews he conducted which mirrored the real MMI. Additionally, the constant bombardment of detailed feedback guaranteed my continuous improvement. Furthermore, his extensive experience with medical interviews provided deep insight and tips into the process which I would've missed otherwise. His guidance strengthened my interview, but most importantly gave me the confidence to approach the MMI with a strategy."
            },
            {
                name: "M.",
                achievement: "Bachelor of Clinical Science (Medicine) / Doctor of Medicine (CSU)",
                text: "Highly accurate interview preparation where the format was almost exactly the same as my actual medical interview, so I felt really familiar and confident going in. The sessions focused on high-yield content, especially common blunders prospective medical students make, which was incredibly helpful. I also received clear, practical feedback that really helped me refine how I structured my answers and communicated my ideas."
            },
            {
                name: "Kico",
                achievement: "Bachelor of Medical Science / Doctor of Medicine (UON)",
                text: "Eric was an important part of my offer into med. He consistently offered support, encouragement and valuable insight into the entire process. If I had to prepare for medical interviews again I would 100% go to him!!"
            },
            {
                name: "Zach",
                achievement: "Master of Clinical Optometry (UNSW)",
                text: "Eric's teaching method and materials were well structured and easy to follow. His wide range of knowledge and experience was clearly evident."
            }
        ], 
         "General Tutoring": [
            {
                name: "James",
                achievement: "Bachelor of Dental Science Honours (UQ)",
                text: "Eric's tutoring in physiology, anatomy, and chemistry was invaluable throughout my studies. His review sessions and practice questions were highly accurate and closely reflected the style and difficulty of actual assessments, while his detailed feedback ensured I understood exactly how to improve. This approach not only strengthened my knowledge but also boosted my confidence going into exams."
            },
            {
                name: "Angeline",
                achievement: "Bachelor of Dental Science Honours (UQ)",
                text: "Eric was a huge help while I was studying anatomy and physiology. He was great at breaking down complex concepts, talking things through, and making the content feel more manageable. His tutoring influenced my confidence in approaching the content and assessments."
            },
            {
                name: "A.",
                achievement: "94 in Maths Extension 2, 96 in Maths Extension 1",
                text: "Thank you so much for your help over this year, it has really helped me a lot."
            },
        ]
    };

    return (
        <div className="testimonials-section">
            <div className="testimonials-container">
                <h1 className="testimonials-title">Student Testimonials</h1>
                <p className="testimonials-subtitle">Hear what our students have to say about their learning experience.</p>

                {Object.entries(testimonialsData).map((category, idx) => (
                    <div key={idx} className="testimonial-category">
                        <h2 className="category-title">{category[0]}</h2>
                        <div className="testimonials-grid">
                            {category[1].map((testimonial, testimonialIdx) => (
                                <div key={testimonialIdx} className="testimonial-card">
                                    <div className="testimonial-quote-mark">"</div>
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <p className="author-name">{testimonial.name}</p>
                                        <p className="author-achievement">{testimonial.achievement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;