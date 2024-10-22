import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Srishti Gupta",
    username: "@srishti",
    body: "Thanks for saving my time, Would love to work with you guys again",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Switchfixx Electricals",
    username: "@switchfixx",
    body: "Amazing! The whole process was smooth and it saved a lot of time",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Harry Uppal",
    username: "@harry",
    body: "Nice work, I would love to connect with you guys for a new project soon",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sia Graphics",
    username: "@siagraphics",
    body: "Nice and clean work, I wish you guys good luck for your future work",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Lift Lock",
    username: "@liftlock",
    body: "Great customer service and the whole process was super clean",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Harmilap",
    username: "@harmilap",
    body: "Loved to work with Jaskaran and his team, we will work again in the near future",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 md:w-96 md:h-52 cursor-pointer overflow-hidden rounded-xl p-5",
        // New gradient background
        "bg-gradient-to-t from-transparent to-white/10",
        // Add a subtle hover effect
        "hover:bg-gradient-to-t hover:from-transparent hover:to-white/20 transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-base text-white/80">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s] mb-8">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-5">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
