import { Calendar, MapPin, Phone, Clock, Star, Sparkles, Heart, Smile, ArrowUpRight } from 'lucide-react'
import heroSmile from './assets/hero-smile.jpg'
import clinicInterior from './assets/clinic-interior.jpg'
import smile1 from './assets/smile-1.jpg'
import smile2 from './assets/smile-2.jpg'
import smile3 from './assets/smile-3.jpg'
import smile4 from './assets/smile-4.jpg'
import doctor from './assets/doctor.jpg'

const BOOKING_URL = 'https://mychart.myoryx.com/patient/#/auth/onlineschedule?realm=vdental&univers=com'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <WhyUs />
      <Doctor />
      <Reviews />
      <Visit />
      <Footer />
      <BookingBar />
    </div>
  )
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl leading-none">V</span>
          <span className="text-eyebrow text-muted-foreground hidden sm:inline">Dental · Aesthetics</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#gallery" className="hover:text-foreground transition">Smile Gallery</a>
          <a href="#why" className="hover:text-foreground transition">Why V Dental</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm border border-foreground/80 px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          Book <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3 text-eyebrow text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Charlotte · North Carolina
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            Transforming smiles,
            <br />
            <em className="italic text-accent">elevating confidence</em>
            <br />
            in Charlotte.
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
            V Dental Health & Aesthetics is a boutique cosmetic dentistry studio led by Dr. Viloria —
            crafting veneers, refined restorations, and quiet, considered care.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-sm tracking-wide hover:bg-accent transition"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a href="#gallery" className="text-sm underline underline-offset-8 decoration-accent/60 hover:decoration-accent">
              View Smile Gallery
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">5.0</span> · 107 Google reviews
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroSmile}
              alt="Radiant confident smile from a V Dental patient"
              width={1600}
              height={1800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-6 max-w-[240px] shadow-sm hidden sm:block">
            <div className="text-eyebrow text-muted-foreground mb-2">Signature</div>
            <div className="font-serif text-2xl leading-tight">Porcelain Veneers</div>
            <div className="hairline my-3" />
            <div className="text-xs text-muted-foreground">Custom-crafted, natural translucency, made to last.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Cosmetic Dentistry', 'Porcelain Veneers', 'Invisalign', 'Teeth Whitening', 'Restorative Care', 'Facial Aesthetics']
  return (
    <div className="border-y border-border bg-cream/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-eyebrow text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-10">
            {i}
            {idx < items.length - 1 && <span className="h-1 w-1 rounded-full bg-accent/70" />}
          </span>
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    icon: Sparkles,
    title: 'Cosmetic',
    desc: 'Porcelain veneers, bonding, and whitening designed around your natural features.',
    items: ['Veneers', 'Bonding', 'Whitening', 'Smile Design'],
  },
  {
    icon: Heart,
    title: 'Restorative',
    desc: 'Crowns, bridges, and implants that restore function without compromising beauty.',
    items: ['Crowns', 'Bridges', 'Implants', 'Onlays'],
  },
  {
    icon: Smile,
    title: 'Invisalign',
    desc: 'Discreet clear aligners tailored by a certified provider — from consultation to reveal.',
    items: ['Full Treatment', 'Refinements', 'Retention', 'Scans'],
  },
  {
    icon: Sparkles,
    title: 'Aesthetics',
    desc: 'Facial aesthetic treatments that complement your new smile with subtle harmony.',
    items: ['Botox', 'Fillers', 'Lip Balance', 'Consult'],
  },
]

function Services() {
  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="text-eyebrow text-accent mb-6">Services</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05]">
              Care that is precise,<br />
              <em className="italic">personal</em>, and quietly luxurious.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground">
            Every treatment plan begins with a conversation. We shape it around the way you smile,
            speak, and live — no templates, no upsells.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc, items }) => (
            <div key={title} className="bg-background p-8 lg:p-10 group hover:bg-cream/50 transition">
              <Icon className="h-6 w-6 text-accent mb-8" strokeWidth={1.25} />
              <h3 className="font-serif text-3xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{desc}</p>
              <ul className="space-y-1.5 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-px w-3 bg-accent" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const shots = [
    { src: smile1, label: 'Veneers · Full Arch', meta: 'Case 01' },
    { src: smile3, label: 'Bonding & Whitening', meta: 'Case 02' },
    { src: smile2, label: 'Smile Design', meta: 'Case 03' },
    { src: smile4, label: 'Veneers · Custom Shade', meta: 'Case 04' },
  ]
  return (
    <section id="gallery" className="py-24 lg:py-36 bg-cream/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-eyebrow text-accent mb-6">Smile Gallery</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
              Real patients.<br />
              <em className="italic">Real transformations.</em>
            </h2>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-accent hover:border-accent transition"
          >
            Start your case <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {shots.map((s, idx) => (
            <figure
              key={s.meta}
              className={`group relative overflow-hidden bg-background ${
                idx % 2 === 0 ? 'lg:mt-10' : ''
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 flex items-center justify-between text-xs">
                <span className="text-eyebrow text-muted-foreground">{s.meta}</span>
                <span className="font-serif italic text-base text-foreground">{s.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const stats = [
    { n: '5.0★', l: 'Google Rating' },
    { n: '107+', l: 'Verified Reviews' },
    { n: '15+', l: 'Years of Craft' },
    { n: '1:1', l: 'Doctor Time' },
  ]
  return (
    <section id="why" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={clinicInterior}
            alt="V Dental Health & Aesthetics interior in Charlotte"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pl-10">
          <div className="text-eyebrow text-accent mb-6">Why V Dental</div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] mb-8">
            High-end technology,<br />
            <em className="italic">human hands.</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
            We invest in digital smile design, intraoral scanning, and ceramic artistry — but the
            defining ingredient is Dr. Viloria's unhurried attention. Every visit is quiet, private,
            and calibrated to you.
          </p>
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl text-foreground">{s.n}</div>
                <div className="text-eyebrow text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Doctor() {
  return (
    <section className="py-24 lg:py-36 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <img
            src={doctor}
            alt="Dr. Viloria of V Dental Health & Aesthetics"
            loading="lazy"
            width={1200}
            height={1500}
            className="w-full aspect-[4/5] object-cover grayscale"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <div className="text-eyebrow text-accent mb-6">The Doctor</div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] mb-8">
            Dr. Viloria —<br />
            <em className="italic">devoted to the details.</em>
          </h2>
          <p className="text-background/70 leading-relaxed mb-6 max-w-lg">
            Trained in aesthetic and restorative dentistry, Dr. Viloria approaches every smile as a
            small piece of architecture: light, proportion, and material considered together.
          </p>
          <p className="text-background/70 leading-relaxed max-w-lg italic font-serif text-lg">
            "A smile should feel like it was always yours — only more of it."
          </p>
          <div className="hairline my-10 opacity-30" />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-background/60 px-7 py-4 text-sm tracking-wide hover:bg-background hover:text-foreground transition"
          >
            Meet Dr. Viloria <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    name: 'Nicole Augustine',
    body: "Every part of my experience felt smooth and thoughtful. Truly one of the loveliest offices I've been to.",
    when: '2 weeks ago',
  },
  {
    name: 'Anthony Sowards',
    body: 'Dr. Viloria was excellent explaining every option in detail. Great experience from front to finish.',
    when: '3 months ago',
  },
  {
    name: 'Supriya P.',
    body: "Calm, clean atmosphere and a genuinely warm front-desk team. I'll be back.",
    when: '1 month ago',
  },
]

function Reviews() {
  return (
    <section className="py-24 lg:py-36 bg-cream/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-eyebrow text-accent mb-6">Kind Words</div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05]">
            5.0 on Google, <em className="italic">107 reviews</em> and counting.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <blockquote key={r.name} className="bg-background border border-border p-8 flex flex-col">
              <div className="flex items-center gap-1 text-accent mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="font-serif text-xl leading-snug mb-8 flex-1">"{r.body}"</p>
              <footer className="text-eyebrow text-muted-foreground flex items-center justify-between">
                <span>{r.name}</span>
                <span>{r.when}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section id="visit" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-eyebrow text-accent mb-6">Visit</div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] mb-10">
            Come see the<br /><em className="italic">studio.</em>
          </h2>
          <div className="space-y-6 text-sm">
            <InfoRow icon={MapPin} label="Address" value="5346 Docia Crossing Rd, Ste 5346C" sub="Charlotte, NC 28269" />
            <InfoRow icon={Phone} label="Call" value="+1 (980) 224-5162" href="tel:+19802245162" />
            <InfoRow icon={Clock} label="Hours" value="Mon – Fri · 9:00 – 17:00" sub="Weekends by appointment" />
            <InfoRow icon={Calendar} label="Booking" value="myoryx.com" href={BOOKING_URL} />
          </div>
          <div className="mt-10 flex gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-sm tracking-wide hover:bg-accent transition"
            >
              Book Consultation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 min-h-[420px]">
          <iframe
            title="V Dental Health & Aesthetics location"
            className="w-full h-full min-h-[420px] border border-border grayscale"
            src="https://www.google.com/maps?q=5346+Docia+Crossing+Rd+Ste+5346C,+Charlotte,+NC+28269&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ElementType
  label: string
  value: string
  sub?: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <Icon className="h-4 w-4 text-accent mt-1" strokeWidth={1.5} />
      <div>
        <div className="text-eyebrow text-muted-foreground mb-1">{label}</div>
        <div className="font-serif text-2xl leading-tight group-hover:text-accent transition">{value}</div>
        {sub && <div className="text-muted-foreground mt-1">{sub}</div>}
      </div>
    </div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <div className="font-serif text-5xl lg:text-7xl leading-[0.95]">
              V Dental<br />
              <em className="italic text-accent">Health & Aesthetics</em>
            </div>
          </div>
          <div className="lg:col-span-3 text-sm space-y-2 text-background/70">
            <div className="text-eyebrow text-background mb-3">Studio</div>
            <p>5346 Docia Crossing Rd</p>
            <p>Ste 5346C</p>
            <p>Charlotte, NC 28269</p>
          </div>
          <div className="lg:col-span-3 text-sm space-y-2 text-background/70">
            <div className="text-eyebrow text-background mb-3">Contact</div>
            <p><a href="tel:+19802245162" className="hover:text-accent">+1 (980) 224-5162</a></p>
            <p><a href={BOOKING_URL} target="_blank" rel="noreferrer" className="hover:text-accent">myoryx.com</a></p>
            <p>vdentalhealth.com</p>
          </div>
        </div>
        <div className="hairline opacity-30 mb-8" />
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} V Dental Health & Aesthetics. Charlotte, NC.</p>
          <p>Welcoming · LGBTQ+ friendly · Asian-owned</p>
        </div>
      </div>
    </footer>
  )
}

function BookingBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border lg:hidden">
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="text-xs">
          <div className="font-serif text-base leading-none">V Dental</div>
          <div className="text-muted-foreground mt-0.5">Charlotte · 5.0★</div>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm"
        >
          Book <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
