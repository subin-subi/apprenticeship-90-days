import Container from "../layout/Container";
import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="bg-indigo-700 py-16 text-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your career journey?
          </h2>
          <p className="text-indigo-100 mb-6">
            Join thousands of professionals already using our platform.
          </p>
          <Button>Join Now</Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
