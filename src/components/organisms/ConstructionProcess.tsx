import { MessageSquare, FileText, PenTool, Activity, Home,Key } from 'lucide-react';
import { Heading, Text } from '../atoms/Typography';
import { ProcessStep } from '../molecules/Cards';


export const ProcessSection = () => {
const steps = [
  {
    number: '01',
    title: 'Consultation & Planning',
    description: 'Share your project details via our form. Our team will contact you within 20 minutes for a free technical consultation to understand your needs.',
    icon: <MessageSquare />,
  },
  {
    number: '02',
    title: 'Design & Estimation',
    description: 'Our architects and engineers discuss your plot, budget, and vision. We provide detailed 2D/3D designs and a transparent cost estimation.',
    icon: <FileText />,
    active: true,
  },
  {
    number: '03',
    title: 'Approval & Agreement',
    description: 'Review floor plans, elevations, and 3D renders. Finalize the design and sign a clear agreement outlining timelines, costs, and deliverables.',
    icon: <PenTool />,
  },
  {
    number: '04',
    title: 'Construction Execution',
    description: 'Construction begins with quality-controlled materials and skilled labor. Track progress through our app with daily photos, reports, and payment updates.',
    icon: <Activity />,
    active: true,
  },
  {
    number: '05',
    title: 'Interior Finishing',
    description: 'Our team completes interiors with premium fittings, flooring, painting, and fixtures, ensuring your home is ready for living with attention to detail.',
    icon: <Home />,
  },
  {
    number: '06',
    title: 'Handover & Support',
    description: 'Receive your fully completed home along with a 10-year structural warranty. Our team provides post-handover support for smooth move-in and any queries.',
    icon: <Key />,
    active: true,
  },
];

  return (
<section className="section-padding">
  <div className="text-center mb-16 space-y-4">
    <Heading level={2}>Our Construction Process</Heading>
    <Text variant="muted">Plan. Build. Track. Move In</Text>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {steps.slice(0, 6).map((step, index) => (
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

  {/* <div className="flex justify-center gap-8 mt-8 flex-wrap">
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
  </div> */}
</section>
  );
};
