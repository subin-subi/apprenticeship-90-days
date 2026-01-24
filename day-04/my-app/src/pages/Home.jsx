import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";


export default function Home() {
return (
<div className="min-h-screen flex flex-col bg-gray-100">
<Navbar title="90 Days Apprenticeship" />


<main className="flex-1 px-10 py-10">
<h2 className="text-2xl font-bold mb-6">Learning Path</h2>
<div className="flex flex-wrap gap-6">
<Card
title="React Basics"
description="Learn reusable components and props"
image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
buttonLabel="Start"
/>


<Card
title="JavaScript"
description="Master core JavaScript concepts"
image="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
buttonLabel="Learn"
/>
</div>
</main>


<Footer />
</div>
);

}