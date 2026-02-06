import { useState } from "react";
import Button from "../ui/atoms/Button";
import Input from "../ui/atoms/Input";
import Loader from "../ui/atoms/Loader";
import Select from "../ui/molecules/Select";
import Modal from "../ui/organisms/Modal";
import ToastContainer from "../ui/organisms/Toast/ToastContainer";
import "./demo.css";

function DemoPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="demo-container">
      <h1>UI Component Library</h1>
      <p className="subtitle">Reusable, consistent, props-driven components</p>

      <section className="demo-card">
        <h2>Buttons</h2>
        <div className="row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section className="demo-card">
        <h2>Inputs & Select</h2>
        <Input placeholder="Email address" />
        <Select options={["React", "Vue", "Angular"]} />
      </section>

      <section className="demo-card">
        <h2>Loader</h2>
        <Loader />
      </section>

      <section className="demo-card">
        <h2>Modal</h2>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </section>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>Modal Title</h3>
        <p>This is a reusable modal component.</p>
      </Modal>

      <ToastContainer toasts={["Saved!", "Updated!"]} />
    </div>
  );
}

export default DemoPage;
