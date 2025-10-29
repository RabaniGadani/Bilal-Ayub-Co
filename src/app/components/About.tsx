import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. M. Ayoob Bhatti",
    title: "Senior Legal Advisor & Former Assistant Sessions Judge",
    image: "/images/ayoob-bhatti.png",
    bio: [
      "With over 30 years of judicial and legal experience, Mr. Bhatti is a cornerstone of our firm’s legal excellence. His extensive background as a judicial officer provides invaluable insight into procedural and substantive law, enhancing our firm’s strategic approach to complex litigation."
    ],
    specialties: [
      "Judicial & Legal Advisory",
      "Litigation Strategy",
      "Procedural & Substantive Law",
      "Legal Analysis"
    ]
  },
  {
    name: "Mr. Muhammad Bilal Ayub",
    title: "Advocate High Court & Head of Chambers",
    image: "/Adv Bilal Ayub.jpg",
    bio: [
      "The Founder and Head of Chambers at Bilal Ayub & Co., Mr. Bilal holds a Law Degree from the University of London and has over five years of active legal practice. He leads the firm with a strong commitment to excellence, ethics, and client success.",
      "His expertise spans civil, criminal, corporate, and family law, and he is recognized for his persuasive advocacy, pragmatic solutions, and unwavering dedication to justice."
    ],
    specialties: [
      "Civil Law",
      "Criminal Law",
      "Corporate Law",
      "Family Law",
      "Advocacy",
      "Legal Strategy"
    ]
  },
  {
    name: "Mr. Abdul Rehman Qureshi",
    title: "Senior Legal Counsel",
    image: "/Screenshot_20251029-130555.jpg",
    bio: [
      "Holding a Law Degree from the University of London and possessing over three years of professional experience, Mr. Qureshi is a vital part of the firm’s litigation and advisory team.",
      "His analytical skills, attention to detail, and client-oriented approach ensure effective and result-driven legal solutions."
    ],
    specialties: [
      "Litigation",
      "Legal Advisory",
      "Case Analysis",
      "Client Counseling"
    ]
  },
  {
    name: "Mr.Muhammad Essa Gadani",
    title: "Office Automation Specialist & Full Stack Web Developer",
    image: "/muhammad-essa.png",
    bio: [
      "Mr. Muhammad Essa is an experienced Office Automation Specialist and Full Stack Web Developer with a strong background in modern web application development. He focuses on building intelligent, automated, and efficient digital systems for institutions and organizations. Skilled in both frontend and backend development, he uses technologies like Next.js, Tailwind CSS, TypeScript, and FastAPI to create fast, secure, and scalable web platforms. He also integrates databases, headless CMS, AI tools, and payment systems to deliver innovative digital solutions."
    ],
    specialties: [
      "Office Automation Systems",
      "Frontend & Backend Development",
      "Next.js, React & Tailwind CSS",
      "TypeScript & FastAPI",
      "Database Design & Management",
      "Stripe Payment Integration",
      "Headless CMS (Sanity, Contentful, Strapi, Shopify)",
      "OpenAI Agents SDK & Agent Builder",
      "Docker & Deployment Automation",
      "Vercel & Netlify Deployment Platforms",
      "Digital Transformation & Workflow Optimization"
    ]
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Bilal Ayub & Co.
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Together, the team at Bilal Ayub & Co. combines deep legal insight with professional integrity to deliver exceptional results ensuring that every client’s case is handled with the utmost care, competence, and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us &ndash; Firm Profile</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-semibold">Bilal Ayub &amp; Co.</span> is a Karachi-based law firm dedicated to delivering comprehensive, efficient, and high-quality legal services. We represent individuals, corporations, and institutions across a wide range of practice areas, including Civil Litigation, Criminal Defense, Corporate and Commercial Law, Family Law, and Constitutional matters.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is built on the pillars of integrity, diligence, and professionalism. We strive to understand our clients’ objectives, anticipate challenges, and provide well-reasoned strategies that deliver real and lasting results. Whether navigating complex litigation or advising on sensitive corporate issues, our firm ensures every client receives personalized attention and dedicated representation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/Bilal Ayub & Co.jpg"
                alt="Logo"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Justice</h3>
              <p className="text-gray-600">
                We are unwavering in our commitment to seeking justice for our clients and upholding the rule of law in all our legal proceedings.
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards and conduct our practice with complete honesty, transparency, and moral uprightness.
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our legal practice, continuously improving our skills and knowledge to serve our clients better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-xl opacity-90">
              Numbers that speak for our commitment and success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">400+</div>
              <div className="text-xl opacity-90">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-xl opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Client Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
            At Bilal Ayub & Co., our strength lies in the combined expertise and commitment of our legal team, each member bringing a unique perspective and depth of experience to the firm.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start overflow-hidden">
  {teamMembers.map((member) => (
    <div
      key={member.name}
      className="flex flex-col-reverse md:flex-row  md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 md:mb-0 w-full overflow-hidden px-4 md:px-0"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left break-words">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {member.name}
        </h3>
        <p className="text-base md:text-lg text-primary mb-4">{member.title}</p>
        {member.bio.map((para, i) => (
          <p
            key={i}
            className="text-gray-600 mb-4 leading-relaxed break-words"
          >
            {para}
          </p>
        ))}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {member.specialties.map((spec, j) => (
            <span
              key={j}
              className="bg-secondary text-primary px-3 py-1.5 rounded-full text-sm font-semibold"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          className="rounded-lg shadow-2xl object-cover w-full max-w-xs md:max-w-none"
        />
      </div>
    </div>
  ))}
</div>
 

          
        </div>
      </section>
    </div>
  );
}






