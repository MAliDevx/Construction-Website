import { MessageSquare, FileText, PenTool, Activity, Home } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { ProcessStep } from '../molecules/Cards';
import { act } from 'react';


export const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Connect with Us', description: 'Share your basic details through a quick form. Our team contacts you within 20 minutes for a free technical consultation.', icon: <MessageSquare /> },
    { number: '02', title: 'Define Your Requirements', description: 'Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.', icon: <FileText />, active: true },
    { number: '03', title: 'Approve The Designs', description: 'Review floor plans, drawings, and 3D views. Work closely with our architects until every detail is finalized.', icon: <PenTool /> },
    { number: '04', title: 'Track Live Progress', description: 'Track construction in real time via our app with daily photos, quality reports, and payment updates.', icon: <Activity /> },
    { number: '05', title: 'Move In Forward', description: 'Take possession of your fully completed home. Move in with confidence, backed by a 10year warranty.', icon: <Home />, active: true },
  ];

  return (
<section className="section-padding">
  <div className="text-center mb-16 space-y-4">
    <Heading level={2}>Our Construction Process</Heading>
    <Text variant="muted">Plan. Build. Track. Move In</Text>
  </div>

  {/* Top 3 Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {steps.slice(0, 3).map((step, index) => (
      <ProcessStep
        key={index}
        number={step.number}
        title={step.title}
        description={step.description}
        icon={step.icon}
        active={step.active}
      />
    ))}
  </div>

  {/* Bottom 2 Cards Centered */}
  <div className="flex justify-center gap-8 mt-8 flex-wrap">
    {steps.slice(3, 5).map((step, index) => (
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <ProcessStep
          key={index}
          number={step.number}
          title={step.title}
          description={step.description}
          icon={step.icon}
          active={step.active}
        />
      </div>
    ))}
  </div>
</section>
  );
};
