import { useRef } from "react";
import {
  BookOpen,
  Heart,
  Lightbulb,
  Users,
  Church,
  Award,
  Building2,
} from "lucide-react";
import { ImageWithFallback } from "../reuseables";

export function About() {
  const ref = useRef(null);

  const milestones = [
    {
      icon: BookOpen,
      title: "Accounting Foundation",
      description:
        "Learned discipline, precision, and structure through numbers.",
    },
    {
      icon: Church,
      title: "Family and Faith",
      description:
        "Grew up with values that shaped how I understand service for community.",
    },
    {
      icon: Heart,
      title: "Teaching During Lockdown",
      description:
        "Taught preschool children and discovered empathy as a path to creativity.",
    },
    {
      icon: Award,
      title: "NYSC Competition",
      description: "Applied design thinking during my national service year.",
    },
    {
      icon: Building2,
      title: "Interswitch Intern",
      description:
        "Worked in financial technology and learned how structure and creativity work together.",
    },
    {
      icon: Users,
      title: "Tech Communities",
      description:
        "Joined bootcamps and challenges that shaped my thinking in design and front end work.",
    },
    {
      icon: Lightbulb,
      title: "Design Leadership",
      description:
        "Guiding creative work that joins design, technology, and purpose.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Carton houses to Real World Design
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r to-[#376E6F] from-[#DA7BB3] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              My first design studio was my father’s parlor. I built small
              houses from empty cartons and sewed dresses for my dolls using my
              mother’s old scarves. My grandmother used to sew torn pillows and
              clothes, which i learnt how to sew from. Watching her taught me
              that the heart of creativity is care and a desire to make life
              easier for others. She never used the word design yet her work
              shaped my earliest view of it.
            </p>

            <p>
              <span className="text-gray-900">
                My family and church formed my understanding of purpose in
                creation.
              </span>{" "}
              The values of service and community taught me that any useful idea
              should bring people together and improve their way of living. I
              held on to this belief long before I ever learned the formal
              language of design.
            </p>

            <p>
              When the lockdown began the preschool near my home needed teachers
              and I volunteered. The curiosity of the children reminded me that
              clarity comes from simple and warm experiences. I saw how trust
              grows when learning feels like play. That season shaped how I now
              design products, systems, and experiences that invite people to
              understand rather than struggle.
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-600">
            <p>
              During my national service year I joined challenges that called
              for solutions built for real communities. I discovered the point
              where empathy research and imagination meet to create possibility.
              It taught me to think quickly collaborate with confidence and
              develop ideas that speak to real needs. That experience moved
              design from a personal joy into a tool for change.
            </p>

            <p>
              <span className="text-gray-900">
                My internship at Interswitch shaped how I connect design and
                trust.
              </span>{" "}
              I learned how financial systems influence human decisions. During
              the Technovation challenge we built a prototype for a real need
              within the organization. Presenting before experienced leaders
              helped me see that design is a story that inspires action. The
              room believed in the idea because I believed in it and told its
              story with clarity.
            </p>

            <p>
              Today I work on projects that balance structure and imagination.
              My focus remains on human needs. I believe design bridges the
              distance between what is possible and what people truly need. Each
              project is an invitation to make technology feel more human and to
              help people experience clarity and access in their daily lives.
            </p>

            <blockquote className="border-l-4 border-[#DA7B93] pl-6 italic text-gray-700">
              I transitioned from accounting into product development because
              finance needs more than perfect models and numbers. It needs
              products that people trust and understand.
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                <milestone.icon className="w-6 h-6 text-[#2F4454]" />
              </div>
              <h3 className="text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={"/assets/volunteer.jpeg"}
              alt="Community gathering"
              className="w-full object-top h-80 object-cover object-center"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl text-gray-900">Rooted in Community</h3>
            <p className="text-lg text-gray-600">
              My journey from family spaces to technology work taught me that
              great design rises from empathy. From church events to hackathons
              and from family lessons to product research I learned to listen
              deeply collaborate with trust and create with intention. Each
              project is a chance to build design that gives people clarity and
              access in real time and real spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
