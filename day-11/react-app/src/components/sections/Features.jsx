import Container from "../layout/Container";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Verified Companies",
      description: "Apply only to trusted and verified employers."
    },
    {
      title: "Smart Job Matching",
      description: "Jobs tailored to your skills and experience."
    },
    {
      title: "Fast Applications",
      description: "Apply to jobs with just a few clicks."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
