```javascript

import React, { useState, useEffect } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import {

FaArrowRight,

FaCheck,

FaQuoteLeft,

FaStar,

FaEnvelope,

FaPhone,

FaMapMarkerAlt,

FaFacebookF,

FaLinkedinIn,

FaUserGraduate,

FaCogs,

FaChartLine,

FaHandshake,

FaAward,

FaUsers,

FaCalendar,

FaClock,

FaQuestionCircle,

FaChevronDown,

FaChevronUp,

FaPlayCircle,

FaBook,

FaExternalLinkAlt

} from 'react-icons/fa';

const LandingPage = () => {

const [isVisible, setIsVisible] = useState({});

const [locationFilter, setLocationFilter] = useState('all');

const [testimonialFilter, setTestimonialFilter] = useState('all');

const [affiliateFilter, setAffiliateFilter] = useState('all');

const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

const [openFAQ, setOpenFAQ] = useState(null);

const { scrollYProgress } = useScroll();

const yRange = useTransform(scrollYProgress, [0, 1], [0, -50]);

// Testimonials data

const testimonials = [

{

name: "Nomsa Maseko",

credentials: "CXAC, ACXM®, ACX Champion®",

role: "Customer Experience Designer",

company: "FNB",

content: "Being a part of this program was such a paradigm shift. Fundamentally because, there's no way we can change the customers experience without taking a good look at our internal processes. Otherwise our innovations will remain superficial. It was so smart to combine CX and Process Optimization understanding in delivering increased revenue, reduce cost to serve and deliver unique experiences.",

rating: 5,

service: "ACX Master®",

country: "South Africa"

},

{

name: "Sarusha Naicker",

role: "Business Specialist",

company: "FNB South Africa",

content: "Thank you so much for the wonderful training. I thoroughly enjoyed it, keep up the great work!",

rating: 5,

service: "Training",

country: "South Africa"

},

{

name: "Aphiwe Njoko",

credentials: "ACXM®",

role: "Customer Experience Specialist",

company: "FNB Wealth and Investments",

content: "I'm incredibly grateful for the opportunity to deepen my knowledge of Customer Experience under the guidance of Steve Towers. His training offered valuable insights into how CX can drive service excellence, boost revenue, and reduce costs. As a newly accredited CX Master, I'm excited to implement the practical tools and strategies I've gained to make a real impact within my team.",

rating: 5,

service: "ACX Master®",

country: "South Africa"

},

{

name: "Raj Subramaniam",

role: "Founder & Principal Consultant",

company: "Align CX",

content: "I'm proud to be part of the community you've inspired, continually learning from your insights and championing CX excellence. Thank you for your trust, and for leading the way in elevating experiences and shaping a better world.",

rating: 5,

service: "Consultancy",

country: "Australia"

},

{

name: "Sharon Laemie Naya",

role: "Head of Commercial Change Strategy",

company: "TD Bank",

content: "We held our transformation sessions focusing on a critical experience for bank customers. We had really fantastic sessions - not only did we walk away with the deliverables we needed, but people had a lot of fun, too! Thanks again for the workshops. They were the most valuable and enjoyable sessions I have attended!",

rating: 5,

service: "Transformation Training",

country: "North America"

},

{

name: "Jim Lecinski",

role: "Professor of Marketing",

company: "Kellogg School of Management",

credentials: "Former SVP at Google, co-invented Z-MOT and Micro MOTs",

content: "THANK YOU so much for a really wonderful learning experience. This course provided a terrific holistic framework for how I can more richly think about MOTs. It's a terrific program that I'd recommend and encourage others to consider strongly.",

rating: 5,

service: "Training",

country: "USA"

},

{

name: "Nancy Moodley",

role: "Head of Customer Experience",

company: "Nissan Africa",

content: "Thank you for being an amazing mentor, guru & inspiration. You truly have a way of bringing all principles, especially the divine principles, back into the workplace. Thank you for empowering me to see a different view.",

rating: 5,

service: "Mentorship",

country: "Africa"

},

{

name: "Muath Al-Azzam",

role: "Principal Services & Operations Specialist",

company: "Dubai Municipality",

content: "Thank you, Steve, for the high-quality & insightful coaching you delivered. Your innovative approach, critical thinking & up to date case studies facilitated this achievement 👍",

rating: 5,

service: "Coaching",

country: "United Arab Emirates"

},

{

name: "Tarek AlKhaldi",

role: "Head of Digital Design",

company: "TAM",

content: "Thank you so much Steve for your time and effort this week, it was a pleasure attending these sessions with you and listening to all of the interesting stories and becoming Masters at the end of it. The journey was filled with a lot of exciting challenges that helped us perceive things in a different way and truly look at customers differently.",

rating: 5,

service: "ACX Master®",

country: "Saudi Arabia"

},

{

name: "Durrel Ramrathan",

role: "Head of Operational Analytics and Data Management",

company: "Multichoice",

content: "What an amazing journey to becoming an Accredited ACX Coach! This experience has completely transformed how we measure, collaborate, communicate and innovate with the customer in mind. Keen to guide the next willing souls on this journey.",

rating: 5,

service: "ACX Coach",

country: "South Africa"

},

{

name: "Chandan Chabbra",

role: "Head of Content and Operations",

company: "MX Live, MX Player",

content: "Thanks, Steve, for providing a great learning platform. It was inspiring to hear your experiences as they presented a great source of knowledge. Not only have you been a fantastic mentor to me, but you have taught me how to mentor others. Thanks for being so supportive and getting me through.",

rating: 5,

service: "Mentorship",

country: "India"

},

{

name: "Lyall Shapiro",

role: "Head of Experience, Design & Fulfilment Transformation",

company: "AMP",

content: "Another fantastic learning, personal and professional development experience with you!",

rating: 5,

service: "Training",

country: "Australia"

},

{

name: "Brett Gill",

role: "Regional Sales Manager",

company: "Morrison Container Solutions",

content: "I have to say, every day since I left Denver, I have been able to apply some of my learning during the ACXM event into not only my job, but my personal life as well. Thank you so much for everything that you've done to advance the field of customer experience!",

rating: 5,

service: "ACXM",

country: "United States"

},

{

name: "Saud Albuainain",

role: "Director Business Transformation",

company: "EY",

content: "Learning by doing and exploring up to date real-life is what the program is all about. This is my third course with Steve, and I have witnessed tremendous improvements to its content and delivery, and have never failed to leave amazed by the power of the techniques.",

rating: 5,

service: "Training",

country: "Saudi Arabia"

},

{

name: "Maria T Ferreira",

role: "Vice President, Client Experience Process Improvement",

company: "Citi",

content: "I'm writing to endorse the program. It completely changed the way I think. Steve Towers taught us amazing secret techniques of improvement. The program provided me with the ability to apply all the learnings immediately after the training. Very effective advice with a wealth of knowledge to share. This is a must have for everyone who's interested in making their lives better!",

rating: 5,

service: "Training",

country: "New York, United States"

}

];

// FAQ data from the provided content

const faqData = [

{

id: 1,

question: "What is Customer Experience?",

answer: "Customer experience is the aggregate of all interactions, perceptions, and emotions a person has while attempting to reach a desired goal or outcome.\n\nIt is not merely about the experience a customer has with a particular company, but with any company they may encounter while on the journey to the result they need.",

resources: [

{

text: "Video: Your Definition of Customer Experience needs to be corrected!",

icon: "video"

},

{

text: "Enhance your customer experience career with an CJM Professional® (CJMP®) qualification.",

link: "https://www.cjmplus.com",

icon: "award"

}

]

},

{

id: 2,

question: "What is Customer Experience Management?",

answer: "Customer Experience Management (CEM or CXM) is a strategic approach used most commonly as a competitive differentiator. It involves aligning every aspect of an organisation towards the delivery of customer needs and successful outcomes no matter how far removed the customer is perceived to be.\n\nThis includes:\n• Customer journey – what the customer does, expects and feels.\n• Customer Interactions.\n• Supporting internal process.\n• Associated team and hierarchy structures.\n• Performance metrics.\n• Digital capabilities.\n• Vision, mission & strategy.\n\nTypically, companies who engage in Customer Experience Management activities outperform those who do not.\n\nCustomer Experience Management (CEM) is the practice of proactively managing customer interactions, perceptions, and emotions in order to create positive customer experiences throughout the customer journey.\n\nIt involves understanding customer needs, preferences, and expectations and then creating tailored experiences that meet these needs, that are memorable and leave a lasting impression.\n\nCEM also requires connecting the customer experience to the means of delivery, such as the organisation's people, processes, and systems. This means that CEM requires a comprehensive understanding of the customer journey and ensuring that the organisation's people, processes, and systems can work together to provide a seamless experience that meets customer needs and expectations.\n\nAdditionally, CEM requires a focus on developing customer relationships and fostering loyalty by providing ongoing support, feedback, and value.",

resources: [

{

text: "Enhance your customer experience career with an Accredited Customer Experience Master® qualification.",

link: "https://bit.ly/GCCACXP",

icon: "award"

}

]

},

{

id: 3,

question: "Why is Customer Experience Management important for business?",

answer: "It would be a mistake to disregard the concept of customer experience as an idealistic or sentimental one. It has become a central element in the ultra-competitive and interlinked worldwide market.\n\nThere is a real economic benefit to managing customer experience properly. By doing so, it is possible to:\n• Increase brand loyalty by creating unique experiences\n• Amass additional sales from current and new customers acquired by word of mouth\n• Foster customer commitment (and even build brand advocates) by providing invaluable and memorable customer encounters\n• Minimise expenses by decreasing customer turnover"

},

{

id: 4,

question: "How can I measure Customer Experience?",

answer: "Measuring customer experience is a vital part of ensuring customer satisfaction. Customer experience is now quantifiable value that previously had been hard to calculate but can directly be measured through various techniques.\n\nTraditional Measures:\n• Net Promoter Score (NPS)\n• Customer Satisfaction (CSAT)\n• Customer Effort Score (CES)\n• Customer Journey Analysis\n• Customer Feedback\n• Voice of Customer (VOC)\n\nNow Measures (2023):\n• Artificial Intelligence (AI)\n• Mystery Shopping\n• Machine Learning\n• Automated Chatbots\n• CX6\n\nFuture Measures (2023>):\n• Natural Language Processing (NLP)\n• CX Rating aka 4E's\n• Predictive Analytics\n• Needs of Customer (NOC)\n• CX6+\n\nFor many years, traditional measures such as surveys, customer satisfaction (CSAT), and customer journey analysis have been the go-to solutions for measuring customer experience. These also include measures such as Net Promoter Score (NPS), Customer Effort Score (CES), and Voice of the Customer (VoC).\n\nIn the future, even more sophisticated solutions will continue to develop, such as automated chatbots, natural language processing (NLP), virtual reality (VR), predictive analysis, and multi-dimensional online reviews. By using these advanced technologies, companies can better understand the individual needs of each customer and develop more tailored experiences.",

resources: [

{

text: "Video: Measuring the wrong things well: Houston, we have a problem.",

icon: "video"

},

{

text: "Video: The CX6 measurement system Introduction.",

icon: "video"

},

{

text: "The CX6 Full Video and Deck - request it here - \"you will never measure CX in the same way again\"",

icon: "book"

}

]

},

{

id: 5,

question: "What are the common challenges businesses face when implementing a CEM strategy?",

answer: "1. No clear customer experience strategy:\nA clear customer experience strategy is essential for success. Without one, businesses will be unable to create a consistent customer experience across all touchpoints.\n\n2. Lack of customer insights:\nTo properly implement a customer experience management strategy, businesses must develop an understanding of what customers want, need and expect.\n\n3. Poor data integration:\nIntegrating customer data across all systems can be complex, and mistakes can be costly. The right customer data integration strategy is essential for successful customer experience management.\n\n4. Inadequate resources:\nImplementing a customer experience management strategy requires resources, including personnel and financial investment. If a business does not have the resources to ensure success, then it will struggle to reach the goals and outcomes desired.\n\n5. Difficult change management:\nImplementing customer experience management requires changes to organisational design and processes. Change management can be complex, and businesses often struggle to make these changes without disrupting their customers.",

resources: [

{

text: "Video: The number 1 reason why CX so often fails.",

icon: "video"

}

]

},

{

id: 6,

question: "How can I create a customer centric culture?",

answer: "Set customer experience goals and objectives:\n• Establish clear and measurable goals and objectives to guide your customer experience strategy.\n• Create a customer-focused mission statement: Develop a mission statement communicating your company's commitment to creating a great customer experience.\n• Train your employees: Provide training on customer service and customer experience best practices.\n• Develop customer empathy: Help your employees understand and foster compassion for their customers.\n• Recognise and reward employees: Recognize and reward employees who go above and beyond for their customers.\n• Measure and improve: Track customer experience metrics (e.g. customer satisfaction, net promoter score) and use this data to inform improvements.",

resources: [

{

text: "Video: Creating a Customer-Centric Culture (Panel of Experts)",

icon: "video"

}

]

},

{

id: 7,

question: "How does Customer Experience Management differ from Customer Service?",

answer: "Customer experience management (CEM) and customer service are related but distinct concepts. Customer service is focused on providing individual customers with the help they need, while CEM is focused on creating a positive overall customer experience throughout the entire customer journey.\n\nWhile customer service addresses customer needs individually, CEM takes a more holistic approach. It involves understanding customer needs and expectations, tracking customer behaviour and feedback, and implementing strategies that create a positive customer experience across all touchpoints.\n\nCEM is also more focused on proactive measures than customer service. For instance, CEM might involve conducting Needs Assessments to identify where customers need help and introducing new products or services that meet customer needs. On the other hand, customer service is more reactive, focusing on addressing customer wants as they arise."

},

{

id: 8,

question: "What role does technology play in CEM?",

answer: "Technology plays a crucial role in customer experience management. By leveraging customer data and analytics tools, businesses can better understand customer behaviour, needs, and expectations. This data can then be used to improve customer experiences across all touchpoints.\n\nTechnology can also automate customer service processes by responding to customer inquiries and providing personalised offers.\n\nAutomation can help businesses improve efficiency and customer satisfaction by addressing customer needs quickly and accurately.\n\nFinally, businesses can use technology to offer customers more personalised experiences. With the help of AI-driven solutions, companies can customise their customer journeys, tailoring content and offers to meet specific customer needs."

},

{

id: 9,

question: "How can I create a Customer Journey Map to improve CX?",

answer: "Generating a customer journey map is a great tactic to advance the customer experience.\n\nThis customer journey map visually demonstrates the many points of interaction between a customer and your business, from the moment they discover your product or service to the decision to buy and the post-purchase experience. By producing this map, you can gain a better understanding of how customers interact with your business and recognise which areas need to be improved.\n\nThe first step in constructing a customer journey map is to assemble data on the customer journey. This can include surveys, focus groups, interviews, and other forms of customer feedback. This data can give helpful insights into the customer journey and help you find any opportunities or gaps in the experience.\n\nAfter collecting the data, you must visually represent the customer's path. You can do this with computer software and the Customer Performance Landscape (CPL) – see FAQ 12 below.\n\nThis illustration should include all the touchpoints in the customer journey, such as the customer's awareness of your product or service, purchase decision-making, and the post-purchase experience. A shorthand way of thinking this way is understanding that the journey starts when the need arises and isn't completed until a Successful Customer Outcome is delivered. Needs to Outcome is often abbreviated N2O.\n\nWhen the customer journey map is finished, it must be fully integrated into a tool such as the Customer Performance Landscape. Subsequently, the journey will be connected and aligned with the other elements of the CPL.\n\nImprovements may be identified that include simplifying processes, providing more customised customer service, making the user experience on your website more enjoyable, or introducing new products and services to meet customer needs. Improvements and suggestions will be included in the overall Customer Experience Management program.\n\nBy creating a customer journey map, you can gain valuable insights into the customer experience and take steps to improve it. This can help boost customer satisfaction, loyalty, and sales."

},

{

id: 10,

question: "What is the difference between Customer Journey Mapping & Customer Journey Management?",

answer: "Customer journey mapping and customer journey management are two related processes that share the same goal: to improve the customer experience. However, they are distinct processes with some key differences.\n\nCustomer journey mapping is the process of creating a visual representation of the customer journey, from their initial discovery of your product or service, to their purchase decision, to the post-purchase experience. It involves collecting data on the customer journey and analysing it to identify any problems or gaps in the experience. Customer journey maps are part of a much broader discipline of customer journey management.\n\nCustomer Journey Management, on the other hand, is the process of:\n(a) connecting customer journeys to the people, process and technology,\n(b) identifying improvements to those connections,\n(c) optimising the customer experience, and\n(d) managing the customer experience ecosystem.\n\nThis could include innovating and streamlining processes, providing more personalised customer service, improving the user experience across their complete journey from Needs to Outcome, or introducing new products and services to meet customer needs. Customer journey management may include customer journey maps.",

resources: [

{

text: "Video: Customer Experience Management is NOT just Journey Mapping",

icon: "video"

},

{

text: "Video: Five common failures of Customer Journey Mapping",

icon: "video"

}

]

},

{

id: 11,

question: "How do we justify Customer Experience Management to the organisation?",

answer: "Justifying Customer Experience Management to your organisation requires demonstrating clear business value and ROI. Focus on the hard benefits that CX management delivers to the bottom line.",

resources: [

{

text: "Video: The Hard benefits of Experience Management",

icon: "video"

},

{

text: "Video: Quick snapshot justification",

icon: "video"

},

{

text: "Video: Three biggest questions CX Leaders Ask",

icon: "video"

},

{

text: "Management Deck - 30-minute presentation - request it here",

icon: "book"

}

]

},

{

id: 12,

question: "What are the key components of a Customer Experience Management strategy?",

answer: "1. Establish Explicit Objectives for Your Customer Experience Management Plan\n2. Gather and Examine Appropriate Data to Assess Your Customer's Encounters\n3. Identify the dependencies and connections from customer interactions through to people, processes and systems\n4. Create a Customer Performance Landscape*\n5. Recognize Areas for Enhancement and Set Targets\n6. Put Into Effect Modifications to Enhance the Customer Experience\n7. Observe and Measure Outcomes\n8. Modify and Perfect Your Customer Experience Management Strategy\n\nThe Customer Experience Management Method (CEMMethod) was created in 2006 explicitly for this purpose. It is now in version 14.\n\nThe Accredited Customer Experience® program is underpinned by the CEMMethod®.",

resources: [

{

text: "Overview of the Customer Performance Landscape (CPL)",

icon: "video"

},

{

text: "ACX program",

link: "https://bit.ly/GCCACXP",

icon: "external"

},

{

text: "Customer Journey Management Plus® training",

link: "https://www.cjmplus.com",

icon: "external"

},

{

text: "CEMMethod® website",

link: "https://www.cemmethod.com",

icon: "external"

}

]

}

];

// FAQ toggle function

const toggleFAQ = (id) => {

setOpenFAQ(openFAQ === id ? null : id);

};

useEffect(() => {

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

setIsVisible(prev => ({

...prev,

[entry.target.id]: true

}));

}

});

},

{ threshold: 0.1 }

);

const elements = document.querySelectorAll('[id]');

elements.forEach(el => observer.observe(el));

return () => observer.disconnect();

}, []);

const containerVariants = {

hidden: { opacity: 0, y: 50 },

visible: {

opacity: 1,

y: 0,

transition: {

duration: 0.8,

staggerChildren: 0.2

}

}

};

const itemVariants = {

hidden: { opacity: 0, y: 30 },

visible: { opacity: 1, y: 0 }

};

return (

<div className="min-h-screen bg-white">

{/* Navigation */}

<nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex justify-between items-center h-16">

<div className="text-2xl font-bold text-blue-600">BP Group</div>

<div className="hidden md:flex space-x-8">

<a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>

<a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>

<a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>

<a href="#affiliates" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>

<a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>

<a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>

<a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={(e) => {

e.preventDefault();

document.getElementById('faq').scrollIntoView({ behavior: 'smooth', block: 'start' });

}}>FAQ</a>

<a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>

</div>

<motion.a

href="#contact"

className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors btn-hover"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

Get Started

</motion.a>

</div>

</div>

</nav>

{/* Hero Section */}

<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img

src="https://images.unsplash.com/photo-1504119089809-1d5100a33f27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fHxibHVlfDE3NTI0MTU3MTJ8MA&ixlib=rb-4.1.0&q=85"

alt="Business Transformation"

className="w-full h-full object-cover"

/>

<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

</div>


<motion.div

className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"

initial="hidden"

animate="visible"

variants={containerVariants}

>

<motion.h1

className="text-5xl md:text-7xl font-bold mb-6 text-glow"

variants={itemVariants}

>

Transform Customer

<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Experiences</span>

</motion.h1>


<motion.p

className="text-xl md:text-2xl mb-8 text-gray-200"

variants={itemVariants}

>

Empower your organization with world-class customer experience certification,

transformation training, and expert consultancy services.

</motion.p>


<motion.div

className="flex flex-col sm:flex-row gap-4 justify-center"

variants={itemVariants}

>

<motion.a

href="#services"

className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors btn-hover inline-flex items-center gap-2"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

Explore Services <FaArrowRight />

</motion.a>

<motion.a

href="#contact"

className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-hover"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

Get Consultation

</motion.a>

</motion.div>

</motion.div>


<motion.div

className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

transition={{ delay: 2 }}

>

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />

</svg>

</motion.div>

</section>

{/* Services Section */}

<section id="services" className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div

className="text-center mb-16"

initial="hidden"

animate={isVisible.services ? "visible" : "hidden"}

variants={containerVariants}

>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

Comprehensive solutions to transform your customer experience capabilities

</p>

</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{[

{

icon: FaUserGraduate,

title: "CX Certification",

description: "Professional certification programs including ACX Master®, CPP Master®, and specialized training courses.",

features: ["Global Recognition", "Industry Standards", "Career Advancement"]

},

{

icon: FaCogs,

title: "Transformation Training",

description: "Hands-on workshops and training sessions designed to transform your organization's customer experience capabilities.",

features: ["Practical Learning", "Real-world Applications", "Immediate Impact"]

},

{

icon: FaChartLine,

title: "Expert Consultancy",

description: "Strategic consulting services to help design, implement, and optimize your customer experience initiatives.",

features: ["Strategic Planning", "Custom Solutions", "Proven Methodologies"]

}

].map((service, index) => (

<motion.div

key={index}

className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow glass-card"

initial="hidden"

animate={isVisible.services ? "visible" : "hidden"}

variants={itemVariants}

transition={{ delay: index * 0.2 }}

whileHover={{ y: -5 }}

>

<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">

<service.icon className="text-2xl" />

</div>

<h3 className="text-xl font-semibold mb-4">{service.title}</h3>

<p className="text-gray-600 mb-6">{service.description}</p>

<ul className="space-y-2">

{service.features.map((feature, idx) => (

<li key={idx} className="flex items-center gap-2 text-gray-700">

<FaCheck className="text-green-500 text-sm" />

{feature}

</li>

))}

</ul>

</motion.div>

))}

</div>

</div>

</section>

{/* FAQ Section */}

<section id="faq" className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div

initial="hidden"

animate={isVisible.faq ? "visible" : "hidden"}

variants={containerVariants}

className="text-center mb-16"

>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

Frequently Asked Questions

</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

12 of the most frequently asked questions in CX and Experience Management

</p>

</motion.div>

<div className="max-w-4xl mx-auto">

{faqData.map((faq, index) => (

<motion.div

key={faq.id}

initial="hidden"

animate={isVisible.faq ? "visible" : "hidden"}

variants={itemVariants}

transition={{ delay: index * 0.1 }}

className="mb-4"

>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

<button

onClick={() => toggleFAQ(faq.id)}

className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"

>

<div className="flex items-center gap-4">

<div className="bg-blue-600 text-white p-2 rounded-full">

<FaQuestionCircle />

</div>

<h3 className="text-lg font-semibold text-gray-900">

{faq.question}

</h3>

</div>

<div className="text-blue-600">

{openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}

</div>

</button>


{openFAQ === faq.id && (

<motion.div

initial={{ height: 0, opacity: 0 }}

animate={{ height: "auto", opacity: 1 }}

exit={{ height: 0, opacity: 0 }}

transition={{ duration: 0.3 }}

className="border-t border-gray-200"

>

<div className="px-6 py-4">

<div className="text-gray-700 leading-relaxed mb-4">

{faq.answer.split('\n').map((paragraph, idx) => (

<p key={idx} className="mb-3">

{paragraph}

</p>

))}

</div>


{faq.resources && faq.resources.length > 0 && (

<div className="mt-4 space-y-2">

<h4 className="font-semibold text-gray-900 mb-2">Resources:</h4>

{faq.resources.map((resource, idx) => (

<div key={idx} className="flex items-center gap-2 text-blue-600">

{resource.icon === 'video' && <FaPlayCircle />}

{resource.icon === 'book' && <FaBook />}

{resource.icon === 'award' && <FaAward />}

{resource.icon === 'external' && <FaExternalLinkAlt />}

{resource.link ? (

<a

href={resource.link}

target="_blank"

rel="noopener noreferrer"

className="hover:underline"

>

{resource.text}

</a>

) : (

<span>{resource.text}</span>

)}

</div>

))}

</div>

)}

</div>

</motion.div>

)}

</div>

</motion.div>

))}

</div>

</div>

</section>

{/* About Section */}

<section id="about" className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div

initial="hidden"

animate={isVisible.about ? "visible" : "hidden"}

variants={containerVariants}

className="text-center mb-16"

>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

About BP Group

</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

Leading the world in customer experience transformation

</p>

</motion.div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<motion.div

initial="hidden"

animate={isVisible.about ? "visible" : "hidden"}

variants={itemVariants}

>

<h3 className="text-2xl font-bold text-gray-900 mb-6">

Transforming Organizations Globally

</h3>

<p className="text-gray-700 mb-6 leading-relaxed">

BP Group has been at the forefront of customer experience transformation for over a decade.

Our proven methodologies and expert-led training programs have empowered thousands of

professionals across major corporations worldwide.

</p>

<p className="text-gray-700 mb-8 leading-relaxed">

Founded by Steve Towers, our approach combines practical experience with cutting-edge

research to deliver measurable business results through improved customer experiences.

</p>


<div className="grid grid-cols-2 gap-6">

<div className="text-center">

<div className="text-3xl font-bold text-blue-600 mb-2">500+</div>

<div className="text-gray-600">Certified Professionals</div>

</div>

<div className="text-center">

<div className="text-3xl font-bold text-blue-600 mb-2">50+</div>

<div className="text-gray-600">Global Companies</div>

</div>

<div className="text-center">

<div className="text-3xl font-bold text-blue-600 mb-2">15+</div>

<div className="text-gray-600">Years Experience</div>

</div>

<div className="text-center">

<div className="text-3xl font-bold text-blue-600 mb-2">25+</div>

<div className="text-gray-600">Countries Served</div>

</div>

</div>

</motion.div>

<motion.div

initial="hidden"

animate={isVisible.about ? "visible" : "hidden"}

variants={itemVariants}

className="grid grid-cols-1 md:grid-cols-2 gap-6"

>

{[

{

icon: FaAward,

title: "Industry Recognition",

description: "Globally recognized certification programs"

},

{

icon: FaUsers,

title: "Expert Team",

description: "World-class consultants and trainers"

},

{

icon: FaHandshake,

title: "Trusted Partners",

description: "Partnerships with leading organizations"

},

{

icon: FaChartLine,

title: "Proven Results",

description: "Measurable business impact and ROI"

}

].map((item, index) => (

<div key={index} className="bg-gray-50 p-6 rounded-lg">

<div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">

<item.icon />

</div>

<h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>

<p className="text-gray-600 text-sm">{item.description}</p>

</div>

))}

</motion.div>

</div>

</div>

</section>

{/* Testimonials Section */}

<section id="testimonials" className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div

initial="hidden"

animate={isVisible.testimonials ? "visible" : "hidden"}

variants={containerVariants}

className="text-center mb-16"

>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

What Our Clients Say

</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

Hear from professionals at leading global organizations

</p>

</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{testimonials.slice(0, 6).map((testimonial, index) => (

<motion.div

key={index}

initial="hidden"

animate={isVisible.testimonials ? "visible" : "hidden"}

variants={itemVariants}

transition={{ delay: index * 0.1 }}

className="bg-white p-6 rounded-lg shadow-lg glass-card"

>

<div className="flex items-center gap-1 mb-4">

{[...Array(testimonial.rating)].map((_, i) => (

<FaStar key={i} className="text-yellow-400" />

))}

</div>

<FaQuoteLeft className="text-blue-600 text-2xl mb-4" />

<p className="text-gray-700 mb-6 leading-relaxed">

"{testimonial.content.length > 150

? testimonial.content.substring(0, 150) + "..."

: testimonial.content}"

</p>

<div className="border-t pt-4">

<div className="font-semibold text-gray-900">

{testimonial.name}

{testimonial.credentials && (

<span className="text-blue-600 font-normal text-sm ml-2">

{testimonial.credentials}

</span>

)}

</div>

<div className="text-gray-600 text-sm">

{testimonial.role} at {testimonial.company}

</div>

<div className="text-blue-600 text-sm mt-1">

{testimonial.service} • {testimonial.country}

</div>

</div>

</motion.div>

))}

</div>

<div className="text-center mt-12">

<motion.button

className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors btn-hover"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

View All Testimonials

</motion.button>

</div>

</div>

</section>

{/* CTA Section */}

<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<motion.div

initial="hidden"

animate={isVisible.cta ? "visible" : "hidden"}

variants={containerVariants}

>

<motion.h2

className="text-4xl md:text-5xl font-bold mb-6"

variants={itemVariants}

>

Ready to Transform Your Customer Experience?

</motion.h2>

<motion.p

className="text-xl mb-8 max-w-3xl mx-auto"

variants={itemVariants}

>

Join thousands of professionals who have already elevated their customer experience capabilities with our world-class certification programs.

</motion.p>

<motion.div

className="flex flex-col sm:flex-row gap-4 justify-center"

variants={itemVariants}

>

<motion.a

href="#contact"

className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors btn-hover"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

Get Started Today

</motion.a>

<motion.a

href="#courses"

className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-hover"

whileHover={{ scale: 1.05 }}

whileTap={{ scale: 0.95 }}

>

View Courses

</motion.a>

</motion.div>

</motion.div>

</div>

</section>

{/* Contact Section */}

<section id="contact" className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.div

initial="hidden"

animate={isVisible.contact ? "visible" : "hidden"}

variants={containerVariants}

className="text-center mb-16"

>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">

Get In Touch

</h2>

<p className="text-xl text-gray-600 max-w-3xl mx-auto">

Ready to begin your customer experience transformation journey? Contact us today.

</p>

</motion.div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<motion.div

initial="hidden"

animate={isVisible.contact ? "visible" : "hidden"}

variants={itemVariants}

className="space-y-8"

>

<div className="flex items-center gap-4">

<div className="bg-blue-600 text-white p-3 rounded-full">

<FaEnvelope />

</div>

<div>

<div className="font-semibold text-gray-900">Email Us</div>

<div className="text-gray-600">info@bpgroup.org</div>

</div>

</div>


<div className="flex items-center gap-4">

<div className="bg-blue-600 text-white p-3 rounded-full">

<FaPhone />

</div>

<div>

<div className="font-semibold text-gray-900">Call Us</div>

<div className="text-gray-600">+44 (0) 7429 518277</div>

</div>

</div>


<div className="flex items-center gap-4">

<div className="bg-blue-600 text-white p-3 rounded-full">

<FaMapMarkerAlt />

</div>

<div>

<div className="font-semibold text-gray-900">Visit Us</div>

<div className="text-gray-600">Professional Training Center</div>

</div>

</div>


<div className="flex gap-4 mt-8">

<motion.a

href="https://www.facebook.com/BPGroup"

className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"

whileHover={{ scale: 1.1 }}

whileTap={{ scale: 0.9 }}

>

<FaFacebookF />

</motion.a>

<motion.a

href="https://www.linkedin.com/company/bpgroup"

className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"

whileHover={{ scale: 1.1 }}

whileTap={{ scale: 0.9 }}

>

<FaLinkedinIn />

</motion.a>

</div>

</motion.div>


<motion.div

initial="hidden"

animate={isVisible.contact ? "visible" : "hidden"}

variants={itemVariants}

>

<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<input

type="text"

placeholder="First Name"

className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"

/>

<input

type="text"

placeholder="Last Name"

className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"

/>

</div>

<input

type="email"

placeholder="Email Address"

className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"

/>

<input

type="tel"

placeholder="Phone Number"

className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"

/>

<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors">

<option>Select Service Interest</option>

<option>Customer Experience Certification</option>

<option>Transformation Training</option>

<option>Consultancy Services</option>

</select>

<textarea

placeholder="Tell us about your needs..."

rows={4}

className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors resize-none"

></textarea>

<motion.button

type="submit"

className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors btn-hover"

whileHover={{ scale: 1.02 }}

whileTap={{ scale: 0.98 }}

>

Send Message

</motion.button>

</form>

</motion.div>

</div>

</div>

</section>

{/* Footer */}

<footer className="bg-gray-900 text-white py-12">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div>

<h3 className="text-2xl font-bold mb-4">BP Group</h3>

<p className="text-gray-400 mb-4">

Transforming customer experiences through world-class training and consultancy.

</p>

<div className="flex gap-4">

<a href="https://www.facebook.com/BPGroup" className="text-gray-400 hover:text-white transition-colors">

<FaFacebookF />

</a>

<a href="https://www.linkedin.com/company/bpgroup" className="text-gray-400 hover:text-white transition-colors">

<FaLinkedinIn />

</a>

</div>

</div>


<div>

<h4 className="text-lg font-semibold mb-4">Services</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#" className="hover:text-white transition-colors">CX Certification</a></li>

<li><a href="#" className="hover:text-white transition-colors">Training Programs</a></li>

<li><a href="#" className="hover:text-white transition-colors">Consultancy</a></li>

<li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>

</ul>

</div>


<div>

<h4 className="text-lg font-semibold mb-4">Company</h4>

<ul className="space-y-2 text-gray-400">

<li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>

<li><a href="#affiliates" className="hover:text-white transition-colors">Our Team</a></li>

<li><a href="#faq" className="hover:text-white transition-colors" onClick={(e) => {

e.preventDefault();

document.getElementById('faq').scrollIntoView({ behavior: 'smooth', block: 'start' });

}}>FAQ</a></li>

<li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>

</ul>

</div>


<div>

<h4 className="text-lg font-semibold mb-4">Contact</h4>

<ul className="space-y-2 text-gray-400">

<li>info@bpgroup.org</li>

<li>+44 (0) 7429 518277</li>

<li>Professional Training Center</li>

</ul>

</div>

</div>


<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">

<p>&copy; 2025 BP Group. All rights reserved. | Privacy Policy | Terms of Service</p>

</div>

</div>

</footer>

</div>

);

};

export default LandingPage;
