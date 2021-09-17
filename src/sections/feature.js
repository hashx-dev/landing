/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Marketplace',
    title: 'Trusted Marketplace',
    text:
      'Explore, attract and join a community of early adopters who are eager to make your business, their business.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'Engage your Audience',
    text:
      'Reach out, collaborate and integrate your community through seamless experiences and futuristic touchpoints.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Reward your Champions',
    text:
      'Recognize, enlist and empower individuals to represent your brand. Profit from new collaborations.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Take your products, services and community to the next level"
          description="Leverage our expertise and technology to scale to new heights, so you can focus on what you are best at, and forget the rest."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
