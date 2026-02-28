import { StatCard } from '../molecules/Cards';
import { BranchCard } from '../molecules/Inputs';
import { Heading, Text } from '../atoms/Typography';

export const StatsSection = () => {
  const stats = [
    { number: '10,142+', label: 'Homes Built and handed over' },
    { number: '10+ Cities', label: 'Operational presence' },
    { number: '8 Months', label: 'Express execution' },
    { number: '10,142+', label: 'Design Plans' },
  ];

  return (
    <section className="section-padding">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={index} 
            number={stat.number}
            label={stat.label}
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export const BranchesSection = () => {
  const branches = [
    { name: 'Anantapur', count: '25+', image: 'https://picsum.photos/seed/city1/400/400' },
    { name: 'Vijayawada', count: '42+', image: 'https://picsum.photos/seed/city2/400/400' },
    { name: 'Penukonda', count: '22+', image: 'https://picsum.photos/seed/city3/400/400' },
    { name: 'Sri Satya Sai', count: '13+', image: 'https://picsum.photos/seed/city4/400/400' },
    { name: 'Kurnool', count: '65+', image: 'https://picsum.photos/seed/city5/400/400' },
    { name: 'YSR Kadapa', count: '11+', image: 'https://picsum.photos/seed/city6/400/400' },
  ];

  return (
    <section className="bg-slate-50 section-padding">
      <div className="text-center mb-16 space-y-4">
        <Heading level={2}>Explore our Branches</Heading>
        <Text variant="muted">We are available in 10+ cities</Text>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {branches.map((branch, index) => (
          <BranchCard 
            key={index} 
            name={branch.name}
            count={branch.count}
            image={branch.image}
          />
        ))}
      </div>
    </section>
  );
};
