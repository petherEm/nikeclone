import Image from "next/image";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SuperQuality from "@/components/SuperQuality";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import CustomerReviews from "@/components/CustomerReviews";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </main>
  );
}
