import { lazy, useMemo } from "react";
const Card = lazy(() => import("./Card"));

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam illum? Autem porro cumque saepe sed nesciunt.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam illum? Autem porro cumque saepe sed nesciunt doloribus magni suscipit odit.",
  },
  {
    id: 3,
    name: "Michael Lee",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam illum? Autem porro.",
  },
  {
    id: 5,
    name: "David Kim",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsam illum? Autem porro cumque saepe sed nesciunt doloribus magni suscipit odit mollitia ullam veritatis illum est iure, officia omnis laborum.",
  },
];

export default function Testimonial() {
  const loopedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [],
  );

  return (
    <div
      id="testimonials"
      className="dark:bg-secondary bg-accent/50 theme-transition overflow-x-hidden py-10"
    >
      <h1 className="font-sora text-primary dark:text-light mb-20 text-center text-4xl font-bold md:text-5xl">
        Testimonials
      </h1>

      <div className="relative w-full">
        <div className="animate-scroll flex w-max flex-nowrap gap-4">
          {loopedTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${index}`}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
