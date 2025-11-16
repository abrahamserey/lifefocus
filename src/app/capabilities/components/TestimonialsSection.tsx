const testimonials = [
  {
    quote:
      "I've had a chance to sit with our CEO this morning, I think you've made US fall in love a little bit! Overall, he loved the work & and all the background research to understand our business, the projects, etc. so you should feel very good about that.",
    author: 'Laura Campbell',
    position: 'Director, Investor Relations',
    company: 'Hudson Pacific Properties',
  },
  {
    quote:
      "Thanks to everyone at Blind for an amazing effort! This is one of the most impressive pieces I've ever had the pleasure to work on and you guys CRUSHED IT!",
    author: 'Gary Goodman',
    position: 'Principal, Creative Director',
    company: 'Ayzenberg Group',
  },
  {
    quote:
      'It was great working with you guys! Your thoughtfulness, thoroughness and enthusiasm was MUCH appreciated!',
    author: 'Veena Chokkavelu',
    position: 'Associate Producer/WPP',
    company: 'Team BAC',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-light">What Clients are Saying</h2>
          </div>
          <div className="lg:col-span-9 grid md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="text-sm leading-relaxed mb-6 text-gray-600">{testimonial.quote}</p>
                <h4 className="font-semibold text-sm mb-1">{testimonial.author}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {testimonial.position}
                  <br />
                  {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
