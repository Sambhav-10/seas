export default function JoinUsSection() {
  const joinOptions = [
    {
      title: "Become a Member",
      description:
        "Join our community and be a part of long-term impact initiatives and decision-making.",
      points: [
        "Be part of core activities",
        "Access exclusive updates",
        "Contribute to planning & growth",
      ],
      icon: "👥",
      link: "https://forms.gle/member-form-link",
    },
    {
      title: "Volunteer With Us",
      description:
        "Contribute to making a difference by volunteering in our programs and community initiatives.",
      points: [
        "Field & event participation",
        "Flexible involvement",
        "Gain real-world experience",
      ],
      icon: "🤝",
      link: "https://forms.gle/volunteer-form-link",
    },
    {
      title: "Apply for Internship",
      description:
        "Gain hands-on experience while working on meaningful projects with our team.",
      points: [
        "Skill development",
        "Certificate & experience",
        "Work on live projects",
      ],
      icon: "🎓",
      link: "https://forms.gle/intern-form-link",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 md:pt-20">
      <h2 className="text-3xl font-bold text-center mb-10  md:pt-20">Join Our Mission</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
        {joinOptions.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-600 mb-4">{item.description}</p>

            <ul className="text-sm text-gray-500 mb-6 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
