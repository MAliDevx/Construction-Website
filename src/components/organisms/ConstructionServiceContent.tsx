import { Heading, Text } from '../atoms/Typography';

export const ConstructionServiceContent = () => {
  const features = [
    { number: '01', label: 'Experienced Engineers' },
    { number: '02', label: 'High Quality Materials' },
    { number: '03', label: 'On-Time Project Delivery' },
    { number: '04', label: '24/7 Support' },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Complete Construction Solutions For Residential & Commercial Projects
          </Heading>
          
          <Text className="text-muted text-lg leading-relaxed">
            We Provide End-To-End Construction Services From Planning And Design To Execution And Final Delivery. Our Team Ensures Every Project Meets High Quality, Safety, And Durability Standards. Because We Don't Just Construct, We Provide:
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.number} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                  {feature.number}
                </div>
                <span className="font-semibold text-secondary text-lg">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/const-site-large/1200/800" 
              alt="Construction Site" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
